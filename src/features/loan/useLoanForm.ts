import { useState } from 'react';
import toast from 'react-hot-toast';
import { LoanFormData, LoanResponse, UseLoanFormResult } from '../../types/Loan';
import { submitLoanData } from '../../utils/api';

function useLoanForm(): UseLoanFormResult {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<LoanFormData>({
    allInstallments: 100,
    remainingInstallments: 90,
    installmentAmount: 5000,
    financingAmount: 500000,
    interestRate: 2.5,
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
    setIsLoading(true);

    const isFormComplete: boolean = Object.values(formData).every(value => value !== '' && value !== 0);
    if (!isFormComplete) {
      toast.error('Fields cannot be empty or 0, please try again.');
      setIsLoading(false);
      return;
    }

    const hasNegativeValue: boolean = Object.entries(formData).some(
      ([key, value]) => key !== 'userEmail' && typeof value === 'number' && value < 0
    );
    if (hasNegativeValue) {
      toast.error('Values cannot be negative, please try again.');
      setIsLoading(false);
      return;
    }

    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.userEmail)) {
      toast.error('Invalid email, please try again.');
      setIsLoading(false);
      return;
    }

    try {
      const response: LoanResponse = await submitLoanData(formData);

      if (response.status === 'error')
        toast.error(`${response.message}. Your data won't be computed and added to the database.`);
      else if (response.status === 'info') toast(`${response.message}.`);
      else {
        toast.success('Your data has been computed and added to the database.');
        setFormData({
          allInstallments: 0,
          remainingInstallments: 0,
          installmentAmount: 0,
          financingAmount: 0,
          interestRate: 0,
          userEmail: ''
        });
      }
    } catch (error) {
      console.error(error);
      toast.error('There was the server error while submitting loan data, please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    isLoading,
    handleChange,
    handleSubmit
  };
}

export { useLoanForm };
