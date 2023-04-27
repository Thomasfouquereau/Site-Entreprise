import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { gsap } from "gsap";
import logo_site from "../assets/Icon-site.svg";
import Site_Vitrine from "./Site_Vitrine/Site_Vitrine";
import LandingPage from "./LandingPage/LandingPage";
import Site_E_Commerce from "./Site_E_Commerce/Site_E_Commerce";
import Site_Saas from "./Site_Saas/Site_Saas";
import Creatif_Coding from "./CreatifCoding/CreatifCoding";

const Section__Type_de_Site = styled.section`
    margin-top: 300px;
    margin-bottom: 300px;
    margin-left: 20px;
    margin-right: 20px;
    font-family: 'Poppins', sans-serif;
`
const Type_De_Site__Container__Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 50px;
    background-color: #fff;
    border-radius: 50px;
    height: 10vw;
    margin-bottom: 5px;
    color: #2D3142;
    img {
        width: 5vw;
        height: 5vw;
    }
`

const Type_De_Site__Container__Title__Info = styled.div`
margin-left: 50px;
    h1{
        margin: 0;
        margin-bottom: 20px;
        font-size: 2vw;
        font-weight: 700;
        font-family: 'Anybody', cursive;
    }
    p{
        margin: 0;
        font-size: 0.9vw;
    }
`

const Type_De_Site__Container__description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 40px;
    background-color: #4F5D75;
    border-radius: 50px;
    margin-top: 5px;
    margin-bottom: 5px;
    height: 17vw;
    color: #fff;
    h2{
        margin: 0;
        padding-bottom: 50px;
        font-size: 1.8vw;
        font-weight: 700;
        font-family: 'Anybody', cursive;
    }
    p{
        margin: 0;
        font-size: 0.8vw;
        span{
            color: #EF8354;
        }
    }
`

export default function Type_De_site_Factory() {

    let titre = window.location.href.includes("Site-vitrine") ? "Site Vitrine"
        : window.location.href.includes("Landing-page") ? "Landing page"
            : window.location.href.includes("Site-e-commerce") ? "Site e-commerce"
                : window.location.href.includes("Creatif-Coding") ? "Creatif Coding"
                    : window.location.href.includes("Site-saas") ? "Site saas" : null

    return (
        <Section__Type_de_Site>
            <Type_De_Site__Container__Title>
                <img src={logo_site} />
                <Type_De_Site__Container__Title__Info>
                    <h1>{titre}</h1>
                    <p>Pour se démarquer sur internet et faire de votre projet une entité unique.</p>
                </Type_De_Site__Container__Title__Info>

            </Type_De_Site__Container__Title>
            {
                window.location.href.includes("Site-vitrine") ? <Site_Vitrine />
                    : window.location.href.includes("Landing-page") ? <LandingPage />
                        : window.location.href.includes("Site-e-commerce") ? <Site_E_Commerce />
                            : window.location.href.includes("Creatif-Coding") ? <Creatif_Coding />
                                : window.location.href.includes("Site-saas") ? <Site_Saas /> : null
            }
            <Type_De_Site__Container__description>
                <h2>Création de {titre}</h2>
                <p>
                    Pour se démarquer sur internet et faire de votre <span>projet</span> une entité unique.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula nisi neque.
                    Pellentesque finibus neque vitae odio viverra, nec tempor lorem viverra.
                    Morbi facilisis facilisis tempor. Sed posuere <span>fermentum</span>  ligula ut sodales.
                    Pellentesque elementum volutpat nulla, eget fringilla lectus luctus sit amet.
                    Nulla sed arcu dictum, mattis orci ac, pulvinar purus. Praesent ut est risus.
                    Cras eget quam id quam posuere <span>malesuada</span> ac sit amet neque. Curabitur a erat mattis.
                    Pour se démarquer sur internet et faire de votre <span>projet</span> une entité unique.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Maecenas vehicula nisi neque.
                    Pellentesque finibus <span>vitae</span>  odio viverra, nec tempor lorem viverra.
                </p>
            </Type_De_Site__Container__description>
            <Type_De_Site__Container__description>
                <h2>Création de {titre}</h2>
                <p>
                    Pour se démarquer sur internet et faire de votre <span>projet</span> une entité unique.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula nisi neque.
                    Pellentesque finibus neque vitae odio viverra, nec tempor lorem viverra.
                    Morbi facilisis facilisis tempor. Sed posuere <span>fermentum</span>  ligula ut sodales.
                    Pellentesque elementum volutpat nulla, eget fringilla lectus luctus sit amet.
                    Nulla sed arcu dictum, mattis orci ac, pulvinar purus. Praesent ut est risus.
                    Cras eget quam id quam posuere <span>malesuada</span> ac sit amet neque. Curabitur a erat mattis.
                    Pour se démarquer sur internet et faire de votre <span>projet</span> une entité unique.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Maecenas vehicula nisi neque.
                    Pellentesque finibus <span>vitae</span>  odio viverra, nec tempor lorem viverra.
                </p>
            </Type_De_Site__Container__description>
        </Section__Type_de_Site>
    )

}