import React, { useState, useEffect, useRef } from 'react';
import { gsap } from "gsap";
import styled from 'styled-components';
import sun from '../assets/-brightness_1.svg';
import moon from '../assets/moon.svg';

const StyledButton = styled.button`
    position: absolute;
    top: 10%;
    right: 10px;
    width: 70px;
    height: 170px;
    border-radius: 20px;
    border: none;
    background-color: #FEE440;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.185);
    transition: all 0.3s ease;
    overflow: hidden;
    z-index: 1000;
    &:hover {
        transition: all 0.31s ease;
        box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.346);
    }
`;

export default function Light_Night_Mode() {
    const [theme, setTheme] = useState('light');
    const colorTheme = theme === 'light' ? 'dark' : 'light';
    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme && setTheme(localTheme);
    }, []);

    const bgColor = theme === 'light' ? '#FFFFFF' : '#121212';
    const Color = theme === 'light' ? '#121212' : '#FFFFFF';
    document.body.style.transition = 'background-color 0.5s ease-in-out';
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = Color;

    const lnm = useRef(null);
    const img = useRef(null);
    const img1 = useRef(null);

    useEffect(() => {
        gsap.fromTo(lnm.current, { x: 500 }, { x: 0, duration: 0.5 });
    }, [])

    useEffect(() => {
        if (theme === 'light') {
            gsap.fromTo(img.current, { y: 12, opacity: 1, }, { y: 100, opacity: 0, duration: 0.3 });
            gsap.fromTo(img1.current, { y: -100, opacity: 0 }, { y: -20, opacity: 1, duration: 0.7 });
            gsap.fromTo(lnm.current, { backgroundColor: "#FEE440" }, { backgroundColor: "#00F5D4", duration: 0.3 });
        } else {
            gsap.fromTo(img.current, { y: 100, opacity: 0 }, { y: 15, opacity: 1, duration: 0.7 });
            gsap.fromTo(img1.current, { y: -0, opacity: 1 }, { y: -100, opacity: 0, duration: 0.3 });
            gsap.fromTo(lnm.current, { backgroundColor: "#00F5D4" }, { backgroundColor: "#FEE440", duration: 0.3 });
        }
    }, [theme])

    return (
        <div className="light-night-mode">
            <StyledButton
                className="btn"
                ref={lnm}
                onClick={() => {
                    setTheme(colorTheme);
                    window.localStorage.setItem('theme', colorTheme);
                    console.log(colorTheme);
                }}>
                <img ref={img} src={sun} alt="light-night-mode" />
                <img ref={img1} src={moon} alt="light-night-mode" />
            </StyledButton>
        </div>
    );
}