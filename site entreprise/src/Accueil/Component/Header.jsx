import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import { gsap } from "gsap";

import polygonHeader from '../../assets/polygon Header.svg';

const Headerdiv = styled.header`
    width: 100%;
    height: 75vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    font-family: 'Anybody', cursive;
    h1 {
        font-size: 3.5vw;
        font-weight: 700;
        margin-bottom: 1rem;
        overflow: hidden;
        margin-left: 10vw;
    }
    span{
        color: #EF8354;
    }
    p { 
        font-size: 1.7vw;
        margin-top:0 ;
        margin-bottom: 5rem;
        margin-left: 10vw;
        overflow: hidden;
    }
`
const HeaderFlex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    img{
        width: 15vw;
        margin-right: 10vw;
        rotate: 100deg;
    }
`

const FooterHeader = styled.div`
&::after {
    content: "";
    position: absolute;
    width: 40vw;
    height: 0.2vw;
    background-color: #fff;
    z-index: -1;
    border-radius:10px;
    left: 50%;
    transform: translateX(-50%);
    bottom: -6vw;
}
`

export default function Header() {

    const [description, setDescription] = useState('Site entreprise');
    const [typeSite, setTypeSite] = useState(' Site entreprise');
    const titre = useRef(null);
    const p = useRef(null);
    const img = useRef(null);

    useEffect(() => {
        const arrayTypeSite = [' Landing page', ' Site vitrine', ' Site e-commerce'];
        const arrayDescription = ['Landing page', 'Site vitrine', 'Site e-commerce'];
        let index = 0;

        const interval = setInterval(() => {
            setTypeSite(arrayTypeSite[index]);
            setDescription(arrayDescription[index]);
            index = index === arrayTypeSite.length - 1 ? 0 : index + 1;
            gsap.fromTo(titre.current, { y: -150, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
            gsap.fromTo(titre.current, { y: 0, opacity: 1 }, { y: 150, opacity: 0, duration: 1, delay: 4 });
            gsap.fromTo(p.current, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
            gsap.fromTo(p.current, { y: 0, opacity: 1 }, { y: 50, opacity: 0, duration: 1, delay: 4 });
            gsap.fromTo(img.current, { rotate:100, scale:1.15 }, { rotate:160, scale:1 , duration: 1 });
            gsap.fromTo(img.current, { rotate:160,scale:1 }, { rotate:100, scale:1.15 , duration: 1.3, delay: 4 });
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Headerdiv className="header">
            <HeaderFlex>
                <div className="header__Text">
                    <h1 className="header__Text__Title">Votre<span ref={titre}>{typeSite}</span></h1>
                    <p ref={p} className="header__Text__Description">{description}</p>
                </div>
                <img src={polygonHeader} ref={img} alt="polygon" className="header__Polygon" />
            </HeaderFlex>
            <FooterHeader ></FooterHeader>
        </Headerdiv>
    );

}