import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { gsap } from "gsap";
import MobileMenuIcon from '../assets/icon-mobile-menu-arrow.svg';
import MobileMenuClose from '../assets/icon-mobile-menu-cross.svg';

const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5vh;
    margin-top: 50px;
    font-family: 'Poppins', sans-serif;
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
        background-color: #2D3142;
        border-radius: 40px ;
        border: 47px solid #EF8354;
        position: absolute;
        bottom: -60px;
        z-index: 9000;
        rotate: 180deg;
        position: fixed;

        button{
            display: block;
            width: 85vw;
            height: 8.5vh;
            background-color: #2D3142;
            border: none;
            border-radius: 0px 0px 40px 40px;
            outline: none;
            cursor: pointer;
            padding: 0;
            margin-left: 50%;
            transform: translateX(-50%);
            img {
                width: 23vw;
                height: 6vh;
                margin-top: 3vh;
            }
        } span {
            position: absolute;
            bottom: 3.7vh;
            left: 50%;
            transform: translateX(50%);
            font-size: 5vw;
            color: #EF8354;
            font-weight: 700;
            font-style: italic; 
            rotate: 180deg;
            margin: 0;
            padding: 0;
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
    height: 55vh;
    width: 85.5vw;
    margin-left: 50%;
    transform: translateX(-50%);
    border: 4px solid #EF8354;
    padding: 10px;
    background-color: #2D3142;
    margin-top: 23vh;
`;

const Div1 = styled.div`
    grid-area: 1 / 1 / 2 / 3;
    background-color: white;
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
    console.log(close);
    const mobileNav = document.querySelector('.mobileNav');
    const buttonImg = document.querySelector('.buttonImg');
    const buttonText = document.querySelector('.buttonText');
    const handleClick = () => {
        setClose(!close);
        if (close) {
            gsap.fromTo(mobileNav, { y: 900 }, { y: 0, duration: 0.7, display: 'block', borderRadius: '0px', background: '#2D3142' });
            gsap.fromTo(buttonImg, { rotate: 0, opacity: 0, y: -200 }, { rotate: 180, duration: 0.6, opacity: 1, y: 0 });
            gsap.fromTo(buttonText, { opacity: 0, y: -200 }, { opacity: 1, duration: 0.6, innerHTML: 'Fermer', y: 0 });
        } else {
            gsap.fromTo(mobileNav, { y: 0 }, { y: 900, duration: 0.7, display: 'none', borderRadius: '70px', background: 'none' });
            gsap.fromTo(buttonImg, { rotate: -180, opacity: 0, y: -200 }, { rotate: 0, duration: 0.6, opacity: 1, y: 0 });
            gsap.fromTo(buttonText, { opacity: 0, y: -200 }, { opacity: 1, duration: 0.6, innerHTML: 'menu', y: 0 });
        }
    }

    return (
        <StyledNav  >
            <Ul ref={ul}>
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
            </Ul>
            <HeaderNav>
                <button onClick={handleClick}>
                    <img className='buttonImg' src={MobileMenuIcon} />
                    <span className='buttonText'>menu</span>
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
                    <Div7><Link to="/entreprise" onClick={handleClick}><span>A</span>-TechPro</Link></Div7>
                </Parent>
            </MobileUl>
        </StyledNav>
    );
}

export default NavBar;