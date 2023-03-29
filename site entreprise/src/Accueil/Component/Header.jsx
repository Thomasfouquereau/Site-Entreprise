import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { gsap } from "gsap";

const Headerdiv = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    margin-top: 200px;
    font-family: 'Anybody', cursive;
    h1 {
        font-size: 5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        overflow: hidden;
    }
    p { 
        font-size: 2.5rem;
        margin-top:0 ;
        margin-bottom: 1.5rem;
    }
    button {
        margin-top:  0.5rem;
        padding: 0.9rem 3rem;
        border: none;
        border-radius: 15px;
        background-color: #FEE440;
        color: #121212;
        font-size: 1.3rem;
        font-weight: 700;
        transition: all 0.3s ease;
        box
        &:hover {
            background-color: #00F5D4;
        }
    }
`

export default function Header() {
    const [title, setTitle] = useState('Site entreprise');
    const [description, setDescription] = useState('Site entreprise');
    const h1 = useRef(null);
    const p = useRef(null);

    useEffect(() => {
        const arrayTitle = ['Votre site vitrine', 'Site entreprise', 'Site entreprise'];
        const arrayDescription = ['Sur mesure pour professionnel ou particulier', 'Sur mesure pour professionnel ou particulier', 'Site entreprise'];
        let index = 0;
        const interval = setInterval(() => {
            setTitle(arrayTitle[index]);
            setDescription(arrayDescription[index]);
            index = index === arrayTitle.length - 1 ? 0 : index + 1;
            gsap.fromTo(h1.current, { x: -150, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
            gsap.fromTo(p.current, { x: 150, opacity: 0 }, { x: 0, opacity: 1, duration: 1 },);
            gsap.fromTo(h1.current, { x: 0, opacity: 1 }, { x: 150, opacity: 0, duration: 1, delay: 4 });
            gsap.fromTo(p.current, { x: 0, opacity: 1 }, { x: -150, opacity: 0, duration: 1, delay: 4 });
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const button = useRef(null);

    useEffect(() => {
        gsap.fromTo(h1.current, { opacity: 0 }, { opacity: 1, duration: 1 });
        gsap.fromTo(p.current, { x: -1000, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
        gsap.fromTo(button.current, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 });
    }, []);

    return (
        <Headerdiv className="header">
            <div className="header__Text">
                <h1 ref={h1} className="header__Text__Title">{title}</h1>
                <p ref={p} className="header__Text__Description">{description}</p>
            </div>
            <Link to="/">
                <button ref={button}>
                    En savoir plus sur les site
                </button>
            </Link>
        </Headerdiv>
    );

}