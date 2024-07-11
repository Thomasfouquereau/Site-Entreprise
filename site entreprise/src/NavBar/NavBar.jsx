import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { gsap } from "gsap";
import MobileMenuIcon from '../assets/icon-mobile-menu-arrow.svg';
import MobileMenuClose from '../assets/icon-mobile-menu-cross.svg';
import Logo from '../assets/logo-42dev-no-bg-var1.svg';
import LogoBg from '../assets/logo-42dev.svg';

const theme = {
    primary: "#0f284e",
    secondary: "#00ff73",
    border: "#e0e0e038",
    shadowPrimary: "#00ff7383",
}

const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5vh;
    margin-top: 50px;
    font-family: 'Poppins', sans-serif;
    @media (max-width: 768px) {
            margin-top: -5vh;
        }

`;

const Ul = styled.ul`
    display: flex;
    list-style: none;
    @media (max-width: 768px) {
            display: none;
        }
`;

const StyledLi = styled.li`
    display: flex;
    margin: 0 1rem;
    background-color: ${theme.secondary};
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
            box-shadow: -20px 13px 16vw 17px ${theme.shadowPrimary};
        }
    a {
        font-size: 1vw;
        font-weight: 700;
        text-decoration: none;
        color: #fff; 
        padding: 3rem 3rem;
        width: 100%; 
        color: ${theme.primary};
        will-change: transform;
    }
`;

const Logo42dev = styled.img`
    width: 8vw;
    height: 2.5vw;
    margin-top: 0.4vw;
    @media (max-width: 768px) {
        width: 80%;
        height: 100%;
        margin-top: 0.4vw;
    }
`;

const Contact = styled.li`
    display: flex;
    margin: 0 1rem;
    background: rgb(2,0,36);
    background: linear-gradient(163deg, #020024 0%, rgba(14,40,80,1) 35%, #00ff73 100%);
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
            box-shadow: 3vw 1vw 7vw 0px ${theme.shadowPrimary};
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

const MobileUl = styled.ul`
    display: none;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    bottom: 0;
    z-index: 1000;
    background-color: #2d3142c3;
    @media (max-width: 768px) {
        display: none;
    }
`;

const HeaderNav = styled.div`
    button{
        display: none;
    }
    @media (max-width: 768px) {
        display: block;
        width: 100%;
        height: 15vh;
        background: rgb(2,0,36);
        background: linear-gradient(163deg, #020024 0%, rgba(14,40,80,1) 35%, #00ff73 100%);
        border-radius: 30px ;
        position: absolute;
        bottom: -60px;
        z-index: 9000;
        rotate: 180deg;
        position: fixed;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.346);
        button{
            display: block;
            width: 85vw;
            height: 14vh;
            background-color: ${theme.primary};
            border: none;
            border-radius: 0px 0px 30px 30px;
            outline: none;
            cursor: pointer;
            padding: 0;
            margin-left: 50%;
            transform: translateX(-50%);
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.346);
            img {
                width: 14vw;
                margin-bottom: -7vh;
            }
        } span {
            position: absolute;
            bottom: 4vh;
            left: 50%;
            transform: translateX(50%);
            font-size: 3vw;
            background: -webkit-linear-gradient(#f0f0f0, #00ff73);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 700;
            rotate: 180deg;
            margin: 0;
            padding: 0;
        }
    } @media (max-width: 470px) {
        button{
        img{
                width: 24vw;
                height: 7vh;
                margin-top: 3vh;
            }
        }
        span{
            font-size: 5vw;
        }
    }
`;

const Parent = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    border-radius: 20px;
    height: 60vh;
    width: 65vw;
    margin-left: 50%;
    transform: translateX(-50%);
    border: 4px solid ${theme.secondary};
    padding: 10px;
    background-color: ${theme.primary};
    margin-top: 20vh;
    box-shadow: 0px 10px 19px 7px rgba(0, 0, 0, 0.346);
    @media (max-width: 470px) {
        height: 55vh;
        width: 85.5vw;
        margin-top: 28vh;
    }
    
`;

const Div1 = styled.div`
    grid-area: 1 / 1 / 2 / 3;
    background: rgb(2,0,36);
    background: linear-gradient(163deg, #020024 0%, rgba(14,40,80,1) 35%, #00ff73 100%);
    border-radius: 15px;
`;

const Div2 = styled.div`
    grid-area: 1 / 3 / 3 / 7;
    background-color: white;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    a {
        font-size: 5vw;
        font-weight: 700;
        text-decoration: none;
        color: #000000;
        width: 100%;
    }
`;

const Div3 = styled.div`
    grid-area: 2 / 1 / 4 / 3;
    background-color: white;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    a {
        font-size: 5vw;
        font-weight: 700;
        text-decoration: none;
        color: #000000;
        width: 100%;
    }
`;

const Div4 = styled.div`
    grid-area: 3 / 3 / 4 / 7;
    background-color: white;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    a {
        font-size: 5vw;
        font-weight: 700;
        text-decoration: none;
        color: #000000;
        width: 100%;
    }
`;

const Div5 = styled.div`
    grid-area: 4 / 1 / 5 / 7;
    background-color: white;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    a {
        font-size: 5vw;
        font-weight: 700;
        text-decoration: none;
        color: #000000;
        width: 100%;
    }
`;

const Div6 = styled.div`
    grid-area: 5 / 4 / 7 / 7;
    border-radius: 15px;
    button{
        width: 100%;
        height: 100%;
        background-color: red;
        border-radius: 15px;
        border: none;
        outline: none;
        cursor: pointer;
        img {
            width: 15vw;
        }
    }
`;

const Div7 = styled.div`
    grid-area: 5 / 1 / 7 / 4;
    background: rgb(2,0,36);
    background: linear-gradient(163deg, #020024 0%, rgba(14,40,80,1) 35%, #00ff73 100%);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    a {
        font-size: 5vw;
        font-weight: 700;
        text-decoration: none;
        color: #000000;
        width: 100%;
        span{
            color:#00F5D4
        }
    }
`;

const NavBar = () => {

    const ul = useRef(null);

    useEffect(() => {
        gsap.fromTo(ul.current, { y: -200 }, { y: 0, duration: 0.7 });
    }, []);

    const [close, setClose] = useState(false);
    const mobileNav = document.querySelector('.mobileNav');
    const buttonImg = document.querySelector('.buttonImg');
    const buttonText = document.querySelector('.buttonText');
    const handleClick = () => {
        setClose(!close);
        if (close) {
            gsap.fromTo(mobileNav, { y: 900 }, { y: 0, duration: 0.7, display: 'block', borderRadius: '0px', background: '#0a1c36d3' });
            gsap.fromTo(buttonImg, { rotate: 0, opacity: 0, y: -200 }, { rotate: 180, duration: 0.6, opacity: 1, y: 0 });
            gsap.fromTo(buttonText, { opacity: 0, y: -200 }, { opacity: 1, duration: 0.6, innerHTML: 'Fermer', y: 0 });
        } else {
            gsap.fromTo(mobileNav, { y: 0 }, { y: 900, duration: 0.7, display: 'none', borderRadius: '70px', background: 'none' });
            gsap.fromTo(buttonImg, { rotate: -180, opacity: 0, y: -200 }, { rotate: 0, duration: 0.6, opacity: 1, y: 0 });
            gsap.fromTo(buttonText, { opacity: 0, y: -200, rotate: 180 }, { opacity: 1, duration: 0.6, innerHTML: 'Menu', y: 0 });
        }
    }

    useEffect(() => {
        handleClick();
    }, []);


    return (
        <StyledNav  >
            <Ul ref={ul}>
                <StyledLi>
                    <Link to="/">Accueil</Link>
                </StyledLi>
                <StyledLi>
                    <Link to="/Offre">Offre</Link>
                </StyledLi>
                <StyledLi>
                    <Link to="/Projet">Projet</Link>
                </StyledLi>
                <StyledLi>
                    <Link to="/entreprise"><Logo42dev src={Logo} /></Link>
                </StyledLi>
                <Contact>
                    <Link to="/contact">Contact</Link>
                </Contact>
            </Ul>
            <HeaderNav>
                <button onClick={handleClick}>
                    <img className='buttonImg' src={MobileMenuIcon} />
                    <span className='buttonText'>Menu</span>
                </button>
            </HeaderNav>
            <MobileUl className='mobileNav'>
                <Parent>
                    <Div1><img src="" alt="" /> </Div1>
                    <Div2><Link to="/contact" onClick={handleClick}>Contact</Link></Div2>
                    <Div3><Link to="/Offre" onClick={handleClick}>Offre</Link></Div3>
                    <Div4><Link to="/Projet" onClick={handleClick}>Projet</Link></Div4>
                    <Div5><Link to="/" onClick={handleClick}>Accueil</Link></Div5>
                    <Div6><button onClick={handleClick} ><img src={MobileMenuClose} alt="" /></button></Div6>
                    <Div7><Link to="/entreprise" onClick={handleClick}><Logo42dev src={Logo} /></Link></Div7>
                </Parent>
            </MobileUl>
        </StyledNav>
    );
}

export default NavBar;