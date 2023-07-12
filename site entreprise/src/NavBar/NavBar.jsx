import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { gsap } from "gsap";

const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 30px;
    font-family: 'Poppins', sans-serif;
    ul {
        display: flex;
        list-style: none;
    }
`;

const StyledLi = styled.li`
    margin: 0 1rem;
    background-color: #EF8354;
    border-radius: 20px;
    padding: 0.7vw 0rem;
    width: 10vw;
    text-align: center;
    transition: all 0.3s ease;
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
    }
`;

const Contact = styled.li`
    margin: 0 1rem;
    background-color: #00F5D4;
    border-radius: 20px;
    padding: 0.7vw 0rem;
    width: 10vw;
    text-align: center;
    transition: all 0.3s ease;
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
