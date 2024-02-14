import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import { gsap } from "gsap";

const theme = {
    primary: "#0f284e",
    secondary: "#00ff73",
    border: "#e0e0e038",
    shadowPrimary: "#00ff7383",
}

const Section__Faq = styled.section`
    margin-top: 300px;
    margin-bottom: 300px;
    margin-right: 20px;
    margin-left: 20px;
    font-family: 'Poppins', sans-serif;
    @media (max-width: 768px) {
        margin-top: 100px;
        margin-bottom: 100px;
    }
`
const Faq__Title__Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 15vw;
    background-color: ${theme.primary};
    border-radius: 3vw;
    margin-bottom: 5px;
    @media (max-width: 768px) {
        height: 20vw;
    }
    h2 {
        font-size: 2vw;
        font-weight: 700;
        margin-bottom: 1vw;
        margin-top: 0;
        font-family: 'Anybody', cursive;
        @media (max-width: 768px) {
            font-size: 3.5vw;
            margin-bottom: 2vw;
    }
    }
    p {
        font-size: 1vw;
        font-weight: 400;
        margin-top: 0;
        margin-bottom: 0;
        @media (max-width: 768px) {
            font-size: 2vw;
        }
    }
`
const Faq__Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 20vw;
    background-color: ${theme.primary};
    padding: 70px;
    border-radius: 3vw;
    margin-bottom: 5px;
    overflow: hidden;
`
const Faq__Question = styled.span`
    font-size: 1.3vw;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 0;
    @media (max-width: 768px) {
            font-size: 2vw;
        }
`
const Faq__Container__Response = styled.div`
    position: absolute;     
    background-color: ${theme.secondary};
    border-radius: 3vw;
    height: 100%;
    width: 100%;
    transform: translateY(700px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: ${theme.shadowPrimary} 0vw 11vh 20vw 2px;
    p{
        font-size: 1vw;
        font-weight: 400;
        margin-top: 0;
        margin-bottom: 0;
        padding: 0 10vw;
        color: ${theme.primary};
        @media (max-width: 768px) {
            font-size: 2vw;
        }
    }
`

export default function Faq() {

    //animation gsap au hover de la question

    const [hover, setHover] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);

    const faq__container__response = useRef(null);
    const faq__container__response2 = useRef(null);
    const faq__container__response3 = useRef(null);

    //animation gsap au hover de la question

    const handleHover = () => {
        setHover(!hover);
        if (hover) {
            gsap.to(faq__container__response.current, {
                y: -700,
                duration: 0.8,
                ease: "power3.out",
            })
        } else {
            gsap.to(faq__container__response.current, {
                y: 0,
                duration: 0.8,
                ease: "power3.out",
            })
        }
    }
    const handleHover2 = () => {
        setHover2(!hover2);
        if (hover2) {
            gsap.to(faq__container__response2.current, {
                y: -700,
                duration: 0.8,
                ease: "power3.out",
            })
        } else {
            gsap.to(faq__container__response2.current, {
                y: 0,
                duration: 0.8,
                ease: "power3.out",
            })
        }
    }
    const handleHover3 = () => {
        setHover3(!hover3);
        if (hover3) {
            gsap.to(faq__container__response3.current, {
                y: -700,
                duration: 0.8,
                ease: "power3.out",
            })
        } else {
            gsap.to(faq__container__response3.current, {
                y: 0,
                duration: 0.8,
                ease: "power3.out",
            })
        }
    }

    return (
        <Section__Faq>
            <Faq__Title__Container>
                <h2>Question reponse</h2>
                <p>Vous avez des questions ?</p>
            </Faq__Title__Container>
            <Faq__Container onMouseEnter={handleHover} onMouseLeave={handleHover}>
                <div >
                    <Faq__Question>Lorem ipsum dolor sit amet, consectetur adipiscing elit ?</Faq__Question>
                </div>
                <Faq__Container__Response ref={faq__container__response}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet lorem vitae diam suscipit faucibus.
                        Aliquam et augue felis. Suspendisse bibendum tristique velit,
                        ut dapibus odio scelerisque sed. Fusce leo arcu, luctus in euismod at, bibendum quis nunc.
                        Morbi nec sem at lorem suscipit scelerisque. Morbi laoreet ultricies ornare.
                    </p>
                </Faq__Container__Response>
            </Faq__Container>
            <Faq__Container onMouseEnter={handleHover2} onMouseLeave={handleHover2}>
                <div >
                    <Faq__Question>Lorem ipsum dolor sit amet, consectetur adipiscing elit ?</Faq__Question>
                </div>
                <Faq__Container__Response ref={faq__container__response2}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet lorem vitae diam suscipit faucibus.
                        Aliquam et augue felis. Suspendisse bibendum tristique velit,
                        ut dapibus odio scelerisque sed. Fusce leo arcu, luctus in euismod at, bibendum quis nunc.
                        Morbi nec sem at lorem suscipit scelerisque. Morbi laoreet ultricies ornare.
                    </p>
                </Faq__Container__Response>
            </Faq__Container>
            <Faq__Container onMouseEnter={handleHover3} onMouseLeave={handleHover3}>
                <div >
                    <Faq__Question>Lorem ipsum dolor sit amet, consectetur adipiscing elit ?</Faq__Question>
                </div>
                <Faq__Container__Response ref={faq__container__response3}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet lorem vitae diam suscipit faucibus.
                        Aliquam et augue felis. Suspendisse bibendum tristique velit,
                        ut dapibus odio scelerisque sed. Fusce leo arcu, luctus in euismod at, bibendum quis nunc.
                        Morbi nec sem at lorem suscipit scelerisque. Morbi laoreet ultricies ornare.
                    </p>
                </Faq__Container__Response>
            </Faq__Container>
        </Section__Faq>
    )
}