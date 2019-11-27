import React, { useState } from 'react';

import { MainContent, Hackathon, HackathonInfo, RequesterInfo, HackathonCompetency, 
    RequesterSpan, TagSpan, RequesterName, Button, HackatonDetails, DetailsText, Divider } from './styles'
import LogoSimples from '../../assets/linkaDev_logo_simples.png';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 : '50%',
      height                : '600px',
      borderRadius          : '10px',
      backgroundColor       : '#0C162A'
    }
  };


export const Challenges = (props) => {
    const [modalIsOpen,setIsOpen] = React.useState(false);

  return (
    <>
    <MainContent>
       <Hackathon onClick={() => setIsOpen(true)}>
           <HackathonInfo>

               <RequesterInfo>
                   <img style={{width: '70px'}} src={LogoSimples} alt="logo empresa"></img>
                   <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <RequesterSpan>Nome - Hack</RequesterSpan>
                        <RequesterName>Google</RequesterName>
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
                   <Button>Participar</Button>
               </div>

           </HackathonCompetency>
       </Hackathon>

       <Hackathon>
           <HackathonInfo>

               <RequesterInfo>
                   <img style={{width: '70px'}} src={LogoSimples} alt="logo empresa"></img>
                   <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <RequesterSpan>Nome - Hack</RequesterSpan>
                        <RequesterName>Google</RequesterName>
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
                   <Button>Participar</Button>
               </div>

           </HackathonCompetency>
       </Hackathon>

       <Hackathon>
           <HackathonInfo>

               <RequesterInfo>
                   <img style={{width: '70px'}} src={LogoSimples} alt="logo empresa"></img>
                   <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <RequesterSpan>Nome - Hack</RequesterSpan>
                        <RequesterName>Google</RequesterName>
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
                   <Button>Participar</Button>
               </div>

           </HackathonCompetency>
       </Hackathon>

       <Hackathon>
           <HackathonInfo>

               <RequesterInfo>
                   <img style={{width: '70px'}} src={LogoSimples} alt="logo empresa"></img>
                   <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <RequesterSpan>Nome - Hack</RequesterSpan>
                        <RequesterName>Google</RequesterName>
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
                   <Button>Participar</Button>
               </div>

           </HackathonCompetency>
       </Hackathon>

    </MainContent>
    <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
    >
        <HackatonDetails onClick={() => setIsOpen(false)}>

            <DetailsText>Detalhes do Hackathon</DetailsText>
            
            <Divider/>

        </HackatonDetails>
    </Modal>
    </>
  );

}
