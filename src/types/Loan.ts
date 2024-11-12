type LoanFormData = {
  allInstallments: number;
  remainingInstallments: number;
  installmentAmount: number;
  financingAmount: number;
  interestRate: number;
  userEmail: string;
};

type LoanResponse = {
  status: 'success' | 'warning' | 'error';
  message: string;
};

type UseLoanFormResult = {
  formData: LoanFormData;
  isLoading: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
};

export type { LoanFormData, LoanResponse, UseLoanFormResult };
