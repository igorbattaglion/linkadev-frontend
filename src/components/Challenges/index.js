import React from 'react';

import { MainContent, Hackathon, HackathonInfo, RequesterInfo, HackathonCompetency, RequesterSpan, TagSpan } from './styles'
import LogoSimples from '../../assets/linkaDev_logo_simples.png';


function Challenges() {

  return (
    <MainContent>
       <Hackathon>
           <HackathonInfo>

               <RequesterInfo>
                   <img style={{width: '70px'}} src={LogoSimples} alt="logo empresa"></img>
                   <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <RequesterSpan>Nome - Hack</RequesterSpan>
                        <span>Google</span>
                   </div>
               </RequesterInfo>

               <div>
                   <RequesterSpan>Premio: R$ 100,00</RequesterSpan>
               </div>

           </HackathonInfo>
           <HackathonCompetency>
               <div>
                   <TagSpan>HTML</TagSpan>
                   <TagSpan>CSS</TagSpan>
                   <TagSpan>JS</TagSpan>
               </div>
               <div>
                   <button>Participar</button>
               </div>

           </HackathonCompetency>
       </Hackathon>
    </MainContent>
  );

}

export default Challenges;
