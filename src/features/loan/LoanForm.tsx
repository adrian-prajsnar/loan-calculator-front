import { useLoanForm } from './useLoanForm';
import { ButtonSubmit, Form, FormErrorMessage, FormRow, Input, Label } from '../../ui/Form';

function LoanForm() {
  const { formData, errorMessage, handleChange, handleSubmit } = useLoanForm();

  return (
    <Form onSubmit={(e) => void handleSubmit(e)}>
      {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}

      <FormRow>
        <Label htmlFor="allInstallments">All Installments</Label>
        <Input
          type="number"
          id="allInstallments"
          name="allInstallments"
          value={formData.allInstallments}
          onChange={handleChange}
          required
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="remainingInstallments">Remaining Installments</Label>
        <Input
          type="number"
          id="remainingInstallments"
          name="remainingInstallments"
          value={formData.remainingInstallments}
          onChange={handleChange}
          required
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="installmentAmount">Installment Amount</Label>
        <Input
          type="number"
          id="installmentAmount"
          name="installmentAmount"
          value={formData.installmentAmount}
          onChange={handleChange}
          required
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="financingAmount">Financing Amount</Label>
        <Input
          type="number"
          id="financingAmount"
          name="financingAmount"
          value={formData.financingAmount}
          onChange={handleChange}
          required
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="interestRate">Interest Rate</Label>
        <Input
          type="number"
          id="interestRate"
          name="interestRate"
          value={formData.interestRate}
          onChange={handleChange}
          required
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="userEmail">User Email</Label>
        <Input
          type="email"
          id="userEmail"
          name="userEmail"
          value={formData.userEmail}
          onChange={handleChange}
          required
        />
      </FormRow>

      <ButtonSubmit type="submit">Submit Loan Data</ButtonSubmit>
    </Form>
  );
}

export default LoanForm;
