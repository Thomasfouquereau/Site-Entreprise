import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import icon_site from '../../assets/Icon-site-shadow.svg';
import icon_moniteur from '../../assets/Icon-monitor-shadow.svg';
import icon_shop from '../../assets/Icon-shop-shadow.svg';
import icon_saas from '../../assets/Icon-saas-shadow.svg';

const Section__Types = styled.section`
    margin-top: 300px;
    margin-bottom: 300px;
    font-family: 'Poppins', sans-serif;
`
const Types__Container = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    height: 500px;
`
const Types__Container__reverse = styled.div`
    display: flex;
    flex-direction: row-reverse;
    position: relative;
    height: 500px;
`
const Types__Container__img = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;   
    margin-left: 20px;
    border-radius: 50px 0px 0px 50px;
    background-color: #FEE440;
`
const Types__Container__img__reverse = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;   
    margin-right: 20px;
    border-radius: 0px 50px 50px 0px;
    background-color: #FEE440;
`
const Types__Container__info__bg_color = styled.div`
    background-color: #FEE440;
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
    border-radius: 50px 0px 0px 50px;
    background-color: #222223;
    padding-left: 70px;
    h2 {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 10px;
        margin-top: 0;
        font-family: 'Anybody', cursive;
    }
    p {
        font-size: 1.2rem;
        font-weight: 400;
        margin: 0;
        width: 70%;
    }
    a {
        text-decoration: none;
        color: #fff;
        font-size: 1.2rem;
        font-weight: 400;
        margin: 0;
        width: 25%;
        border: 1px solid #fff;
        padding: 10px;
        border-radius: 50px;
        margin-top: 10px;
        text-align: center;
        transform: translateX(50%);
        margin-left: 50%;
        margin-top: 20px;
        transition: all 0.31s ease;
        &:hover {
            background-color: #fff;
            color: #222223;
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
    border-radius: 0px 50px 50px 0px;
    background-color: #222223;
    padding-left: 70px;
    h2 {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 10px;
        margin-top: 0;
        font-family: 'Anybody', cursive;
    }
    p {
        font-size: 1.2rem;
        font-weight: 400;
        margin: 0;
        width: 70%;
    }
    a {
        text-decoration: none;
        color: #fff;
        font-size: 1.2rem;
        font-weight: 400;
        width: 25%;
        border: 1px solid #fff;
        padding: 10px;
        border-radius: 50px;
        margin-top: 10px;
        text-align: center;
        transform: translateX(50%);
        margin-left: 50%;
        margin-top: 20px;
        transition: all 0.31s ease;
        &:hover {
            background-color: #fff;
            color: #222223;
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
            x: "70%",
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
            x: "-70%",
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
            x: "70%",
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
            x: "-70%",
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
                        <p>Une landing page est une page web qui a pour but de convertir un visiteur en client. Elle est souvent utilisée pour des campagnes de marketing digital.</p>
                        <Link to="/landing-page">En savoir plus</Link>
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
                        <p>Un site vitrine est un site web qui présente votre entreprise, vos produits ou vos services. Il est le premier contact que vos clients auront avec vous. Il doit donc être clair, simple et efficace.</p>
                        <Link to="/site-vitrine">En savoir plus</Link>

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
                        <p>Un site e-commerce est un site web qui permet de vendre des produits ou des services en ligne. Il est donc indispensable pour toute entreprise qui souhaite vendre ses produits en ligne.</p>
                        <Link to="/site-e-commerce">En savoir plus</Link>
                    </Types__Container__info>
                </Types__Container__info__bg_color>
            </Types__Container>
            <Types__Container__reverse>
                <Types__Container__img__reverse ref={item4}>
                    <img src={icon_saas} alt="icon site" />
                </Types__Container__img__reverse>
                <Types__Container__info__bg_color>
                    <Types__Container__info__reverse>
                        <h2>Site SaaS</h2>
                        <p>Un site SaaS est un site web qui permet de vendre un service en ligne. Il est donc indispensable pour toute entreprise qui souhaite vendre un service en ligne.</p>
                        <Link to="/site-saas">En savoir plus</Link>
                    </Types__Container__info__reverse>
                </Types__Container__info__bg_color>
            </Types__Container__reverse>
        </Section__Types>
    );
}