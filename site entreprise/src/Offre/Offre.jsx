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
    height: 14vw;
    border-radius: 0px 50px 50px 0px;
    background-color: #4F5D75;
    padding: 70px 50px;
    margin: 5px;
    margin-left: 0;
    margin-right: 10px;
    h1{
        font-size: 2vw;
        font-weight: 700;
        margin: 0;
        margin-top: 10px;
        font-family: 'Anybody', cursive;
    }
    p{
        font-size: 1vw;
        font-weight: 400;
    }
`

const Offre__Container__Info = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 14vw;
    border-radius: 50px 0px 0px 50px;
    background-color: #4F5D75;
    padding: 70px 50px;
    margin: 5px;
    margin-right: 0;
    margin-left: 10px;
    h2{
        font-size: 1.5vw;
        font-weight: 700;
        margin: 0;
        margin-top: 10px;
        font-family: 'Anybody', cursive;
    }
    p{
        font-size: 0.8vw;
        font-weight: 400;
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