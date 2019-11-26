import React from 'react';

import { MainContent, LogoSection, ChallengesSection, LogoImage, SloganSection, SloganText } from './styles'
import Logo from '../../assets/linkaDev.png'
import Challenges from '../../components/Challenges'

function Home() {

  return (
    <MainContent>

        <SloganSection>

            <LogoSection>
                <LogoImage src={Logo} alt="Logo"></LogoImage>
            </LogoSection>

            <SloganText>
                <span>Bla bla bla, bla bla bla bla bla bla.</span>
                <span>Bla bla bla, bla bla.</span>
            </SloganText>

        </SloganSection>

        <ChallengesSection>

            <Challenges/>

        </ChallengesSection>
        
    </MainContent>
  );

}

export default Home;
