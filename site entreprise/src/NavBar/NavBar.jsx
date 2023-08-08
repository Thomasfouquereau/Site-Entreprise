import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { gsap } from "gsap";

const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5vh;
    margin-top: 50px;
    font-family: 'Poppins', sans-serif;
    ul {
        display: flex;
        list-style: none;
    }
`;

const StyledLi = styled.li`
    display: flex;
    margin: 0 1rem;
    background-color: #EF8354;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;
    transition: all 0.3s ease;
    height: 3.5vw;
    width: 12vw;
    &:hover {
            transform: scale(1.05);
            transition: all 0.31s ease;
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.346);
        }
    a {
        font-size: 1vw;
        font-weight: 700;
        text-decoration: none;
        color: #fff; 
        padding: 3rem 3rem;
        width: 100%; 
    }
`;

const Contact = styled.li`
    display: flex;
    margin: 0 1rem;
    background-color: #00F5D4;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;
    transition: all 0.3s ease;
    height: 3.5vw;
    width: 10vw;
    &:hover {
            transform: scale(1.05);
            transition: all 0.31s ease;
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.346);
        }
    a {
        font-size: 1vw;
        font-weight: 700;
        text-decoration: none;
        color: #fff;
        padding: 3rem 3rem;
        width: 100%;
    }
`;

const NavBar = () => {

    const ul = useRef(null);
    useEffect(() => {
        gsap.fromTo(ul.current, { y: -200 }, { y: 0, duration: 0.7 });
    }, []);
    
    return (
        <StyledNav  >
            <ul ref={ul}>
                <StyledLi>
                    <Link to="/">Accueil</Link>
                </StyledLi>
                <StyledLi>
                    <Link to="/Projet">Projet</Link>
                </StyledLi>
                <StyledLi>
                    <Link to="/Offre">Offre</Link>
                </StyledLi>
                <StyledLi>
                    <Link to="/entreprise">A-TechPro</Link>
                </StyledLi>
                <Contact>
                    <Link to="/contact">Contact</Link>
                </Contact>
            </ul>
        </StyledNav>
    );
}

export default NavBar;