import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import icon_mail from '../assets/Icon-mail.svg';
import icon_facebook from '../assets/Icon-fb.svg';
import icon_instagram from '../assets/Icon-ig.svg';
import icon_linkedin from '../assets/Icon-in.svg';

const Footer__ = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #222223;
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
    background-color:#EF8354 ;
    width: 30vw;
    height: 5vw;
    padding: 20px 30px;
    border-radius: 3vw;
    transform: translateY(-90%);
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
    background-color:#2D3142 ;
    width: 13vw;
    height: 3vw;
    border-radius: 3vw;
    cursor: pointer;
    transition: all 0.31s ease;
    &:hover{
        background-color: #EF8354;
        box-shadow: #2D3142 0px 0px 0px 2px;
        transition: all 0.31s ease;
        img{
            filter: invert(1);
            transition: all 0.31s ease;
        }
        span{
            color: #2D3142;
            transition: all 0.31s ease;
            font-size: 0.7vw;
        }
    }
    img{
        width: 2vw;
        height: 2vw;
        margin-right: 10px;
    }
    span{
        font-size: 0.7vw;
        color:#fff
    }
`

const Footer__Container__Links = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 7vw;
    margin-right: 10px;
    img{
        width: 1.7vw;
        height: 1.7vw;
   }
`

const Footer__Container__Content = styled.div`
    color: #fff;
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
            <Footer__Container__Content>
                <p>© 2023 - Tous droits réservés</p>
            </Footer__Container__Content>
        </Footer__>
    )
}