import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProjetLandingPage_container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 8vw;
    margin-bottom: 10vw;
`

const ProjetLandingPage_container__info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #EF8354;
    width: 95%;
    border-radius: 3vw;
    height: 25vh;
    h1 {
        font-size: 2vw;
        font-weight: 700;
        margin-bottom: 1.5vw;
        margin-top: 0;
        font-family: 'Anybody', cursive;
        margin-left: 2.5vw;
        margin-right: 2.5vw;
    }
    p {
        font-size: 0.9vw;
        font-weight: 400;
        margin: 0;
        width: 70%;
        font-family: 'poppins', sans-serif;
        margin-left: 2.5vw;
        margin-right: 2.5vw;
    }
`

const ProjetLandingPage_container__message = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 3vw;
    height: 25vh;
    margin-top: 8vw;
    p {
        font-size: 1.2vw;
        font-weight: 400;
        margin: 0;
        width: 70%;
        font-family: 'poppins', sans-serif;
        margin-left: 2.5vw;
        margin-right: 2.5vw;
        span {
            font-weight: 700;
            color: #EF8354;
            font-size: 1.5vw;
        }
    }
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: #EF8354;
        background-color: #fff;
        font-family: 'poppins', sans-serif;
        font-size: 1.1vw;
        font-weight: 500;
        width: 15vw;
        height: 4vh;
        padding: 10px;
        border-radius: 4.5vw;
        margin-top: 2vw;
        text-align: center;
        transition: all 0.31s ease;
        &:hover {
            background-color: #EF8354;
            color: #ffffff;
            transition: all 0.31s ease;
            transform: scale(0.95);
        }
    }
`

export default function ProjetLandingPage() {
    return (
        <ProjetLandingPage_container>
            <ProjetLandingPage_container__info>
                <h1>Projet Landing page</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor posuere augue a pellentesque.
                    Duis pulvinar mauris et urna ullamcorper efficitur. Nam enim erat, tempor eget volutpat eget, tempor molestie eros.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </p>
            </ProjetLandingPage_container__info>
            <ProjetLandingPage_container__message>
                <p>
                    <span>Désole</span>,
                    <br />
                    mais nous n'avons pas de projet à vous présentez
                    <spna>pour le moment</spna>.
                </p>
                <p>
                    Soyer le premier et <span>contactez nous</span>
                </p>
                <Link to="/contact">contactez nous</Link>
            </ProjetLandingPage_container__message>
        </ProjetLandingPage_container>

    )
}