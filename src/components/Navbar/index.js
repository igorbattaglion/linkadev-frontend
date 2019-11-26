import React from 'react';
import { TestSpan, NavBar, MainContent, Content, UserArea } from './styles'
import { Dropdown, NavItem } from 'react-materialize';

function Navbar() {

  return (
    <NavBar>
        <MainContent>
            <Content>
                <TestSpan>Side one</TestSpan>
            </Content>
            <UserArea>
                <Dropdown trigger={
                  <img src={'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'}></img>
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
