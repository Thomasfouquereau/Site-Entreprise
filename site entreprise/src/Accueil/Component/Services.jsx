import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const theme = {
    primary: "#0f284e",
    secondary: "#00ff73",
    border: "#e0e0e038",
    shadowPrimary: "#00ff7383",
}

const Services__section = styled.section`
    margin-top: 300px;
    margin-bottom: 300px;
    @media (max-width: 768px){
        margin-top: 100px;
        margin-bottom: 100px;
    }
`

const Services__Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 150px;
    font-family: 'Anybody', cursive;
    @media (max-width: 768px) {
        margin-bottom: 50px;
    }
    h1 {
        font-size: 3vw;
        font-weight: 700;
        margin-bottom: 10px;
        margin-top: 0;
        @media (max-width: 768px) {
            font-size: 6.5vw;
            margin-bottom: 15px;
    }
    }
    p {
        font-size: 1vw;
        font-weight: 400;
        margin: 0;
        width: 65%;
        text-align: center;
        font-family: 'Poppins', sans-serif;
        @media (max-width: 768px) {
            width: 80%;
            font-size: 3vw;
    }
    }
`

const Services__wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    overflow: hidden;
    font-family: 'Poppins', sans-serif;
    color: ${theme.primary};
    @media (max-width: 768px) {
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-column-gap: 3px;
        rid-row-gap: 3px;
    }
`

const Services__wrapper__item1 = styled.div` 
     grid-area: 1 / 1 / 2 / 3; 
     background-color:${theme.secondary};
     border-radius: 0px 2vw 2vw 0px;
     height: 15vw;
     display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 8%;
    padding-right: 8%;
    z-index: 1;
    @media (max-width: 768px) {
        grid-area: 1 / 1 / 2 / 5;
        height: 30vw;
    }
        h2 {
            font-size: 2vw;
            font-weight: 700;
            margin-bottom: 20px;
            margin-top: 0;
            @media (max-width: 768px) {
                font-size: 3.6vw;
                margin-bottom: 10px;
            }
        }
        p {
            font-size: 0.8vw;
            font-weight: 400;
            margin: 0;
            @media (max-width: 768px) {
                font-size: 1.5vw;
            }
        }
`

const Services__wrapper__item2 = styled.div`
     grid-area: 1 / 3 / 2 / 5; 
     background-color:${theme.primary};
     border-radius: 2vw 0px 0px 2vw;
     height: 15vw;;
     @media (max-width: 768px) {
        grid-area: 1 / 5 / 2 / 7;
        height: 30vw;
                }
`

const Services__wrapper__item3 = styled.div`
     grid-area: 2 / 1 / 3 / 2;
     background-color:${theme.primary};
     border-radius: 0px 2vw 2vw 0px;
     height: 15vw;
     @media (max-width: 768px) {
        grid-area: 2 / 1 / 3 / 2;
        height: 30vw;
                }
`

const Services__wrapper__item4 = styled.div`
     grid-area: 2 / 2 / 3 / 4; 
     background-color:${theme.secondary};
     border-radius: 2vw;
     height: 15vw;
     display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding-left: 8%;
        padding-right: 8%;
        box-shadow: -6vw 2vw 20vw 2vw ${theme.shadowPrimary};
        z-index: 1;
        @media (max-width: 768px) {
            grid-area: 2 / 2 / 3 / 6;
            height: 30vw;
                }
        h2 {
            font-size: 2vw;
            font-weight: 700;
            margin-bottom: 20px;
            margin-top: 0;
            @media (max-width: 768px) {
                font-size: 3.6vw;
                margin-bottom: 10px;
            }
        }
        p {
            font-size: 0.8vw;
            font-weight: 400;
            margin: 0;
            @media (max-width: 768px) {
                font-size: 1.5vw;
            }
        }
`

const Services__wrapper__item5 = styled.div`
     grid-area: 2 / 4 / 3 / 5;
     background-color:${theme.primary};
     border-radius: 2vw 0px 0px 2vw;
     height: 15vw;
     @media (max-width: 768px) {
        grid-area: 2 / 6 / 3 / 7;
        height: 30vw;
                }
`

const Services__wrapper__item6 = styled.div`
     grid-area: 3 / 1 / 4 / 3;
     background-color:${theme.primary};
     border-radius: 0px 2vw 2vw 0px;
     height: 15vw;
     @media (max-width: 768px) {
        grid-area: 3 / 1 / 4 / 3;
        height: 30vw;
                }
`

const Services__wrapper__item7 = styled.div`
     grid-area: 3 / 3 / 4 / 5; 
     background-color:${theme.secondary};
     border-radius: 2vw 0px 0px 2vw;
     height: 15vw;
     display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding-left: 8%;
        padding-right: 8%;
        z-index: 1;
        @media (max-width: 768px) {
            grid-area: 3 / 3 / 4 / 7;
            height: 30vw;
        }
        h2 {
            font-size: 2vw;
            font-weight: 700;
            margin-bottom: 20px;
            margin-top: 0;
            @media (max-width: 768px) {
                font-size: 3.6vw;
                margin-bottom: 10px;
            }
        }
        p {
            font-size: 0.8vw;
            font-weight: 400;
            margin: 0;
            @media (max-width: 768px) {
                font-size: 1.5vw;
            }
        }
`

export default function Services() {

    gsap.registerPlugin(ScrollTrigger);
    const item2 = useRef(null);
    const item3 = useRef(null);
    const item5 = useRef(null);
    const item6 = useRef(null);

    useEffect(() => {
        gsap.fromTo(item2.current, {
            x: 1000,
        }, {
            scrollTrigger: {
                trigger: item2.current,
                start: "top bottom",
                end: "top top",
                scrub: true,
            },
            x: 0,
            duration: 1,
        });
        gsap.fromTo(item3.current, {
            x: -500,
        }, {
            scrollTrigger: {
                trigger: item3.current,
                start: "top bottom",
                end: "top top",
                scrub: true,
            },
            x: 0,
            duration: 1,
        });
        gsap.fromTo(item5.current, {
            x: 500,
        }, {
            scrollTrigger: {
                trigger: item5.current,
                start: "top bottom",
                end: "top top",
                scrub: true,
            },
            x: 0,
            duration: 1,
        });
        gsap.fromTo(item6.current, {
            x: -1000,
        }, {
            scrollTrigger: {
                trigger: item6.current,
                start: "top bottom",
                end: "top top",
                scrub: true,
            },
            x: 0,
            duration: 1,
        });
    }, []);

    return (
        <Services__section>
            <Services__Info>
                <h1>Services</h1>
                <p>
                    Que vous souhaitiez rénover ou créer un site web, nous vous accompagnons avec notre expertise de premier plan pour concrétiser votre projet.
                </p>
            </Services__Info>
            <Services__wrapper>
                <Services__wrapper__item1>
                    <h2>Design UI/UX </h2>
                    <p>
                        Transformez votre présence en ligne avec des interfaces intuitives, esthétiques et orientées vers la conversion. Créez des expériences captivantes pour vos utilisateurs.
                    </p>
                </Services__wrapper__item1>
                <Services__wrapper__item2 ref={item2}></Services__wrapper__item2>
                <Services__wrapper__item3 ref={item3}></Services__wrapper__item3>
                <Services__wrapper__item4>
                    <h2>Développement Web Sur Mesure</h2>
                    <p>
                        Nous concevons des solutions web personnalisées, répondant à vos besoins spécifiques. De la conception à la mise en ligne, nous créons des sites performants et esthétiques pour propulser votre présence en ligne.
                    </p>
                </Services__wrapper__item4>
                <Services__wrapper__item5 ref={item5}></Services__wrapper__item5>
                <Services__wrapper__item6 ref={item6}></Services__wrapper__item6>
                <Services__wrapper__item7>
                    <h2>Maintenance Web</h2>
                    <p>
                        Nous assurons la maintenance proactive de votre site, garantissant un fonctionnement sans faille. Notre équipe est prête à résoudre rapidement les problèmes et à fournir un support technique de qualité pour une expérience client optimale.
                    </p>
                </Services__wrapper__item7>
            </Services__wrapper>
        </Services__section>
    );
}