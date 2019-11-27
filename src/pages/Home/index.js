import React, { useEffect, useState } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import apis from '../../services/apis'

import LogoTexto from '../../assets/linkaDev_logo_txt.png'
import UserProfile from '../../assets/user(1).svg'
import Google from '../../assets/google.png'
import Microsoft from '../../assets/Microsoft-logo.png'
import Facebook from '../../assets/facebook.png'
import Rocketseat from '../../assets/rocketseat.png'

export const Home = () => {

    const [mentors, setMentors] = useState('')

    useEffect(() => {
        apis.getAllMentors()
        .then( 
            (res) => {
                console.log(res)
                console.log(res.data)
            },
            (err) => {
                console.log(err)
            }
        )
        
    });

    return(
        <div>
            <section className="colored-section" id="title">

                <div className="container-fluid">


                    <nav className="navbar navbar-expand-lg navbar-dark ">

                        <img src={LogoTexto} className="navbar-brand" width="220px" height="70px"/>


                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
                            <span className="navbar-toggler-icon "></span>
                        </button>



                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

                            <ul className="navbar-nav ml-auto ">
                                <li className="nav-item">
                                    <a className="nav-link " href="#footer ">Sobre Nós</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="#pricing ">Plano de Estudos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="#cta ">Cadastre-se</a>
                                </li>
                                <li className="nav-item">
                                    <img className="nav-item" src={UserProfile} alt="user profile" height="40rem"/>
                                </li>
                            </ul>

                        </div>

                    </nav>

                    <div className="row ">

                        <div className="col-lg-6 ">
                            <h1 className="big-heading ">Aprenda a programar sem dor de cabeça.</h1>
                            <button type="button " className="btn btn-dark btn-lg download-button ">
                                Inscreva-se
                            </button>
                            <Link to='/Hackathons'>
                                <button type="button " className="btn btn-outline-light btn-lg download-button ">
                                    Hackathons
                                </button>
                            </Link>
                        </div>

                        <div className="col-lg-6 ">
                            <img src="https://media2.giphy.com/media/h8fTb2iPUHiP6SFNz1/giphy.webp?cid=790b7611acbc45a072008eb9757f5b8b37a042fcdf35bfb8&rid=giphy.webp" className="title-image" alt=""/>
                        </div>

                    </div>
                </div>

            </section>



            <section className="white-section " id="features ">

            <div className="container-fluid ">

                <div className="row ">

                    <div className="feature-box col-lg-4 ">
                        <span className="icon fas fa-check-circle fa-4x "></span>
                        <h3 className="feature-title ">Plano de Ensino</h3>
                        <p className="p-features ">100% personalizado para você.</p>
                    </div>

                    <div className="feature-box col-lg-4 ">
                        <span className="icon fas fa-bullseye fa-4x "></span>
                        <h3 className="feature-title ">Escolha entre diversos cursos</h3>
                        <p className="p-features ">Disponibilizamos os melhores cursos da web, pagos e gratuitos, para você atigir seus objetivos. </p>
                    </div>

                    <div className="feature-box col-lg-4 ">
                        <span className="icon fas fa-heart fa-4x "></span>
                        <h3 className="feature-title ">Mentoria</h3>
                        <p className="p-features ">Você contará com nossa equipe de tutores, sempre a disposição para te ajudar.</p>
                    </div>

                </div>

            </div>

            </section>

            <section className="white-section " id="pricing ">
                <img className="img-Responsive2" src="https://media2.giphy.com/media/348tK9MrR5RDNM6xYR/giphy.webp?cid=790b76111def6f8e531f5fc194421c64c47e4e762566064e&rid=giphy.webp" alt=""/>

                <h2 className="section-heading3 ">Próximos Hackathons:</h2>
                <p>Treine suas habilidades, nos Hackathons das nossas empresas parceiras.</p>

                <div className="row ">

                    <div className="princing-column col-lg-4 col-md-6 ">
                        <div className="card ">
                            <div className="card-header ">
                                <h3>Web Responsivo</h3>
                            </div>
                            <div className="card-body ">
                                <h2 className="price-text ">Habilidades:</h2>
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>Bootstrap</p>
                                <button type="button " className="btn btn-lg btn-block btn-outline-dark ">Sign up</button>
                            </div>
                        </div>
                    </div>

                    <div className="princing-column col-lg-4 col-md-6 ">
                        <div className="card ">
                            <div className="card-header ">
                                <h3>Manipulando a DOM</h3>
                            </div>
                            <div className="card-body ">
                                <h2 className="price-text ">Habilidades:</h2>
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>Javascript</p>
                                <h2 className="price-text ">Premiação:</h2>
                                <p>15% de desconto no Bootcamp da Rocketseat</p>
                                <button type="button " className="btn btn-lg btn-block btn-dark ">Sign Up</button>
                            </div>
                        </div>
                    </div>

                    <div className="princing-column col-lg-4 col-md-12 ">
                        <div className="card ">
                            <div className="card-header ">
                                <h3>Desenvolvendo uma API REST</h3>
                            </div>
                            <div className="card-body ">
                                <h2 className="price-text ">Habilidades:</h2>
                                <p>Node</p>
                                <p>Javascript</p>
                                <h2 className="price-text ">Premiação:</h2>
                                <p>Curso de Backend pela Udemy</p>
                                <button type="button " className="btn btn-lg btn-block btn-dark ">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="colored-section " id="exemple">

                <div id="exemple-carousel" className="carousel slide " data-ride="carousel " data-interval="3000" data-pause="hover">
                    <div className="carousel-inner ">
                        <div className="carousel-item  container-fluid ">
                            <h1 className="section-heading2 ">Aprenda o caminho que você deve trilhar.</h1>
                            <h2 className="section-heading ">Tenha um plano de estudos feito pelos nossos melhores Devs, <br/> totalmente sobe medida para suas necessidades.</h2>
                            <img className=" img-Responsive " src="https://media0.giphy.com/media/244NnGCdVNjq7qpHdB/giphy.webp?cid=790b761197511865ba91e5f1a68d72d3971e2046d59e48e0&rid=giphy.webp" alt="gif emocionado "/>
                        </div>
                        <div className="carousel-item active container-fluid ">
                            <h1 className="section-heading2 ">Aplique o que aprendeu!.</h1>
                            <h2 className="section-heading ">Com nossos Hackathons, conectamos as necessidades das empresas, com o seu conhecimento.</h2>
                            <img className="img-Responsive" src="https://media3.giphy.com/media/61ThYTvYsssfItArfv/giphy.webp?cid=790b76111def6f8e531f5fc194421c64c47e4e762566064e&rid=giphy.webp" alt="gif emocionado"/>
                        </div>
                        <a className="carousel-control-prev " href="#exemple-carousel" role="button " data-slide="prev">
                            <span className="carousel-control-prev-icon "></span>
                        </a>
                        <a className="carousel-control-next " href="#exemple-carousel" role="button " data-slide="next">
                            <span className="carousel-control-next-icon "></span>
                        </a>
                     </div>   
                </div>

            </section>



            



            


            {/* <section className="colored-section " id="cta ">

                <div className="container-fluid ">

                    <h3 className="big-heading ">.</h3>
                    <button type="button " className="btn btn-dark btn-lg download-button ">
                        <span className="fab fa-apple "></span> 
                    </button>
                    <button type="button " className="btn btn-outline-light btn-lg download-button ">
                        <span className="fab fa-google-play "></span> 
                    </button>

                </div>

            </section> */}

            <section className="colord-section " id="press ">
                <img className="press-logo " src={Google} alt="tc-logo "/>
                <img className="press-logo " src={Microsoft} alt="tnw-logo "/>
                <img className="press-logo " src={Facebook} alt="biz-insider-logo "/>
                <img className="press-logo " src={Rocketseat} alt="mashable-logo "/>
            </section>



            <footer className="white-section " id="footer ">

            <div className="container-fluid ">
                <i className="social-icon fab fa-facebook-f "></i>
                <i className="social-icon fab fa-twitter "></i>
                <i className="social-icon fab fa-instagram "></i>
                <i className="social-icon fas fa-envelope "></i>
                <p className="p-features ">© Copyright 2019 linkaDev</p>
            </div>

            </footer>

    </div>
    )

}