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
`

const Etapes__Container__title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #00f5d42f;
    height: 250px;
    border-radius: 50px;
    padding-left: 2%;
    margin-bottom: 5px;
    font-family: 'Anybody', cursive;
    h2 {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 10px;
        margin-top: 0;
    }
    p {
        font-size: 1.2rem;
        font-weight: 400;
        margin: 0;
        width: 70%;
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
    background-color:#00f5d42f;
    border-radius: 50px 0px 0px 50px;
    height: 250px;
    width: 55%;
    padding-left: 2%;
    padding-right: 2%;
    font-family: 'Poppins', sans-serif;
    img {
        margin-right: 30px;
        width: 50px;
        height: 50px;
    }
    h2 {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 10px;
        margin-top: 0;
        margin-bottom: 25px;
    }
    p {
        font-size: 1rem;
        font-weight: 400;
        margin: 0;
        width: 80%;
    }
`

const Etapes__Container__item2 = styled.div`
    position: absolute;
    width: 50%;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:#FEE440;
    right: 0;
    border-radius: 50px;
    padding-left: 8%;
    padding-right: 8%;
    box-shadow: 0px 4px 20px 4px rgba(0, 0, 0, 0.402);
    span {
        font-size: 1.5rem;
        font-weight: 400;
        color: #222223;
        margin-bottom: 1 0px;
        margin-top: 0;
    }
    h2 {
        font-size: 2rem;
        font-weight: 700;
        color: #222223;
        margin-bottom: 0;
        margin-top: 0;
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
                    <img src={icon_message} alt="icon messagee" />
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
                    <img src={icon_design} alt="icon messagee" />
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
                    <img src={icon_message} alt="icon messagee" />
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
                    <img src={icon_clef} alt="icon messagee" />
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