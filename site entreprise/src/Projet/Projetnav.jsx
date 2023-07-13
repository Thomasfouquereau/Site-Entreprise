import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import icon_arrow from '../assets/Icon-arrow.svg';
import icon_landing_page from '../assets/Icon-site-shadow.svg';
import icon_creatif_coding from '../assets/Icon-creatif-coding-shadow.svg';
import icon_site_vitrine from '../assets/Icon-monitor-shadow.svg';
import icon_site_e_commerce from '../assets/Icon-shop-shadow.svg';
import icon_site_saas from '../assets/Icon-saas-shadow2.svg';

const Offre__Nav__Section = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 95%;
    margin: 0 auto;
    margin-top: 200px;
    margin-bottom: 250px;
    font-family: 'Poppins', sans-serif;
    overflow: hidden;
    color: #fff;
    a{
        text-decoration: none;
    }
`

const Offre__Nav__Container = styled.div`
    background-color: #4F5D75;
    height: 18vw;
    width: calc( 100% / 2 - 10px );
    border-radius: 3vw;
    margin: 5px;
    position: relative;  
    transition: all 0.3s ease-in-out; 
    &:hover{
        scale: 0.98;
        transition: all 0.3s ease-in-out;
        background-color: #EF8354;
    span{
        transition: all 0.2s ease-in-out;
        background-color: #4F5D75;
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
`

const Offre__Nav__Card__Container__Coder = styled.p`
    margin: 0;
    text-transform: capitalize;
    font-style: italic;
    font-size: 1.7vw;
    transition: all 0.3s ease-in-out;
    &:hover{
        scale: 1.01;
        transition: all 0.3s ease-in-out;
    }
`

const Offre__Nav__Card__Container__Title = styled.h2`
    margin: 0;
    text-transform: capitalize;
    font-family:'Anybody', cursive;
    font-size: 2.5vw;
    transition: all 0.3s ease-in-out;
    &:hover{
        scale: 1.01;
        transition: all 0.3s ease-in-out;
    }
`

const Offre__Nav__Card__New = styled.span`
    position: absolute;
    top: 1vw;
    right: 2.5vw;
    font-style: italic;
    text-transform: capitalize;
    background-color: #f27a47;
    box-shadow: 1px 4px 5px rgba(0, 0, 0, 0.25);
    color: #fff;
    padding: 0.2vw 1.5vw;
    border-radius: 3vw;
    font-size: 1vw;
    transition: all 0.3s ease-in-out;
    &:hover{
        scale: 1.2;
        transition: all 0.3s ease-in-out;
    }
`



export default function Projetnav() {

    return (
        <Offre__Nav__Section >

            <Offre__Nav__Container >
                <Link to="/Projet/Landing-page">
                    <Offre__Nav__Card__Container>
                    <Offre__Nav__Card__New>New !</Offre__Nav__Card__New>
                        <Offre__Nav__Card__Container__Icon src={icon_landing_page} alt='icon site' />
                        <Offre__Nav__Card__Container__Info>
                            <Offre__Nav__Card__Container__Coder>coder</Offre__Nav__Card__Container__Coder>
                            <Offre__Nav__Card__Container__Title>Landing-page</Offre__Nav__Card__Container__Title>
                        </Offre__Nav__Card__Container__Info>
                    </Offre__Nav__Card__Container>
                </Link>
            </Offre__Nav__Container>
            
            <Offre__Nav__Container >
                <Link to="/Projet/Site-vitrine">
                    <Offre__Nav__Card__Container>
                    <Offre__Nav__Card__New>New !</Offre__Nav__Card__New>
                        <Offre__Nav__Card__Container__Icon src={icon_site_vitrine} alt='icon site' />
                        <Offre__Nav__Card__Container__Info>
                            <Offre__Nav__Card__Container__Coder>coder</Offre__Nav__Card__Container__Coder>
                            <Offre__Nav__Card__Container__Title>Site-vitrine</Offre__Nav__Card__Container__Title>
                        </Offre__Nav__Card__Container__Info>
                    </Offre__Nav__Card__Container>

                </Link>
            </Offre__Nav__Container>

            <Offre__Nav__Container >
                <Link to="/Projet/Site-e-commerce">
                    <Offre__Nav__Card__Container>
                        <Offre__Nav__Card__Container__Icon src={icon_site_e_commerce} alt='icon site' />
                        <Offre__Nav__Card__Container__Info>
                            <Offre__Nav__Card__Container__Coder>coder</Offre__Nav__Card__Container__Coder>
                            <Offre__Nav__Card__Container__Title>Site-e-commerce</Offre__Nav__Card__Container__Title>
                        </Offre__Nav__Card__Container__Info>
                    </Offre__Nav__Card__Container>
                </Link>
            </Offre__Nav__Container>

            <Offre__Nav__Container >
                <Link to="/Projet/Site-saas">
                    <Offre__Nav__Card__Container>
                        <Offre__Nav__Card__Container__Icon src={icon_site_saas} alt='icon site' />
                        <Offre__Nav__Card__Container__Info>
                            <Offre__Nav__Card__Container__Coder>coder</Offre__Nav__Card__Container__Coder>
                            <Offre__Nav__Card__Container__Title>Application web</Offre__Nav__Card__Container__Title>
                        </Offre__Nav__Card__Container__Info>
                    </Offre__Nav__Card__Container>
                </Link>
            </Offre__Nav__Container>

            <Offre__Nav__Container >
                <Link to="/Projet/Creatif-Coding">
                    <Offre__Nav__Card__Container>
                        <Offre__Nav__Card__Container__Icon src={icon_creatif_coding} alt='icon site' />
                        <Offre__Nav__Card__Container__Info>
                            <Offre__Nav__Card__Container__Coder>coder</Offre__Nav__Card__Container__Coder>
                            <Offre__Nav__Card__Container__Title>Creatif Coding</Offre__Nav__Card__Container__Title>
                        </Offre__Nav__Card__Container__Info>
                    </Offre__Nav__Card__Container>
                </Link>
            </Offre__Nav__Container>
            
            {/* <Offre__Nav__Container >
                <Link to="/Projet/Creatif-Coding">
                    <Offre__Nav__Card__Container>
                        <Offre__Nav__Card__Container__Icon src={icon_creatif_coding} alt='icon site' />
                        <Offre__Nav__Card__Container__Info>
                            <Offre__Nav__Card__Container__Coder>coder</Offre__Nav__Card__Container__Coder>
                            <Offre__Nav__Card__Container__Title>Creatif Coding</Offre__Nav__Card__Container__Title>
                        </Offre__Nav__Card__Container__Info>
                    </Offre__Nav__Card__Container>
                </Link>
            </Offre__Nav__Container> */}

            

        </Offre__Nav__Section>
    )
}