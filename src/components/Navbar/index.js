import React from 'react';
import { TestSpan, NavBar, MainContent, Content, UserArea } from './styles'
import { Dropdown, NavItem } from 'react-materialize'
import UserDefault from '../../assets/user.svg';
import LogoSimples from '../../assets/linkaDev_logo_simples.png';


function Navbar() {

  return (
    <NavBar>
        <MainContent>
            <Content>
                <img style={{ width: '70px' }} src={LogoSimples} alt="linka-Dev"></img>
            </Content>
            <UserArea>
                <Dropdown trigger={
                  <img style={{ width: '30%' }} src={UserDefault} alt="user"></img>
                }>
                  <NavItem >Contas</NavItem>
                  <NavItem >Sair</NavItem>
                </Dropdown>
            </UserArea>
        </MainContent>
        
    </NavBar>
  );

}

export default Navbar;
