import styled from 'styled-components';

export const TextSpan = styled.span`
	color: ${props => props.theme.secundaryFontColor};
    font-size: 25px;
`;

export const SloganSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: linear-gradient(#0E4F8A, #0C162A) ;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
`;

export const SloganText = styled.div`
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