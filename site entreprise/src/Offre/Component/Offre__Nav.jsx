import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { gsap } from "gsap";
import icon_arrow from '../../assets/Icon-arrow.svg';

const Offre__Nav__Section = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    a{
        text-decoration: none;
    }
`

const Offre__Nav__Container = styled.div`
    background-color: #9B5DE5;
    height: 400px;
    width: calc( 100% / 2 - 10px );
    border-radius: 50px;
    margin: 5px;
    position: relative;
    transition: all 0.3s ease-in-out;
    &:hover{
        transform: scale(1.02);
        transition: all 0.3s ease-in-out;
    }
        
    a{
        color: #fff;
    }
    div{
        width: 100%;
        height: 100%;
    }
`

const Offre__Nav__Container__Span = styled.span`
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 1.5rem;
    font-weight: 600;
    font-family: 'Anybody', cursive;
    transition: all 0.3s ease-in-out;
    &:hover{
        color: #FEE440;
        transition: all 0.3s ease-in-out;
    }
`

const Offre__Nav__Container__P = styled.p`
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    text-align: center;
    padding: 40px 30px;
    background-color: #fff;
    color: #9B5DE5;
    border-radius: 25px;
    box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.544) ;
    font-size: 1.2rem;
    font-weight: 500;
    margin: 0;
    transition: all 0.3s ease-in-out;
    &:hover{
        padding: 60px 30px;
        transition: all 0.3s ease-in-out;
    }

`

const Offre__Nav__Container__Img = styled.img`
    position: absolute;
    bottom: 20px;
    right: 30px;
    width: 30px;
    height: 30px;
    transition: all 0.3s ease-in-out;
    &:hover{
        transform: scale(1.1);
        transition: all 0.3s ease-in-out;
    }
`

const Offre__Nav__Container__Span__reverse = styled.span`
    position: absolute;
    bottom: 20px;
    left: 30px;
    font-size: 1.2rem;
    font-weight: 600;
    font-family: 'Anybody', cursive;
    transition: all 0.3s ease-in-out;
    &:hover{
        color: #FEE440;
        transition: all 0.3s ease-in-out;
    }
`

export default function Offre__Nav() {
    return (
        <Offre__Nav__Section>

            <Offre__Nav__Container>
                <Link to="/Offre/Projet">
                    <div>
                        <Offre__Nav__Container__Span>site vitrine</Offre__Nav__Container__Span>
                        <Offre__Nav__Container__P >
                            Votre activité et entreprise sont présentées sur 5 pages détaillées.
                        </Offre__Nav__Container__P >
                        <Offre__Nav__Container__Span__reverse>A partir de 500€</Offre__Nav__Container__Span__reverse>
                        <Offre__Nav__Container__Img src={icon_arrow} />
                    </div>
                </Link>
            </Offre__Nav__Container>
            <Offre__Nav__Container>
                <Link to="/Offre/Projet">
                    <div>
                        <Offre__Nav__Container__Span>site vitrine</Offre__Nav__Container__Span>
                        <Offre__Nav__Container__P >
                            Votre activité et entreprise sont présentées sur 5 pages détaillées.
                        </Offre__Nav__Container__P >
                        <Offre__Nav__Container__Span__reverse>A partir de 500€</Offre__Nav__Container__Span__reverse>
                        <Offre__Nav__Container__Img src={icon_arrow} />
                    </div>
                </Link>
            </Offre__Nav__Container>
            <Offre__Nav__Container>
                <Link to="/Offre/Projet">
                    <div>
                        <Offre__Nav__Container__Span>site vitrine</Offre__Nav__Container__Span>
                        <Offre__Nav__Container__P >
                            Votre activité et entreprise sont présentées sur 5 pages détaillées.
                        </Offre__Nav__Container__P >
                        <Offre__Nav__Container__Span__reverse>A partir de 500€</Offre__Nav__Container__Span__reverse>
                        <Offre__Nav__Container__Img src={icon_arrow} />
                    </div>
                </Link>
            </Offre__Nav__Container>
            <Offre__Nav__Container>
                <Link to="/Offre/Projet">
                    <div>
                        <Offre__Nav__Container__Span>site vitrine</Offre__Nav__Container__Span>
                        <Offre__Nav__Container__P >
                            Votre activité et entreprise sont présentées sur 5 pages détaillées.
                        </Offre__Nav__Container__P >
                        <Offre__Nav__Container__Span__reverse>A partir de 500€</Offre__Nav__Container__Span__reverse>
                        <Offre__Nav__Container__Img src={icon_arrow} />
                    </div>
                </Link>
            </Offre__Nav__Container>


        </Offre__Nav__Section>
    )
}