import React from 'react';
import { TestSpan, NavBar, MainContent, Content, UserArea } from './styles'
function Navbar() {

  return (
    <NavBar>
        <MainContent>
            <Content>
                <TestSpan>Side one</TestSpan>
            </Content>
            <UserArea>
                <TestSpan for="users">Side two</TestSpan>
                <ul id='users'>
                    <li>
                        testando
                    </li>
                    <li>
                        testando 2
                    </li>
                </ul>
            </UserArea>
        </MainContent>
        
    </NavBar>
  );

}

export default Navbar;
