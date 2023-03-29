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
    font-size: 14px;
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
    background-color:#FEE440 ;
    width: 40%;
    padding: 20px 30px;
    border-radius: 50px;
    transform: translateY(-90%);
`

const Footer__Container__Contact = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color:#222223 ;
    padding: 20px 30px;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.31s ease;
    &:hover{
        background-color: #FEE440;
        box-shadow: #222223 0px 0px 0px 2px;
        transition: all 0.31s ease;
        img{
            filter: invert(1);
            transition: all 0.31s ease;
        }
        span{
            color: #222223;
            transition: all 0.31s ease;
            font-weight: 700;
            letter-spacing: 0.6px;
        }
    }
    img{
        margin-right: 20px;
    }
    span{
        font-size: 1.2rem;
        color:#fff
    }
`

const Footer__Container__Links = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    img{
        margin-right: 20px;
   }
`   

const Footer__Container__Content = styled.div`
    color: #fff;
    `

export default function Footer() {
    return (
        <Footer__>
            <Footer__Container >
                <Footer__Container__Contact>
                    <img src={icon_mail}/>
                    <span>Contact</span>
                </Footer__Container__Contact>
                <Footer__Container__Links>
                    <img src={icon_facebook}/>
                    <img src={icon_instagram}/>
                    <img src={icon_linkedin} />
                </Footer__Container__Links>
            </Footer__Container>
            <Footer__Container__Content>
                <p>© 2023 - Tous droits réservés</p>
            </Footer__Container__Content>
        </Footer__>
    )
}