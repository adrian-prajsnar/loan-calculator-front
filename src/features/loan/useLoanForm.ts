import { useState } from 'react';
import { LoanFormData, UseLoanFormResult } from '../../types/Loan';
import { submitLoanData } from '../../utils/api';

function useLoanForm(): UseLoanFormResult {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<LoanFormData>({
    allInstallments: 100,
    remainingInstallments: 90,
    installmentAmount: 5000,
    financingAmount: 500000,
    interestRate: 2.75,
    userEmail: 'test@email.com'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData(prevData => ({
      ...prevData,
      [name]: name === 'userEmail' ? value : parseFloat(value) || ''
    }));
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setErrorMessage(null);
    setIsLoading(true);

    const isFormComplete: boolean = Object.values(formData).every(value => value !== '' && value !== 0);
    if (!isFormComplete) {
      setErrorMessage('Fields cannot be empty or "0", please try again.');
      setIsLoading(false);
      return;
    }

    const hasNegativeValue: boolean = Object.entries(formData).some(
      ([key, value]) => key !== 'userEmail' && typeof value === 'number' && value < 0
    );
    if (hasNegativeValue) {
      setErrorMessage('Values cannot be negative, please try again.');
      setIsLoading(false);
      return;
    }

    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.userEmail)) {
      setErrorMessage('Invalid email, please try again.');
      setIsLoading(false);
      return;
    }

    try {
      console.log(formData);
      await submitLoanData(formData);
    } catch (error) {
      console.error(error);
      setErrorMessage('Failed to submit loan data, please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    errorMessage,
    isLoading,
    handleChange,
    handleSubmit
  };
}

export { useLoanForm };
