import styled from 'styled-components';

export const TestSpan = styled.span`
	color: #FFF;
`;

export const NavBar = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    background-color: ${props => props.theme.secundaryColor};
    justify-content: center;
    align-items: center;
`;

export const MainContent = styled.div`
    width: 80%;
    display: flex; 
    flex-direction: row; 
    justify-content: space-between;
    align-items: center;
`;

export const Content = styled.div`
    
`;

export const UserArea = styled.div`
    
`;
