import React from 'react';

import { MainContent, LogoSection, ChallengesSection, LogoImage, SloganSection, SloganText, TextSpan } from './styles'
import Logo from '../../assets/linkaDev.png'
import { Challenges } from '../../components/Challenges'

function Hackathons() {

  return (
    <MainContent>

        <SloganSection>

            <LogoSection>
                <LogoImage src={Logo} alt="Logo"></LogoImage>
            </LogoSection>

            <SloganText>
                <TextSpan>Transformando estudo em profissão.</TextSpan>
                <TextSpan>Trasformando profissão em estudo.</TextSpan>
            </SloganText>

        </SloganSection>

        <ChallengesSection>

            <Challenges/>

        </ChallengesSection>
        
    </MainContent>
  );

}

export default Hackathons;
