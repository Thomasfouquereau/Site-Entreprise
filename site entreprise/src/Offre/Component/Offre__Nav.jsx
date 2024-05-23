import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import icon_arrow from '../../assets/Icon-arrow.svg';
import icon_landing_page from '../../assets/Icon-site-shadow.svg';
import icon_creatif_coding from '../../assets/Icon-creatif-coding-shadow.svg';
import icon_site_vitrine from '../../assets/Icon-monitor-shadow.svg';
import icon_site_e_commerce from '../../assets/Icon-shop-shadow.svg';
import icon_site_saas from '../../assets/Icon-saas-shadow2.svg';
import Icon_portfolio from '../../assets/Icon-portfolio.svg';

const theme = {
    primary: "#0f284e",
    secondary: "#00ff73",
    border: "#e0e0e038",
    shadowPrimary: "#00ff7383",
}

const Offre__Nav__Section = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 95%;
    margin: 0 auto;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    a{
        text-decoration: none;
    }
`

const Offre__Nav__Container = styled.div`
    background-color: ${theme.primary};
    height: 18vw;
    width: calc( 100% / 2 - 10px );
    border-radius: 3vw;
    margin: 5px;
    position: relative;  
    transition: all 0.3s ease-in-out; 
    @media (max-width: 768px) {
        width: 100% ;
        height: 30vw;
        margin: 5px 0;
    }
    &:hover{
        scale: 0.98;
        transition: all 0.3s ease-in-out;
        background: ${theme.primary};
        background: linear-gradient(163deg, #020024 0%, rgba(14,40,80,1) 35%, #00ff73 100%);
        box-shadow: ${theme.shadowPrimary} 6vw 14vh 20vw 0px;
    span{
        transition: all 0.2s ease-in-out;
        background-color: ${theme.primary};
    }
    }
    a{
        color: #fff;
    }
   
`

const Offre__Nav__Card__Container = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: center;
    align-items: center;
    height: 100%;
`

const Offre__Nav__Card__Container__Icon = styled.img`
    width: 7vw;
    height: 7vw;
    transition: all 0.3s ease-in-out;
    @media (max-width: 768px) {
        width: 15vw;
        height: 15vw;
    }
    &:hover{
        scale: 1.1;
        transition: all 0.3s ease-in-out;
    }
`

const Offre__Nav__Card__Container__Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 70%;
    @media (max-width: 768px) {
        width: 60%;
    }
`

const Offre__Nav__Card__Container__Coder = styled.p`
    margin: 0;
    text-transform: capitalize;
    font-style: italic;
    font-size: 1.7vw;
    transition: all 0.3s ease-in-out;
    @media (max-width: 768px) {
        font-size: 2.7vw;
    }
    &:hover{
        scale: 1.015;
        transition: all 0.3s ease-in-out;
    }
`

const Offre__Nav__Card__Container__Title = styled.h2`
    margin: 0;
    text-transform: capitalize;
    font-family:'Anybody', cursive;
    font-size: 2.5vw;
    transition: all 0.3s ease-in-out;
    @media (max-width: 768px) {
        font-size: 3.5vw;
    }
    &:hover{
        scale: 1.01;
        transition: all 0.3s ease-in-out;
    }
`

const Offre__Nav__Card__Prix = styled.p`
    position: absolute;
    bottom: 1vw;
    left: 3.4vw;
    margin: 0;
    font-size: 1vw;
    transition: all 0.3s ease-in-out;
    @media (max-width: 768px) {
        font-size: 2vw;
        bottom: 1.5vw;
    }
    &:hover{
        scale: 1.1;
        transition: all 0.3s ease-in-out;
    }
`

const Offre__Nav__Card__Arrow = styled.img`
    position: absolute;
    bottom: 1vw;
    right: 1.5vw;
    transition: all 0.3s ease-in-out;
    width: 2vw;
    @media (max-width: 768px) {
        bottom: 1.5vw;
        width: 4vw;
    }
    &:hover{
        scale: 1.2;
        transition: all 0.3s ease-in-out;
    }
`

const Offre__Nav__Card__New = styled.span`
    position: absolute;
    top: 1vw;
    right: 2.5vw;
    font-style: italic;
    text-transform: capitalize;
    background-color: ${theme.secondary};
    box-shadow: 1px 4px 5px rgba(0, 0, 0, 0.25);
    color: #fff;
    padding: 0.2vw 1.5vw;
    border-radius: 3vw;
    font-size: 1vw;
    transition: all 0.3s ease-in-out;
    @media (max-width: 768px) {
        font-size: 2vw;
        padding: 0.5vw 3vw;
        top: 2vw;
    }
    &:hover{
        scale: 1.1;
        transition: all 0.3s ease-in-out;
    }
`

export default function Offre__Nav() {
    return (
        <Offre__Nav__Section >
            <Offre__Nav__Container >
                <Link to="/Offre/Landing-page">
                    <Offre__Nav__Card__Container>
                        <Offre__Nav__Card__Container__Icon src={icon_landing_page} alt='icon site' />
                        <Offre__Nav__Card__Container__Info>
                            <Offre__Nav__Card__Container__Coder>coder</Offre__Nav__Card__Container__Coder>
                            <Offre__Nav__Card__Container__Title>Landing-page</Offre__Nav__Card__Container__Title>
                        </Offre__Nav__Card__Container__Info>
                    </Offre__Nav__Card__Container>
                    <Offre__Nav__Card__Prix>A partir de 650€</Offre__Nav__Card__Prix>
                    <Offre__Nav__Card__Arrow src={icon_arrow} alt='icon arrow' /> 
                </Link>
            </Offre__Nav__Container>  
            <Offre__Nav__Container >
                <Link to="/Offre/Site-vitrine">
                    <Offre__Nav__Card__Container>
                        <Offre__Nav__Card__Container__Icon src={icon_site_vitrine} alt='icon site' />
                        <Offre__Nav__Card__Container__Info>
                            <Offre__Nav__Card__Container__Coder>coder</Offre__Nav__Card__Container__Coder>
                            <Offre__Nav__Card__Container__Title>Site-vitrine</Offre__Nav__Card__Container__Title>
                        </Offre__Nav__Card__Container__Info>
                    </Offre__Nav__Card__Container>
                    <Offre__Nav__Card__Prix>A partir de 650€</Offre__Nav__Card__Prix>
                </Link>
            </Offre__Nav__Container>
            <Offre__Nav__Container >
                <Link to="/Offre/Site-e-commerce">
                    <Offre__Nav__Card__Container>
                        <Offre__Nav__Card__Container__Icon src={icon_site_e_commerce} alt='icon site' />
                        <Offre__Nav__Card__Container__Info>
                            <Offre__Nav__Card__Container__Coder>coder</Offre__Nav__Card__Container__Coder>
                            <Offre__Nav__Card__Container__Title>Site-e-commerce</Offre__Nav__Card__Container__Title>
                        </Offre__Nav__Card__Container__Info>
                    </Offre__Nav__Card__Container>
                    <Offre__Nav__Card__Prix>A partir de 650€</Offre__Nav__Card__Prix>
                </Link>
            </Offre__Nav__Container>
            <Offre__Nav__Container >
                <Link to="/Offre/Site-saas">
                    <Offre__Nav__Card__Container>
                        <Offre__Nav__Card__Container__Icon src={icon_site_saas} alt='icon site' />
                        <Offre__Nav__Card__Container__Info>
                            <Offre__Nav__Card__Container__Coder>coder</Offre__Nav__Card__Container__Coder>
                            <Offre__Nav__Card__Container__Title>Application web</Offre__Nav__Card__Container__Title>
                        </Offre__Nav__Card__Container__Info>
                    </Offre__Nav__Card__Container>
                    <Offre__Nav__Card__Prix>A partir de 650€</Offre__Nav__Card__Prix>
                </Link>
            </Offre__Nav__Container>
            <Offre__Nav__Container >
                <Link to="/Offre/Creatif-coding">
                    <Offre__Nav__Card__Container>
                        <Offre__Nav__Card__New>New !</Offre__Nav__Card__New>
                        <Offre__Nav__Card__Container__Icon src={icon_creatif_coding} alt='icon site' />
                        <Offre__Nav__Card__Container__Info>
                            <Offre__Nav__Card__Container__Coder>coder</Offre__Nav__Card__Container__Coder>
                            <Offre__Nav__Card__Container__Title>Creatif Coding</Offre__Nav__Card__Container__Title>
                        </Offre__Nav__Card__Container__Info>
                    </Offre__Nav__Card__Container>
                    <Offre__Nav__Card__Prix>A partir de 650€</Offre__Nav__Card__Prix>
                </Link>
            </Offre__Nav__Container>
            <Offre__Nav__Container >
                <Link to="/Offre/Portfolio">
                    <Offre__Nav__Card__Container>
                        <Offre__Nav__Card__New>New !</Offre__Nav__Card__New>
                        <Offre__Nav__Card__Container__Icon src={Icon_portfolio} alt='icon site' />
                        <Offre__Nav__Card__Container__Info>
                            <Offre__Nav__Card__Container__Coder>coder</Offre__Nav__Card__Container__Coder>
                            <Offre__Nav__Card__Container__Title>Portfolio</Offre__Nav__Card__Container__Title>
                        </Offre__Nav__Card__Container__Info>
                    </Offre__Nav__Card__Container>
                    <Offre__Nav__Card__Prix>A partir de 650€</Offre__Nav__Card__Prix>
                </Link>
            </Offre__Nav__Container>
        </Offre__Nav__Section>
    )
}