import styled from 'styled-components';

export const TestSpan = styled.span`
	color: ${props => props.theme.secundaryColor};
`;

export const SloganSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.primaryColor} ;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
`;

export const SloganText = styled.div`
    font-size: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const LogoSection = styled.div`
    display: flex;
    justify-content: center;
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
    background-color: #FFF;
    align-items: center;
    padding: 50px 0 10px;
`;

export const UserArea = styled.div`
    
`;


export const LogoImage = styled.img`
    width: 50%;
`;