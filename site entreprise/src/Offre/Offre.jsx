import React, { useState, useEffect, useRef }  from 'react'
import Offre__Nav from './Component/Offre__Nav';
import styled from "styled-components";
import { gsap } from "gsap";

const Offre__Section = styled.section`
    margin-top: 200px;
    margin-bottom: 250px;
    font-family: 'Poppins', sans-serif;
    overflow: hidden;
`

const Offre__Container__Title = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 0px 50px 50px 0px;
    background-color: #FEE440;
    padding: 40px 50px;
    margin: 5px;
    margin-left: 0;
    margin-right: 10px;
    h1{
        font-size: 2.5rem;
        font-weight: 700;
        margin: 0;
        margin-top: 10px;
        font-family: 'Anybody', cursive;
    }
    p{
        font-size: 1.2rem;
        font-weight: 400;
    }
`

const Offre__Container__Info = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 50px 0px 0px 50px;
    background-color: #00BBF9;
    padding: 40px 50px;
    margin: 5px;
    margin-right: 0;
    margin-left: 10px;
    h2{
        font-size: 2.5rem;
        font-weight: 700;
        margin: 0;
        margin-top: 10px;
        font-family: 'Anybody', cursive;
    }
    p{
        font-size: 1.2rem;
        font-weight: 400;
    }
`

export default function Offre() {

    const [tl] = useState(gsap.timeline({ defaults: { ease: "power3.inOut" } }));

    let offre__container__title = useRef(null);
    let offre__container__info = useRef(null);

    useEffect(() => {
        tl.fromTo(offre__container__title.current, { x: -1000, opacity: 0 }, { x: 0, opacity: 1, duration: 1.5 })
        tl.fromTo(offre__container__info.current, { x: 1000, opacity: 0 }, { x: 0, opacity: 1, duration: 1.5 })
    }, [tl])

    return (
        <Offre__Section>
            <Offre__Container__Title ref={offre__container__title}>
                <h1>offre</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam,
                    dui et cursus mollis, velit urna tincidunt turpis, vitae fringilla mi
                    magna et augue. Ut ex sapien, congue a auctor sed, interdum eu nisi.
                    Donec rhoncus lobortis magna ac ornare. Nunc ornare odio at lectus
                    pellentesque dapibus sit amet ut leo.
                </p>
             
            </Offre__Container__Title>
            <Offre__Nav />
            <Offre__Container__Info ref={offre__container__info}>
                <h2>Plus d'information</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam,
                    dui et cursus mollis, velit urna tincidunt turpis, vitae fringilla mi
                    magna et augue. Ut ex sapien, congue a auctor sed, interdum eu nisi.
                    Donec rhoncus lobortis magna ac ornare. Nunc ornare odio at lectus
                    pellentesque dapibus sit amet ut leo.
                    Nulla sed arcu dictum, mattis orci ac, pulvinar purus. 
                    Praesent ut est risus. Cras eget quam id quam posuere malesuada 
                    ac sit amet neque. Curabitur a erat mattis.Morbi facilisis facilisis 
                    tempor. Sed posuere fermentum ligula ut sodales. Pellentesque 
                    elementum volutpat nulla, eget fringilla lectus luctus sit amet.
                </p>
            </Offre__Container__Info>
        </Offre__Section>


    )
}