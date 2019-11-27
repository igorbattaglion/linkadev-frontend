import React, { useState } from 'react';

import { MainContent, Hackathon, HackathonInfo, RequesterInfo, HackathonCompetency, 
    RequesterSpan, TagSpan, RequesterName, Button, HackatonDetails, DetailsText, Divider } from './styles.js'
import LogoSimples from '../../assets/linkaDev_logo_simples.png';
import Modal from 'react-modal';
import './styles.css';
import LogoTexto from '../../assets/linkaDev_logo_txt.png'
import UserProfile from '../../assets/user(1).svg'

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

    <section class="colored-section" id="title">

        <div class="container-fluid">

            <nav class="navbar navbar-expand-lg navbar-dark ">

                <a href="index.html">
                    <img src={LogoTexto} class="navbar-brand" width="220px" height="70px"/>
                </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
                    <span class="navbar-toggler-icon "></span>
                </button>



            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

                <ul class="navbar-nav ml-auto ">
                    <li class="nav-item">
                        <a class="nav-link " href="#footer ">Sobre Nós</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-target="#carouselExampleControls" data-slide-to="1" href="index.html">Comunidade</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#cta ">Cadastre-se</a>
                    </li>
                    <li class="nav-item">
                        <img class="nav-item" src={UserProfile} alt="user profile" height="40rem"/>
                    </li>
                </ul>

            </div>

            </nav>

             <div class="row">

                <div class="col-lg-6 ">
                    <h1 class="section-heading4 ">Welcome</h1>
                    <h1 class="big-heading ">HACKALANDER</h1>
                </div>

                <div class="col-lg-6 ">
                    <img src="" class="title-image2" alt=""/>
                </div>

            </div>
        </div>    


       
    </section>

    <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px', flexDirection: 'column' }}>

        <Hackathon onClick={()=> setIsOpen(true)}>
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

        <Hackathon onClick={()=> setIsOpen(true)}>
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

        <Hackathon onClick={()=> setIsOpen(true)}>
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

        <Hackathon onClick={()=> setIsOpen(true)}>
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
    </div>


    <footer class="white-section " id="footer ">

    <div class="container-fluid ">
        <i class="social-icon fab fa-facebook-f "></i>
        <i class="social-icon fab fa-twitter "></i>
        <i class="social-icon fab fa-instagram "></i>
        <i class="social-icon fas fa-envelope "></i>
        <p class="p-features ">© Copyright 2019 linkaDev</p>
    </div>

    </footer>

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
