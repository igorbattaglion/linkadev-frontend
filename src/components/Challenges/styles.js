import styled from 'styled-components';

export const MainContent = styled.div`
    width: 50%;
    display: flex; 
    flex-direction: column; 
    justify-content: center;
    align-items: center;
`;

export const Hackathon = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: linear-gradient(#0C162A, #0E4F8A) ;
    margin: 10px;
    padding: 15px;
    border-radius: 10px;
    &:hover {
        transform: scale(1.1);
  }
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
  cursor: pointer;
`;

export const HackathonInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 40px;
`;

export const HackathonCompetency = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

export const RequesterInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const RequesterSpan = styled.span`
    color: ${props => props.theme.secundaryFontColor};
    font-size: 25px;
    font-weight: 600;
`;

export const RequesterName = styled.span`
    color: ${props => props.theme.secundaryFontColor};
`;

export const TagSpan = styled.span`
    background-color: ${props => props.theme.secundaryFontColor};
    color:  ${props => props.theme.primaryFontColor};
    font-size: 25px;
    padding: 5px;
    border-radius: 5px;
    margin-right: 5px;
`;

export const Button = styled.button`
    padding: 10px;
    border: 1px solid ${props => props.theme.secundaryFontColor};
    background-color: ${props => props.theme.secundaryFontColor};
    color:  ${props => props.theme.primaryFontColor};
    border-radius: 5px;
`;

export const HackatonDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const DetailsText = styled.span`
    font-size: 25px;
    color: ${props => props.theme.secundaryFontColor};
`;

export const Divider = styled.div`
    height: 1px;
    overflow: hidden;
    background-color: ${props => props.theme.secundaryFontColor};
    width: 100%;
`;
