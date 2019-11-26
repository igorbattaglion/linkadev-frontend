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
    background-color: ${props => props.theme.secundaryColor};
    margin: 10px;
    padding: 15px;
    border-radius: 17px;
    &:hover {
        transform: scale(1.1);
  }
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
    color: ${props => props.theme.primaryFontColor};
    font-size: 25px;
    font-weight: 500;
`;

export const TagSpan = styled.span`
    background-color: ${props => props.theme.primaryFontColor};
    color: #FFF;
    font-size: 25px;
    padding: 5px;
    border-radius: 5px;
    margin-right: 5px;
`;
