import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;  
  flex-wrap: wrap;  
  height: 100%;
  border: 1px solid black;
  border-radius: 3px;
  padding: 1.2rem;

  @media print and screen and (max-width: 42em) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;

export const HeaderContent = styled.div`
  display: flex;  
  flex-direction: column;
  text-align: center;
  width: 100%;  
`;

export const TitleProcess = styled.h3`
  font-size: 1.8rem;  
  color: var(--blue);
  font-weight: 500;
`;

export const TitleCourt = styled.h3`
  font-size: 1.8rem;  
  color: var(--blue);
  font-weight: 500;
`;

export const Time = styled.time`
  font-size: 1rem;    
  font-weight: 500;
  margin-top: 25px;
`;

export const Subtitle = styled.h4`
  font-size: 1.35rem;  
  word-wrap: break-word;
  color: var(--orange);
  margin-top: 25px;    
`;

export const Details = styled.div`   
  height: 100%; 
  flex-direction: column;  
`;

export const Info = styled.div`
  width: 100%;  
  font-size: 0.9rem;
  display: flex;
  line-height: 2rem;
  flex-direction: column; 
`;

export const ContainerParts = styled.div`  
  display: flex;
  flex-direction: row;   
  text-transform: uppercase;  
  
  @media only screen and (max-width: 26.5em) {
    font-size: 0.8rem;
    flex-wrap: break-word;
    width: 100%;
    text-align: left;    
  }
`;

export const Parts = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  line-height: 2.5rem; 

  @media only screen and (max-width: 26.5em) {
    font-size: 0.8rem;
    flex-wrap: break-word;
    width: 100%;
    text-align: left;    
  }
`;

export const Movimentations = styled(Subtitle)`
  color: var(--orange);  
  margin-top: 1.5rem;
`;

export const Mov = styled.table`
  width: 100%;
  height: 100%;
  margin-top: 1rem;
  border-spacing: 0 0.5rem;
  text-align: left;  

  tbody {
    font-size: 0.8rem;  

    td {
      border-bottom: 1px solid var(--green);
      padding: 0 0.25rem;
    }

    tr {
      padding: 0.5rem;
    }
  }
  
  @media only screen and (max-width: 26.5em) {
    font-size: 0.8rem;
  }
`;
