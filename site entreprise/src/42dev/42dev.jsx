import React, { useEffect } from 'react';
import gsap from 'gsap';
import styled, { keyframes } from "styled-components"
import logo_42dev from "../assets/logo-42dev-no-bg.svg"
import logo_42dev2 from "../assets/Logo-42dev(2).svg"
import logo_A from "../assets/Logo A-TechPro.svg"

const theme = {
    primary: "#0f284e",
    secondary: "#00ff73",
    border: "#e0e0e038",
    shadowPrimary: "#00ff7383",
}

const Container = styled.div`
    font-family: 'Montserrat', sans-serif;
`

const QuestionContainer = styled.div`
    position: absolute;
    background-color: #02001b;
    width: 100%;
    height: 100%;
    z-index: 100;
    top: 0;
`

const Question1 = styled.div`
    position: absolute;
    top: 20vh;
    left: 5vw;
    font-size: 1.7vw;
    background-color: ${theme.primary};
    width: 38vw;
    padding: 3vw 2vw;
    border-radius: 1.5vw;
    @media (max-width: 768px){
        top: 35vh;
        width: 57vw;
        font-size: 3.5vw;
        padding: 4vw 4vw;
    }
    span{
        color: ${theme.secondary};
        margin: 0vw;
        padding: 0vw;
        
    }
    p{
        margin: 0;
        padding: 0;
    }
`

const Question2 = styled.div`
    position: absolute;
    bottom: 20vh;
    right: 5vw;
    font-size: 1.7vw;
    background-color: ${theme.primary};
    width: 38vw;
    padding: 3vw 2vw;
    border-radius: 1.5vw;
    @media (max-width: 768px){
        bottom: 35vh;
        width: 57vw;
        font-size: 3.5vw;
        padding: 4vw 4vw;
    }
    span{
        color: ${theme.secondary};
        margin: 0vw;
        padding: 0vw;
    }
    p{
        margin: 0;
        padding: 0;
    }
`

const HeaderSection = styled.div`
    display: flex;
    align-items: center;
    width: 95%;
    background-color: ${theme.primary};
    height: 8vw;
    border-radius: 50px;
    padding-left: 3vw;
    margin-left: 50%;
    margin-top: 5vw;
    transform: translateX(-50%);
    @media (max-width: 768px){
        height: 20vw;
        border-radius: 4vw;
        margin-top: 20vw;
    }
    img{
        width: 7vw;
        margin-right: 3vw;
        @media (max-width: 768px){
            width: 20vw;
            margin-right: 6vw;
        }
    }
    h1{
        font-size: 1.5vw;
        margin-bottom: 0vw;
        @media (max-width: 768px){
            font-size: 4vw;
            margin-top: 0vw;
        }
    }
    p{
        font-size: 1vw;
        margin-top: 0.6vw;
        @media (max-width: 768px){
            font-size: 2vw;
            margin-top: 0.6vw;
        }
    }
`

const InfoConteneur = styled.div`
    margin-top: 1vw;
    margin-bottom: 5vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    @media (max-width: 768px){
        margin-bottom: 25vw;
    }
`

const Info = styled.div`
    background-color: ${theme.secondary};
    border-radius: 50px;
    width: 95%;
    height: 19vw;
    @media (max-width: 768px){
        height: 40vw;
        border-radius: 4vw;
        margin-bottom: -0.3vw;
    }
`

const LogoA = styled.img`
    position: absolute;
    left: 0;
    height: 14vw;
    width: 49.5%;
    top: 2.5vw;
    @media (max-width: 768px){
        height: 30vw;
        top: 5vw;
    }
`

const Logo42 = styled.img`
    position: absolute;
    right: 0;
    height: 14vw;
    width: 49.5%;
    bottom: 2.5vw;
    @media (max-width: 768px){
        height: 30vw;
        bottom: 5vw;
    }
`

const InfoHover = styled.div`
    position: absolute; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    right: 0;
    height: 19vw;
    background-color: ${theme.primary};
    width: 49.5%;
    border-radius: 50px 0 0 50px;
    box-shadow: -8px 10px 7px 0px rgba(0, 0, 0, 0.25);
    padding-left: 3vw;
    padding-right: 3vw;
    @media (max-width: 768px){
        height: 40vw;
        border-radius: 4vw 0 0 4vw;
    }
    h3{
        font-size: 1.5vw;
        margin-top: 0;
        @media (max-width: 768px){
            font-size: 3vw;
        }
    }
    p{
        font-size: 1vw;
        @media (max-width: 768px){
            font-size: 1.7vw;
        }
    }
    span{
        color: ${theme.secondary};
    }
`

const InfoHover2 = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 0;
    height: 19vw;
    background-color: ${theme.primary};
    width: 49.5%;
    border-radius:  0 50px 50px 0 ;
    box-shadow: 8px 0px 7px 0px rgba(0, 0, 0, 0.25);
    padding-left: 3vw;
    padding-right: 3vw;
    @media (max-width: 768px){
        height: 40vw;
        border-radius:  0 4vw 4vw 0 ;

    }
    h3{
        font-size: 1.5vw;
        margin-top: 0;
        @media (max-width: 768px){
            font-size: 3vw;
        }
    }
    p{
        font-size: 1vw;
        @media (max-width: 768px){
            font-size: 1.7vw;
        }
    }
    span{
        color: ${theme.secondary};
    }
`

export default function A_TechPro() {

    useEffect(() => {
        gsap.timeline({ defaults: { ease: "power1.out" } })
            .fromTo(
                [".Question1", ".Question2"],
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.7, stagger: 1.4 }
            )
            .to(".QuestionContainer", { opacity: 0, duration: 0.7, delay: 3.5, display: "none" });
    }, []);

    return (
        <Container >

            <QuestionContainer className="QuestionContainer">
                <Question1 className="Question1">
                    <p>
                        <span>42</span>, c'est la réponse à toutes les questions, n'est-ce pas?
                    </p>
                </Question1>
                <Question2 className="Question2">
                    <p>
                        Alors, pourquoi ne pas faire confiance à <span>42dev</span> pour votre site web?
                    </p>
                </Question2>
            </QuestionContainer>

            <HeaderSection>
                <img src={logo_42dev} />
                <div>
                    <h1>42dev</h1>
                    <p>Création de sites internet sur mesure, adaptés à vos besoins et à votre budget.</p>
                </div>
            </HeaderSection>

            <InfoConteneur>

                <Info>
                    <LogoA src={logo_A} />
                    <InfoHover>
                        <h3>Qui somme nous ?</h3>
                        <p>
                            42<span>dev</span> c’est la partie création site web de <span>A</span>-TechPro,
                            <br />
                            <br />
                            Dédiée à offrir des solutions digitales sur mesure, intégrant les dernières technologies pour assurer une visibilité maximale et une interaction fluide avec vos utilisateurs.
                        </p>
                    </InfoHover>
                </Info>

                <Info>
                    <Logo42 src={logo_42dev2} />
                    <InfoHover2>
                        <h3>Que faisons-nous ?</h3>
                        <p>
                            Chez 42dev nous nous occupons de vous créer des sites <span>3A</span><span>(</span>Accessible, Agréable, Attractif<span>)</span>.
                            <br />
                            <br />
                            Qui répondent à vos besoins spécifiques tout en garantissant une expérience utilisateur optimale et une esthétique soignée, afin de vous démarquer dans le monde numérique.
                        </p>
                    </InfoHover2>
                </Info>

            </InfoConteneur>

        </Container>
    )
}