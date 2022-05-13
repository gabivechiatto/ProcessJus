import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;  
  flex-direction: column;  

  @media print and screen and (max-width: 30em) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Description = styled.p`
  font-size: 1.5rem;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormContent = styled.form`
  height: 6.3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  vertical-align: middle;
  margin-bottom: 1.5rem;
  margin-top: 2rem;

  @media only screen and (max-width: 36em) {
    height: 10rem;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;

    input[type='text'] {
      width: 90vw;
    }    
  }
`;

export const Input = styled.input`
  width: 300px;
  padding: 0.8rem;
  border-radius: 3px;
  background: var(--white);
  border: 1px solid var(--dark-blue); 
  outline: 0;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

export const FormButton = styled.button`
  width: 130px;
  border: 1px solid var(--dark-blue); 
  background: var(--dark-blue);
  color: var(--white);
  padding: 0.5rem 1rem;
  margin-left: 15px;
  border-radius: 3px;
  text-align: center;
  font-weight: 700;
  align-self: center;

  &:disabled {
    background: var(--dark-blue);
    opacity: 0.15;
    cursor: not-allowed;

    &:hover {
      color: inherit;
      cursor: pointer;
    }
  }
  
  &:hover {
    background: var(--dark-blue);
    opacity: 0.9;    
  }
`;

export const ErrorMessage = styled.p`
  color: var(--orange);
  font-size: 0.8em;
  padding: 0.5rem;
`;
