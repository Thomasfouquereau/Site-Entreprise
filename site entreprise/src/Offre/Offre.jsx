import React, { useState, useEffect, useRef }  from 'react'
import Offre__Nav from './Component/Offre__Nav';
import styled from "styled-components";
import { gsap } from "gsap";

const theme = {
    primary: "#0f284e",
    secondary: "#00ff73",
    border: "#e0e0e038",
    shadowPrimary: "#00ff7383",
}

const Offre__Section = styled.section`
    margin-top: 200px;
    margin-bottom: 250px;
    font-family: 'Poppins', sans-serif;
    overflow: hidden;
    color: #fff;
    @media (max-width: 768px) {
        margin-top: 50px;
        margin-bottom: 50px;
    }
`

const Offre__Container__Title = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 50%;
    transform: translateX(-50%);
    height: 14vw;
    width: 95%;
    border-radius: 3vw;
    background-color: ${theme.primary};
    padding: 70px 50px;
    @media (max-width: 768px) {
        padding: 80px 25px;
        margin-bottom: 5px;
    }
    h1{
        font-size: 2.3vw;
        font-weight: 700;
        margin: 0;
        margin-top: 10px;
        font-family: 'Anybody', cursive;
        @media (max-width: 768px) {
            font-size: 6vw;
        }
    }
    p{
        font-size: 1vw;
        font-weight: 400;
        @media (max-width: 768px) {
            font-size: 2.5vw;
        }
    }
`

const Offre__Container__Info = styled.section`
  display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 50%;
    transform: translateX(-50%);
    height: 14vw;
    width: 95%;
    border-radius: 3vw;
    background-color: ${theme.secondary};
    padding: 70px 50px;
    color: ${theme.primary};
    @media (max-width: 768px) {
        padding: 110px 25px;
        margin-top:5px
    }
    h2{
        font-size: 1.7vw;
        font-weight: 700;
        margin: 0;
        margin-top: 10px;
        font-family: 'Anybody', cursive;
        @media (max-width: 768px) {
            font-size: 6vw;
        }
    }
    p{
        font-size: 0.9vw;
        font-weight: 400;
        @media (max-width: 768px) {
            font-size: 2.5vw;
        }
    }
`

export default function Offre() {
    return (
        <Offre__Section>
            <Offre__Container__Title>
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
            <Offre__Container__Info>
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