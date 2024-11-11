import styled from 'styled-components';

const Container = styled.div`
  max-width: 640px;
  margin: 0 auto;
  padding: 3.2rem 2.4rem;

  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  & h1 {
    text-align: center;
    font-weight: 700;
  }
`;

export default Container;
