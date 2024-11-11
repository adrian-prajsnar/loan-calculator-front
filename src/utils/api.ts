import { LoanFormData, LoanResponse } from '../types/Loan';
import { BASE_API_URL } from './constants';

async function submitLoanData(formData: LoanFormData): Promise<LoanResponse> {
  try {
    const response = await fetch(`${BASE_API_URL}/api/v1/loan`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) throw new Error('Failed to submit loan data');

    const data = (await response.json()) as LoanResponse;

    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export { submitLoanData };
