import styled from 'styled-components';

export const TestSpan = styled.span`
	color: ${props => props.theme.secundaryColor};
`;

export const LogoSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: black;
    justify-content: center;
    height: 300px;
`;

export const MainContent = styled.div`
    width: 100%;
    display: flex; 
    flex-direction: column; 
`;

export const ChallengesSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.secundaryColor} ;
    justify-content: center;
    height: 500px;
`;

export const UserArea = styled.div`
    
`;
