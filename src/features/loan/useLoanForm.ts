import { useState } from 'react';
import { LoanFormData, UseLoanFormResult } from '../../types/Loan';
import { submitLoanData } from '../../utils/api';

function useLoanForm(): UseLoanFormResult {
  const [formData, setFormData] = useState<LoanFormData>({
    allInstallments: 0,
    remainingInstallments: 0,
    installmentAmount: 0,
    financingAmount: 0,
    interestRate: 0,
    userEmail: ''
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'userEmail' ? value : Number(value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setErrorMessage(null);

    const isFormComplete: boolean = Object.values(formData).every((value) => value !== '' && value !== 0);
    if (!isFormComplete) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    const hasNegativeValue: boolean = Object.entries(formData).some(
      ([key, value]) => key !== 'userEmail' && typeof value === 'number' && value < 0
    );
    if (hasNegativeValue) {
      setErrorMessage('Values cannot be negative, please try again.');
      return;
    }

    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.userEmail)) {
      setErrorMessage('Invalid email, please try again.');
      return;
    }

    try {
      await submitLoanData(formData);
    } catch (error) {
      console.error(error);
      setErrorMessage('Failed to submit loan data, please try again.');
    }
  };

  return {
    formData,
    errorMessage,
    handleChange,
    handleSubmit
  };
}

export { useLoanForm };
