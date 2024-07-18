import React, { useEffect } from 'react';
import gsap from 'gsap';
import styled, { keyframes } from "styled-components"
import logo_42dev from "../assets/logo-42dev-no-bg.svg"

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
    z-index: 1000;
    top: 0;
`

const Question1 = styled.div`
    position: absolute;
    top: 11vw;
    left: 5vw;
    font-size: 1.7vw;
    background-color: ${theme.primary};
    width: 38vw;
    padding: 3vw 2vw;
    border-radius: 1.5vw;
`

const Question2 = styled.div`
    position: absolute;
    bottom: 11vw;
    right: 5vw;
    font-size: 1.7vw;
    background-color: ${theme.primary};
    width: 38vw;
    padding: 3vw 2vw;
    border-radius: 1.5vw;
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
    img{
        width: 7vw;
        margin-right: 3vw;
    }
    h1{
        font-size: 1.5vw;
        margin-bottom: 0vw;
    }
    p{
        font-size: 1vw;
        margin-top: 0.6vw;
    }
`

const InfoConteneur = styled.div`
    margin-top: 1vw;
    margin-bottom: 5vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Info = styled.div`
    background-color: ${theme.secondary};
    border-radius: 50px;
    width: 95%;
    height: 19vw;
`

const InfoHover = styled.div`
    position: absolute; 
    right: 0;
    height: 19vw;
    background-color: ${theme.primary};
    width: 49.5%;
    border-radius: 50px 0 0 50px;
    box-shadow: -8px 10px 7px 0px rgba(0, 0, 0, 0.25);
    h2{
        margin: 0;
    }
`

const InfoHover2 = styled.div`
    position: absolute;
    left: 0;
    height: 19vw;
    background-color: ${theme.primary};
    width: 49.5%;
    border-radius:  0 50px 50px 0 ;
    box-shadow: 8px 0px 7px 0px rgba(0, 0, 0, 0.25);
    h2{
        margin: 0;
    }
`

export default function A_TechPro() {

    useEffect(() => {
        gsap.timeline({ defaults: { ease: "power1.out" } })
            .fromTo(
                [".Question1", ".Question2"], // Assurez-vous que les classes correspondent
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.7, stagger: 1.5 }
            )
            .to(".QuestionContainer", { opacity: 0, duration: 0.7, delay: 4 , display: "none" });
    }, []);

    return (
        <Container >

            <QuestionContainer className="QuestionContainer">
                <Question1 className="Question1">
                    <span>
                        42, c'est la réponse à toutes les questions, n'est-ce pas?
                    </span>
                </Question1>
                <Question2 className="Question2">
                    <span>
                        Alors, pourquoi ne pas faire confiance à 42dev pour votre site web?
                    </span>
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
                    <div></div>
                    <InfoHover>
                        <h2>Création de sites internet</h2>
                    </InfoHover>
                </Info>

                <Info>
                    <div></div>
                    <InfoHover2>
                        <h2>Création de sites internet</h2>
                    </InfoHover2>
                </Info>
            </InfoConteneur>

        </Container>
    )
}