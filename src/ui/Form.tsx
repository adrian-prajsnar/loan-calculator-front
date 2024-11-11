import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  column-gap: 2.4rem;

  &:last-of-type {
    margin-bottom: 2.4rem;
  }
`;

const Input = styled.input`
  padding: 0.8rem 1.6rem;
  border: 1px solid #bbb;
  border-radius: 4px;
`;

const Label = styled.label`
  font-weight: 500;
`;

const FormErrorMessage = styled.p`
  color: #eb1700;
  text-align: center;
`;

const ButtonSubmit = styled.button`
  color: #fff;
  background-color: #555;
  font-weight: 500;
  margin-left: auto;
  width: fit-content;
  padding: 1.2rem 2.4rem;
  border: 1px solid currentColor;
  border-radius: 4px;
`;

export { Form, FormRow, Input, Label, FormErrorMessage, ButtonSubmit };
