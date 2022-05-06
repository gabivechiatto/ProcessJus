import styled from 'styled-components';

export const HeaderContent = styled.header`
  width: 100vw;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: var(--dark-red);
  color: var(--white);
  font-size: 1.75rem;
  font-weight: 500;
  padding: 0.5rem;

  @media only screen and (max-width: 36em) {
    height: 8rem;    
    flex-wrap: wrap;    
  }
`;
