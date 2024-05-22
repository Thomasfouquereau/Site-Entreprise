import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Renolandes from "../../assets/Screenshot 2024-05-23 RenoLandes.png"

const theme = {
    primary: "#0f284e",
    secondary: "#00ff73",
    border: "#e0e0e038",
    shadowPrimary: "#00ff7383",
}

const ProjetSiteVitrine_container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 8vw;
    margin-bottom: 10vw;
    @media (max-width: 768px) {
        margin-top: 16vw;
    }
`

const ProjetSiteVitrine_container__info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${theme.primary};
    width: 95%;
    border-radius: 2.5vw;
    height: 25vh;
    position: relative;
    border: 0.12vw solid ${theme.border};
    ::after {
        content: "";
        position: absolute;
        width: 40vw;
        height: 18vh;
        background: ${theme.secondary};
        box-shadow: ${theme.shadowPrimary} -8vw 9vh 10vw 5px;  
        z-index: -1;
        border-radius: 3vw;
        left: 0px;
        bottom: 1px;
    }
    @media (max-width: 768px) {
        height: 35vw;
        ::after {
            width: 50vw;
            height: 27vw;
            box-shadow: ${theme.shadowPrimary} -14vw 3.5vh 20vw 2px;
        }
    }
    h1 {
        font-size: 2vw;
        font-weight: 700;
        margin-bottom: 1.5vw;
        margin-top: 0;
        font-family: 'Anybody', cursive;
        margin-left: 2.5vw;
        margin-right: 2.5vw;
        @media (max-width: 768px) {
            font-size: 4vw;
            margin-left: 5vw;
            margin-bottom: 3vw;
        }
    }
    p {
        font-size: 0.9vw;
        font-weight: 400;
        margin: 0;
        width: 70%;
        font-family: 'poppins', sans-serif;
        margin-left: 2.5vw;
        margin-right: 2.5vw;
        @media (max-width: 768px) {
            font-size: 2vw;
            margin-left: 5vw;
            width: 90%;
        }
    }
`

const ProjetSiteVitrine_container__message = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 3vw;
    height: 27vh;
    margin-top: 8vw;
    @media (max-width: 768px) {
        height: 53vh;
        width: 60vw;
    }
    p {
        font-size: 1.2vw;
        font-weight: 400;
        margin: 0;
        width: 70%;
        font-family: 'poppins', sans-serif;
        margin-left: 2.5vw;
        margin-right: 2.5vw;
        @media (max-width: 768px) {
            font-size: 3vw;
            margin-left: 5vw;
            width: 90%;
        }
        span {
            font-weight: 700;
            color: ${theme.secondary};
            font-size: 1.5vw;
            @media (max-width: 768px) {
                font-size: 3vw;
            }
        }
    }
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: ${theme.secondary};
        background-color: ${theme.primary};
        font-family: 'poppins', sans-serif;
        font-size: 1.1vw;
        font-weight: 500;
        width: 15vw;
        height: 4vh;
        padding: 10px;
        border-radius: 4.5vw;
        text-align: center;
        transition: all 0.31s ease;
        box-shadow: inset ${theme.shadowPrimary} 6px 6px 30px -5px;
        margin-top: 2vh;
        @media (max-width: 768px) {
                font-size: 2.6vw;
                width: 40vw;
                height: 6vw;
            }
        &:hover {
            background-color: ${theme.secondary};
            color: ${theme.primary};
            transition: all 0.31s ease;
            transform: scale(0.95);
        }
    }
`

export default function ProjetSiteVitrine() {
    return (
        <ProjetSiteVitrine_container>
            <ProjetSiteVitrine_container__info>
                <h1>Projet Site Vitrine</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor posuere augue a pellentesque.
                    Duis pulvinar mauris et urna ullamcorper efficitur. Nam enim erat, tempor eget volutpat eget, tempor molestie eros.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </p>
            </ProjetSiteVitrine_container__info>
            <ProjetSiteVitrine_container__message>
                <div>
                    <div>
                        <img src={Renolandes} alt="image du site renolandes" />
                        <span>Renolandes</span>
                        <a>visiter le site</a>
                    </div>
                </div>
                <Link to="/contact">contactez nous</Link>
            </ProjetSiteVitrine_container__message>
        </ProjetSiteVitrine_container>

    )
}