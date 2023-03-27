import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Header from "./Component/Header";
import Services from "./Component/Services";
import Etapes from "./Component/Etapes";

// const Cursor = styled.div`
//     width: 40px;
//     height: 40px;
//     border-radius: 50%;
//     border: 3px solid #00F5D4;
//     position: absolute;
//     top: 0;
//     left: 0;
//     transform: translate(-50%, -50%);
//     z-index: 9000;
//     pointer-events: none;
//     box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.185);
//     &::before {
//         content: '';
//         position: absolute;
//         width: 100%;
//         height: 100%;
//         border-radius: 50%;
//         background-color: #FEE440;
//         opacity: 0.5;
//         transform: scale(0.7);
//     }
// `;

export default function Accueil() {

    // const cursor = useRef(null);

    // useEffect(() => {
    //   cursor.current = document.querySelector('.cursor');

    //   const onMouseMove = (e) => {
    //     const { clientX, clientY } = e;
    //     if (cursor.current) {
    //       cursor.current.style.left = `${clientX}px`;
    //       cursor.current.style.top = `${clientY}px`;
    //     }
    //   }
    
    //   window.addEventListener('mousemove', onMouseMove);
    
    //   return () => {
    //     window.removeEventListener('mousemove', onMouseMove);
    //   }
    // }, []);
    
    return (
        <div className="accueil">
            {/* <Cursor ref={cursor} className="cursor" delay={0.9} ></Cursor> */}
            <Header />
            <Services />
            <Etapes />
        </div>
    );
}