import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import icon_site from '../../assets/Icon-site-shadow.svg';
import icon_moniteur from '../../assets/Icon-monitor-shadow.svg';
import icon_shop from '../../assets/Icon-shop-shadow.svg';
import icon_saas from '../../assets/Icon-saas-shadow.svg';

const theme = {
    primary: "#0f284e",
    secondary: "#00ff73",
    border: "#e0e0e038",
    shadowPrimary: "#00ff7383",
}

const Section__Types = styled.section`
    margin-top: 300px;
    margin-bottom: 300px;
    font-family: 'Poppins', sans-serif;
    @media (max-width: 768px){ 
        margin-top: 100px;
        margin-bottom: 100px;
    }
`

const Types__Container = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    height: 25vw;
    @media (max-width: 768px){
        height: 40vw; 
    }
`

const Types__Container__reverse = styled.div`
    display: flex;
    flex-direction: row-reverse;
    position: relative;
    height: 25vw;
    @media (max-width: 768px){
        height: 40vw; 
    }
`

const Types__Container__img = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;   
    margin-left: 20px;
    border-radius:3vw 0px 0px 3vw;
    background-color: ${theme.secondary};
    box-shadow: inset 4px 4px 6px rgba(0, 0, 0, 0.25);
    box-shadow: -2vw -3vw 20vw 0vw ${theme.shadowPrimary};
    @media (max-width: 768px){
        margin-left: 5px;
    }
    img{
        width: 8vw;
        @media (max-width: 768px){
            width: 12vw; 
    }
    }
`

const Types__Container__img__reverse = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;   
    margin-right: 20px;
    border-radius: 0px 3vw 3vw  0px;
    background-color: ${theme.secondary};
    box-shadow: inset -4px 4px 6px rgba(0, 0, 0, 0.25);
    box-shadow: 2vw -3vw 20vw 0vw ${theme.shadowPrimary};
    @media (max-width: 768px){
        margin-right: 5px;
    }
    img{
        width: 8vw;
        @media (max-width: 768px){
            width: 12vw; 
    }
    }
`

const Types__Container__info__bg_color = styled.div`
    background-color: ${theme.secondary};
    width: 70%;
`

const Types__Container__info = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    right: 0;
    height: 100%;
    width: 70%;
    border-radius: 3vw 0px 0px 3vw;
    background-color: ${theme.primary};
    padding-left: 70px;
    @media (max-width: 768px){
        padding-left: 30px;
    }
    h2 {
        font-size: 2.2vw;
        font-weight: 700;
        margin-bottom: 2vw;
        margin-top: 0;
        font-family: 'Anybody', cursive;
        @media (max-width: 768px){
            font-size: 4vw;
            margin-bottom: 1.5vw;
        }
    }
    p {
        font-size: 0.8vw;
        font-weight: 400;
        margin: 0;
        width: 70%;
        @media (max-width: 768px){
            font-size: 2vw;
        }
    }
    a {
        text-decoration: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #222223;
        margin: 0;
        font-size: 0.9vw;
        font-weight: 500;
        width: 13vw;
        height: 2.5vw;
        background-color: #fff;
        padding: 8px;
        border-radius: 0.5vw;
        text-align: center;
        margin-left: 50%;
        margin-top: 30px;
        transition: all 0.31s ease;
        @media (max-width: 768px){
            height: 4vw;
            width: 23vw;
            margin-left: 35%;
            margin-top: 15px;
            font-size: 1.5vw;
        }
        &:hover {
            background-color: ${theme.secondary};
            color: #ffffff;
            transition: all 0.31s ease;
        }
    }
`

const Types__Container__info__reverse = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 0;
    height: 100%;
    width: 70%;
    border-radius: 0px 3vw 3vw 0px;
    background-color: ${theme.primary};
    padding-left: 70px;
    @media (max-width: 768px){
        padding-left: 30px;
    }
    h2 {
        font-size: 2.2vw;
        font-weight: 700;
        margin-bottom: 2vw;
        margin-top: 0;
        font-family: 'Anybody', cursive;
        @media (max-width: 768px){
            font-size: 4vw; ;
        }
    }
    p {
        font-size: 0.8vw;
        font-weight: 400;
        margin: 0;
        width: 70%;
        @media (max-width: 768px){
            font-size: 2vw;
        }
    }
    a {
        text-decoration: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #222223;
        margin: 0;
        font-size: 0.9vw;
        font-weight: 500;
        width: 13vw;
        height: 2.5vw;
        background-color: #fff;
        padding: 8px;
        border-radius: 0.5vw;
        text-align: center;
        margin-left: 50%;
        margin-top: 30px;
        transition: all 0.31s ease;
        @media (max-width: 768px){
            height: 4vw;
            width: 23vw;
            margin-left: 35%;
            margin-top: 15px;
            font-size: 1.5vw;
        }
        &:hover {
            background-color: ${theme.secondary};
            color: #ffffff;
            box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
            transition: all 0.31s ease;
        }
    }
`

export default function Types() {

    const item1 = useRef(null);
    const item2 = useRef(null);
    const item3 = useRef(null);
    const item4 = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(item1.current, {
            x: "80%",
        }, {
            x: 0,
            duration: 1,
            scrollTrigger: {
                trigger: item1.current,
                start: "top bottom",
                end: "top top",
                scrub: true,
            }
        })
        gsap.fromTo(item2.current, {
            x: "-80%",
        }, {
            x: 0,
            duration: 1,
            scrollTrigger: {
                trigger: item2.current,
                start: "top bottom",
                end: "top top",
                scrub: true,
            }
        })
        gsap.fromTo(item3.current, {
            x: "80%",
        }, {
            x: 0,
            duration: 1,
            scrollTrigger: {
                trigger: item3.current,
                start: "top bottom",
                end: "top top",
                scrub: true,
            }
        })
        gsap.fromTo(item4.current, {
            x: "-80%",
        }, {
            x: 0,
            duration: 1,
            scrollTrigger: {
                trigger: item4.current,
                start: "top bottom",
                end: "top top",
                scrub: true,
            }
        })
    }, [])

    return (
        <Section__Types>

            <Types__Container>
                <Types__Container__img ref={item1}>
                    <img src={icon_site} alt="icon site" />
                </Types__Container__img>
                <Types__Container__info__bg_color>
                    <Types__Container__info>
                        <h2>Landing Page</h2>
                        <p>
                        Une landing page est une page web spécialement conçue pour convertir les visiteurs en 
                        leads ou clients. Elle est souvent utilisée dans le cadre de campagnes marketing pour 
                        inciter à une action précise, comme remplir un formulaire, s'inscrire à une newsletter 
                        ou effectuer un achat. 
                        </p>
                        <Link to="/Offre/Landing-page">En savoir plus</Link>
                    </Types__Container__info>
                </Types__Container__info__bg_color>
            </Types__Container>

            <Types__Container__reverse>
                <Types__Container__img__reverse ref={item2}>
                    <img src={icon_moniteur} alt="icon site" />
                </Types__Container__img__reverse>
                <Types__Container__info__bg_color>
                    <Types__Container__info__reverse>
                        <h2>Site vitrine</h2>
                        <p>
                        Un site vitrine est une plateforme en ligne conçue pour présenter l’activité, 
                        les services ou les produits d’une entreprise sans les vendre directement. 
                        Il sert principalement à informer les visiteurs, à promouvoir la marque et 
                        à établir une présence professionnelle sur le web. 
                        </p>
                        <Link to="/Offre/Site-vitrine">En savoir plus</Link>
                    </Types__Container__info__reverse>
                </Types__Container__info__bg_color>
            </Types__Container__reverse>

            <Types__Container>
                <Types__Container__img ref={item3}>
                    <img src={icon_shop} alt="icon site" />
                </Types__Container__img>
                <Types__Container__info__bg_color>
                    <Types__Container__info>
                        <h2>Site e-commerce</h2>
                        <p>
                        Un site e-commerce est une plateforme en ligne dédiée à la vente de produits et services. 
                        Il permet aux entreprises de proposer leurs articles directement aux consommateurs via 
                        internet, facilitant ainsi les transactions commerciales.
                        </p>
                        <Link to="/Offre/Site-e-commerce">En savoir plus</Link>
                    </Types__Container__info>
                </Types__Container__info__bg_color>
            </Types__Container>

            <Types__Container__reverse>
                <Types__Container__img__reverse ref={item4}>
                    <img src={icon_saas} alt="icon site" />
                </Types__Container__img__reverse>
                <Types__Container__info__bg_color>
                    <Types__Container__info__reverse>
                        <h2>Sites créatifs</h2>
                        <p>
                            Un site web créatif est une plateforme en ligne conçue pour présenter des travaux 
                            \artistiques et innovants. Il est idéal pour les artistes, designers et créateurs 
                            qui souhaitent partager leur portfolio, promouvoir leurs projets et attirer de 
                            nouveaux clients.
                        </p>
                        <Link to="/Offre/Creatif-coding">En savoir plus</Link>
                    </Types__Container__info__reverse>
                </Types__Container__info__bg_color>
            </Types__Container__reverse>

        </Section__Types>
    );
}