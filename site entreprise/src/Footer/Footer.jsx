import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import icon_mail from '../assets/Icon-mail.svg';
import icon_facebook from '../assets/Icon-fb.svg';
import icon_instagram from '../assets/Icon-ig.svg';
import icon_linkedin from '../assets/Icon-in.svg';
import logo_dev from '../assets/logo-42dev-no-bg.svg';

const theme = {
    primary: "#0f284e",
    secondary: "#00ff73",
    border: "#e0e0e038",
    shadowPrimary: "#00ff7383",
}

const Footer__ = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${theme.primary};
    padding: 50px 0px;
    font-family: 'Poppins', sans-serif;
    font-size: 0.7vw;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    
`

const Footer__Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color:${theme.secondary};
    width: 30vw;
    height: 5vw;
    padding: 20px 30px;
    border-radius: 3vw;
    transform: translateY(-90%);
    box-shadow: ${theme.shadowPrimary} -0vw -0vh 20vw 0.7vw;
    @media (max-width: 768px){
        transform: translateY(-110%);
        width: 70vw;
        height: 20vw;
    }
    a{
        display: flex;
        align-items: center;
        text-decoration: none;
    }
`

const Footer__Container__Contact = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color:${theme.primary} ;
    width: 13vw;
    height: 3vw;
    border-radius: 3vw;
    cursor: pointer;
    transition: all 0.31s ease;
    @media (max-width: 768px){
        width: 27vw;
        height: 8vw;
    }
    &:hover{
        background-color: ${theme.secondary};
        box-shadow: ${theme.primary} 0px 0px 0px 2px;
        transition: all 0.31s ease;
        transform: scale(1.05);
        img{
            filter: invert(1);
            transition: all 0.31s ease;
        }
        span{
            color: ${theme.primary};
            transition: all 0.31s ease;
            font-size: 0.7vw;
        }
        @media (max-width: 768px){
        span{
            font-size: 2vw;
        }
    }
    }
    img{
        width: 2vw;
        height: 2vw;
        margin-right: 10px;
        @media (max-width: 768px){
            width: 4vw;
            height: 4vw;
        }
    }
    span{
        font-size: 0.7vw;
        color:#fff
    }
    @media (max-width: 768px){
        span{
            font-size: 2vw;
        }
    }
`

const Footer__Container__Links = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 7vw;
    margin-right: 10px;
    @media (max-width: 768px){
            width: 18vw;
        }
    img{
        width: 1.7vw;
        height: 1.7vw;
        transition: all 0.31s ease;
        &:hover{
            filter: invert(1);
            transform: scale(1.2);
        }
        @media (max-width: 768px){
            width: 5vw;
            height: 5vw;
        }
   }
`

const Logo = styled.img`
    transform: translateY(-2vw);
    @media (max-width: 768px){
        width: 20vw;
        height: 20vw;
        transform: translateY(-11vw);
    }
`

const Footer__Container__Content = styled.div`
    color: #fff;
    @media (max-width: 768px) {
        font-size: 2vw;
        transform: translateY(-3vw);
    }
`

export default function Footer() {
    return (
        <Footer__>
            <Footer__Container >
                <Link to="/Contact">
                    <Footer__Container__Contact>
                        <img src={icon_mail} />
                        <span>Contact</span>
                    </Footer__Container__Contact>
                </Link>

                <Footer__Container__Links>
                    <img src={icon_facebook} />
                    <img src={icon_instagram} />
                    <img src={icon_linkedin} />
                </Footer__Container__Links>
            </Footer__Container>
            <Logo src={logo_dev} />
            <Footer__Container__Content>
                <p>© 2024 - Tous droits réservés</p>
            </Footer__Container__Content>
        </Footer__>
    )
}