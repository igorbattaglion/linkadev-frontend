import React from 'react'
import './styles.css'
import { Link, Redirect } from 'react-router-dom'

import LogoTexto from '../../assets/linkaDev_logo_txt.png'
import UserProfile from '../../assets/user(1).svg'
import Goggle from '../../assets/google.png'
import Microsoft from '../../assets/Microsoft-logo.png'
import Facebook from '../../assets/facebook.png'
import Rocketseat from '../../assets/rocketseat.png'

export const Home = () => {

    return(
        <div>
            <section class="colored-section" id="title">

                <div class="container-fluid">


                    <nav class="navbar navbar-expand-lg navbar-dark ">

                        <img src={LogoTexto} class="navbar-brand" width="220px" height="70px"/>


                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
                            <span class="navbar-toggler-icon "></span>
                        </button>



                        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

                            <ul class="navbar-nav ml-auto ">
                                <li class="nav-item">
                                    <a class="nav-link " href="#footer ">Sobre Nós</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link " href="#pricing ">Plano de Estudos</a>
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

                    <div class="row ">

                        <div class="col-lg-6 ">
                            <h1 class="big-heading ">Aprenda a programar sem dor de cabeça.</h1>
                            <button type="button " class="btn btn-dark btn-lg download-button ">
                                Inscreva-se
                            </button>
                            <Link to='/Hackathons'>
                                <button type="button " class="btn btn-outline-light btn-lg download-button ">
                                    Hackathons
                                </button>
                            </Link>
                        </div>

                        <div class="col-lg-6 ">
                            <img src="https://media2.giphy.com/media/h8fTb2iPUHiP6SFNz1/giphy.webp?cid=790b7611acbc45a072008eb9757f5b8b37a042fcdf35bfb8&rid=giphy.webp" class="title-image" alt=""/>
                        </div>

                    </div>
                </div>

            </section>



            <section class="white-section " id="features ">

            <div class="container-fluid ">

                <div class="row ">

                    <div class="feature-box col-lg-4 ">
                        <spam class="icon fas fa-check-circle fa-4x "></spam>
                        <h3 class="feature-title ">Plano de Ensino</h3>
                        <p class="p-features ">100% personalizado para você.</p>
                    </div>

                    <div class="feature-box col-lg-4 ">
                        <spam class="icon fas fa-bullseye fa-4x "></spam>
                        <h3 class="feature-title ">Escolha entre diversos cursos</h3>
                        <p class="p-features ">Disponibilizamos os melhores cursos da web, pagos e gratuitos, para você atigir seus objetivos. </p>
                    </div>

                    <div class="feature-box col-lg-4 ">
                        <spam class="icon fas fa-heart fa-4x "></spam>
                        <h3 class="feature-title ">Mentoria</h3>
                        <p class="p-features ">Você contará com nossa equipe de tutores, sempre a disposição para te ajudar.</p>
                    </div>

                </div>

            </div>

            </section>



            <section class="colored-section " id="exemple">

                <div id="exemple-carousel" class="carousel slide " data-ride="carousel " data-interval="3000" data-pause="hover">
                    <div class="carousel-inner ">
                        <div class="carousel-item  container-fluid ">
                            <h1 class="section-heading2 ">Aprenda o caminho que você deve trilhar.</h1>
                            <h2 class="section-heading ">Tenha um plano de estudos feito pelos nossos melhores Devs, <br/> totalmente sobe medida para suas necessidades.</h2>
                            <img class=" img-Responsive " src="https://media0.giphy.com/media/244NnGCdVNjq7qpHdB/giphy.webp?cid=790b761197511865ba91e5f1a68d72d3971e2046d59e48e0&rid=giphy.webp" alt="gif emocionado "/>
                        </div>
                        <div class="carousel-item active container-fluid ">
                            <h1 class="section-heading2 ">Aplique o que aprendeu!.</h1>
                            <h2 class="section-heading ">Com nossos Hackathons, conectamos as necessidades das empresas, com o seu conhecimento.</h2>
                            <img class="img-Responsive" src="https://media3.giphy.com/media/61ThYTvYsssfItArfv/giphy.webp?cid=790b76111def6f8e531f5fc194421c64c47e4e762566064e&rid=giphy.webp" alt="gif emocionado"/>
                        </div>
                        <a class="carousel-control-prev " href="#exemple-carousel" role="button " data-slide="prev">
                            <spam class="carousel-control-prev-icon "></spam>
                        </a>
                        <a class="carousel-control-next " href="#exemple-carousel" role="button " data-slide="next">
                            <spam class="carousel-control-next-icon "></spam>
                        </a>
                     </div>   
                </div>

            </section>



            <section class="colord-section " id="press ">
                <img class="press-logo " src={Goggle} alt="tc-logo "/>
                <img class="press-logo " src={Microsoft} alt="tnw-logo "/>
                <img class="press-logo " src={Facebook} alt="biz-insider-logo "/>
                <img class="press-logo " src={Rocketseat} alt="mashable-logo "/>
            </section>



            <section class="white-section " id="pricing ">
                <img class="img-Responsive2" src="https://media2.giphy.com/media/348tK9MrR5RDNM6xYR/giphy.webp?cid=790b76111def6f8e531f5fc194421c64c47e4e762566064e&rid=giphy.webp" alt=""/>

                <h2 class="section-heading3 ">Próximos Hackathons:</h2>
                <p>Treine suas habilidades, nos Hackathons das nossas empresas parceiras.</p>

                <div class="row ">

                    <div class="princing-column col-lg-4 col-md-6 ">
                        <div class="card ">
                            <div class="card-header ">
                                <h3>Web Responsivo</h3>
                            </div>
                            <div class="card-body ">
                                <h2 class="price-text ">Habilidades:</h2>
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>Bootstrap</p>
                                <button type="button " class="btn btn-lg btn-block btn-outline-dark ">Sign up</button>
                            </div>
                        </div>
                    </div>

                    <div class="princing-column col-lg-4 col-md-6 ">
                        <div class="card ">
                            <div class="card-header ">
                                <h3>Manipulando a DOM</h3>
                            </div>
                            <div class="card-body ">
                                <h2 class="price-text ">Habilidades:</h2>
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>Javascript</p>
                                <h2 class="price-text ">Premiação:</h2>
                                <p>15% de desconto no Bootcamp da Rocketseat</p>
                                <button type="button " class="btn btn-lg btn-block btn-dark ">Sign Up</button>
                            </div>
                        </div>
                    </div>

                    <div class="princing-column col-lg-4 col-md-12 ">
                        <div class="card ">
                            <div class="card-header ">
                                <h3>Desenvolvendo uma API REST</h3>
                            </div>
                            <div class="card-body ">
                                <h2 class="price-text ">Habilidades:</h2>
                                <p>Node</p>
                                <p>Javascript</p>
                                <h2 class="price-text ">Premiação:</h2>
                                <p>Curso de Backend pela Udemy</p>
                                <button type="button " class="btn btn-lg btn-block btn-dark ">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="colored-section " id="cta ">

                <div class="container-fluid ">

                    <h3 class="big-heading ">.</h3>
                    <button type="button " class="btn btn-dark btn-lg download-button ">
                        <spam class="fab fa-apple "></spam> 
                    </button>
                    <button type="button " class="btn btn-outline-light btn-lg download-button ">
                        <spam class="fab fa-google-play "></spam> 
                    </button>

                </div>

            </section>



            <footer class="white-section " id="footer ">

            <div class="container-fluid ">
                <i class="social-icon fab fa-facebook-f "></i>
                <i class="social-icon fab fa-twitter "></i>
                <i class="social-icon fab fa-instagram "></i>
                <i class="social-icon fas fa-envelope "></i>
                <p class="p-features ">© Copyright 2019 linkaDev</p>
            </div>

            </footer>

    </div>
    )

}