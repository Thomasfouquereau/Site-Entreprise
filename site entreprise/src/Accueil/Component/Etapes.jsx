import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import icon_design from '../../assets/Icon_design.svg';
import icon_site from '../../assets/Icon-site.svg';
import icon_clef from '../../assets/Icon-clef.svg';
import icon_message from '../../assets/IconMessage.svg';

const Section__Etapes = styled.section`
    margin-top: 300px;
    margin-bottom: 300px;
    margin-right: 20px;
    margin-left: 20px;
    @media (max-width: 768px) {
        margin-top: 100px;
        margin-bottom: 100px;
        margin-right: 10px;
        margin-left: 10px;
    }
`

const Etapes__Container__title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgb(2,0,36);
    background: linear-gradient(163deg, #020024 0%, rgba(14,40,80,1) 35%, #00ff73 100%);
    height: 15vw;
    border-radius: 3vw;
    padding-left: 2%;
    margin-bottom: 5px;
    font-family: 'Anybody', cursive;
    @media (max-width: 768px) {
        height: 25vw;
        padding-left: 5%;
    }
    h2 {
        font-size: 2.5vw;
        font-weight: 700;
        margin-bottom: 30px;
        margin-top: 0;
        @media (max-width: 768px){
            font-size: 4vw;
            margin-bottom: 15px;
        }
    }
    p {
        font-size: 1vw;
        font-weight: 400;
        margin: 0;
        width: 70%;
        @media (max-width: 768px){
            font-size: 2vw;
        }
    }
`

const Etapes__Container = styled.div`
    position: relative;
    margin-bottom: 100px;
    font-family: 'Anybody', cursive;
    display: flex;
    flex-direction: row;
    margin-bottom: 5px;
`

const Etapes__Container__item1 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color:#4F5D75;
    border-radius: 3vw 0px 0px 3vw;
    height: 15vw;
    width: 55%;
    padding-left: 2%;
    padding-right: 2%;
    font-family: 'Poppins', sans-serif;
    @media (max-width: 768px) {
        height: 25vw;
    }
    img {
        margin-right: 3vw;
        width: 3.5vw;
        height: 3.5vw;
        @media (max-width: 768px) {
            width: 5vw;
            height: 5vw;
            margin-right: 3vw;
            margin-left: calc(3vw - 3.5%);

        }
    }
    h2 {
        font-size: 1.8vw;
        font-weight: 700;
        margin-top: 0;
        margin-bottom: 25px;
        @media (max-width: 768px) {
            font-size: 3vw;
            margin-bottom: 15px;
        }
    }
    p {
        font-size: 0.8vw;
        font-weight: 400;
        margin: 0;
        width: 80%;
        @media (max-width: 768px) {
            font-size: 1.5vw;
        }
    }
`

const Etapes__Container__item2 = styled.div`
    position: absolute;
    width: 50%;
    height: 15vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:#EF8354;
    right: 0;
    border-radius: 3vw;
    padding-left: 8%;
    padding-right: 8%;
    box-shadow: 0px 4px 20px 4px rgba(0, 0, 0, 0.402);
    @media (max-width: 768px){
        height: 25vw;
    }
    span {
        font-size: 1.5vw;
        font-weight: 400;
        color: #4F5D75;
        margin-bottom: 1 0px;
        margin-top: 0;
        @media (max-width: 768px){
            font-size: 2.3vw;
    }
    }
    h2 {
        font-size: 2vw;
        font-weight: 700;
        color: #4F5D75;
        margin-bottom: 0;
        margin-top: 0;
        @media (max-width: 768px){
            font-size: 3vw;
    }
    }
`

export default function Etapes() {

    const item1Ref1 = useRef(null);
    const item2Ref1 = useRef(null);
    const item1Ref2 = useRef(null);
    const item2Ref2 = useRef(null);
    const item1Ref3 = useRef(null);
    const item2Ref3 = useRef(null);
    const item1Ref4 = useRef(null);
    const item2Ref4 = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(item1Ref1.current, {
            x: "50%",
            width: "50%",
        }, {
            scrollTrigger: {
                trigger: item1Ref1.current,
                start: "top bottom",
                end: "top top",
                toggleActions: "play none none reverse",
                scrub: true,
            },
            x: 0,
            width: "55%",
        });
        gsap.fromTo(item2Ref1.current, {
            x: "-50%",
            width: "50%",
        }, {
            scrollTrigger: {
                trigger: item2Ref1.current,
                start: "top bottom",
                end: "top top",
                toggleActions: "play none none reverse",
                scrub: true,
            },
            x: 0,
            width: "50%",
        });
        gsap.fromTo(item1Ref2.current, {
            x: "50%",
            width: "50%",
        }, {
            scrollTrigger: {
                trigger: item1Ref2.current,
                start: "top bottom",
                end: "top top",
                toggleActions: "play none none reverse",
                scrub: true,
            },
            x: 0,
            width: "55%",
        });

        gsap.fromTo(item2Ref2.current, {
            x: "-50%",
            width: "50%",
        }, {
            scrollTrigger: {
                trigger: item2Ref2.current,
                start: "top bottom",
                end: "top top",
                toggleActions: "play none none reverse",
                scrub: true,
            },
            x: 0,
            width: "50%",
        });
        gsap.fromTo(item1Ref3.current, {
            x: "50%",
            width: "50%",
        }, {
            scrollTrigger: {
                trigger: item1Ref3.current,
                start: "top bottom",
                end: "top top",
                toggleActions: "play none none reverse",
                scrub: true,
            },
            x: 0,
            width: "55%",
        });
        gsap.fromTo(item2Ref3.current, {
            x: "-50%",
            width: "50%",
        }, {
            scrollTrigger: {
                trigger: item2Ref3.current,
                start: "top bottom",
                end: "top top",
                toggleActions: "play none none reverse",
                scrub: true,
            },
            x: 0,
            width: "50%",
        });
        gsap.fromTo(item1Ref4.current, {
            x: "50%",
            width: "50%",
        }, {
            scrollTrigger: {
                trigger: item1Ref4.current,
                start: "top bottom",
                end: "top top",
                toggleActions: "play none none reverse",
                scrub: true,
            },
            x: 0,
            width: "55%",
        });
        gsap.fromTo(item2Ref4.current, {
            x: "-50%",
            width: "50%",
        }, {
            scrollTrigger: {
                trigger: item2Ref4.current,
                start: "top bottom",
                end: "top top",
                toggleActions: "play none none reverse",
                scrub: true,
            },
            x: 0,
            width: "50%",
        });
    }, []);

    return (
        <Section__Etapes>
            <Etapes__Container__title>
                <h2>Etapes</h2>
                <p>
                    Vous souhaitez fair appel à nous pour votre projet,
                    nous allons vous décrire les étapes par les quel votre projet passera
                </p>
            </Etapes__Container__title>
            <Etapes__Container>
                <Etapes__Container__item1 ref={item1Ref1}>
                    <img src={icon_message} alt="icon message" />
                    <div>
                        <h2>Lorem ipsum </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Cras aliquam,
                        </p>
                    </div>
                </Etapes__Container__item1>
                <Etapes__Container__item2 ref={item2Ref1}>
                    <span>Lorem ipsum</span>
                    <h2>Lorem ipsum</h2>
                </Etapes__Container__item2>
            </Etapes__Container>
            <Etapes__Container>
                <Etapes__Container__item1 ref={item1Ref2} >
                    <img src={icon_design} alt="icon design" />
                    <div>
                        <h2>Lorem ipsum </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Cras aliquam,
                        </p>
                    </div>
                </Etapes__Container__item1>
                <Etapes__Container__item2 ref={item2Ref2} >
                    <span>Lorem ipsum</span>
                    <h2>Lorem ipsum</h2>
                </Etapes__Container__item2>
            </Etapes__Container>
            <Etapes__Container>
                <Etapes__Container__item1 ref={item1Ref3} >
                    <img src={icon_site} alt="icon site" />
                    <div>
                        <h2>Lorem ipsum </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Cras aliquam,
                        </p>
                    </div>
                </Etapes__Container__item1>
                <Etapes__Container__item2 ref={item2Ref3} >
                    <span>Lorem ipsum</span>
                    <h2>Lorem ipsum</h2>
                </Etapes__Container__item2>
            </Etapes__Container>
            <Etapes__Container>
                <Etapes__Container__item1 ref={item1Ref4} >
                    <img src={icon_clef} alt="icon clef" />
                    <div>
                        <h2>Lorem ipsum </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Cras aliquam,
                        </p>
                    </div>
                </Etapes__Container__item1>
                <Etapes__Container__item2 ref={item2Ref4} >
                    <span>Lorem ipsum</span>
                    <h2>Lorem ipsum</h2>
                </Etapes__Container__item2>
            </Etapes__Container>
        </Section__Etapes>
    )
}