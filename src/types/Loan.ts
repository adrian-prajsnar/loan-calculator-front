type LoanFormData = {
  allInstallments: number;
  remainingInstallments: number;
  installmentAmount: number;
  financingAmount: number;
  interestRate: number;
  userEmail: string;
};

type LoanResponse = {
  success: boolean;
  message: string;
};

type UseLoanFormResult = {
  formData: LoanFormData;
  errorMessage: string | null;
  isLoading: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
};

export type { LoanFormData, LoanResponse, UseLoanFormResult };
