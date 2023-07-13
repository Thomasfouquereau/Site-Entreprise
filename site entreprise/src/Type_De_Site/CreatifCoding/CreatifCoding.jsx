import React, { useState, useEffect, useRef } from 'react'
import styled from "styled-components";
import { gsap } from "gsap";

import icon_evolutif from "../../assets/Icon-evolutif.svg";
import icon_rapide from "../../assets/Icon-rapide.svg";
import icon_responsive from "../../assets/Icon-responsive.svg";
import icon_referencement from "../../assets/Icon-referencement.svg";
import icon_design from "../../assets/Icon-design-2.svg";

const Types_Wrapper = styled.div`
    display: grid;
    grid-template-columns: 2.5fr repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    height: 13vw;
    font-family: 'Anybody', cursive;
`
const Types_Wrapper__div1 = styled.div`
    grid-area: 1 / 1 / 3 / 2;
    background-color: #EF8354;
    border-radius: 3vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3{
        font-size: 1vw;
        font-weight: 600;
        margin: 0;
        padding-top: 10px;
        color : #2D3142;
    }
    img{
        width: 4vw;
        height: 4vw;
    }
`  
const Types_Wrapper__div2 = styled.div`
    grid-area: 1 / 2 / 2 / 4;
    background-color: #EF8354;
    border-radius: 3vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3{
        font-size: 1vw;
        font-weight: 600;
        margin: 0;
        padding-top: 10px;
        color : #2D3142;
    }
    img{
        width: 2.3vw;
        height: 2.3vw;
    }
`
const Types_Wrapper__div3 = styled.div`
    grid-area: 1 / 4 / 2 / 7;
    background-color: #EF8354;
    border-radius: 3vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3{
        font-size: 1vw;
        font-weight: 600;
        margin: 0;
        padding-top: 10px;
        color : #2D3142;
    }
    img{
        width: 2.3vw;
        height: 2.3vw;;
    }
`
const Types_Wrapper__div4 = styled.div`
    grid-area: 2 / 2 / 3 / 5;
    background-color: #EF8354;
    border-radius: 3vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3{
        font-size: 1vw;
        font-weight: 600;
        margin: 0;
        padding-top: 10px;
        color : #2D3142;
    }
    img{
        width: 2.2vw;
        height: 2.2vw;
    }
`
const Types_Wrapper__div5 = styled.div`
    grid-area: 2 / 5 / 3 / 7;
    background-color: #EF8354;
    border-radius: 3vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3{
        font-size: 1vw;
        font-weight: 600;
        margin: 0;
        padding-top: 10px;
        color : #2D3142;
    }
    img{
        width: 2.3vw;
        height: 2.3vw;
    }
`

export default function Site_Vitrine() {

    const [hover, setHover] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);
    const [hover4, setHover4] = useState(false);
    const [hover5, setHover5] = useState(false);

    const icon = useRef(null);
    const icon2 = useRef(null);
    const icon3 = useRef(null);
    const icon4 = useRef(null);
    const icon5 = useRef(null);

    const handleHover = () => {
        setHover(!hover);
        if (hover) {
            gsap.to(icon.current, {
                skewX: 0,
                skewY: 0,
                duration: 0.8,
                ease: "power3.out",
            })
        } else {
            gsap.to(icon.current, {
                skewX: 8,
                skewY: 3,
                duration: 0.8,
                ease: "power3.out",
            })
        }
    }
    const handleHover2 = () => {
        setHover2(!hover2);
        if (hover2) {
            gsap.to(icon2.current, {
                scaleY: 1,
                scaleX: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
            })
        } else {
            gsap.to(icon2.current, {
                scaleY: 1.3,
                scaleX: 1.1,
                y: -5,
                duration: 0.8,
                ease: "power3.out",
            })
        }
    }
    const handleHover3 = () => {
        setHover3(!hover3);
        if (hover3) {
            gsap.to(icon3.current, {
                rotate: 0,
                duration: 0.8,
                ease: "power3.out",
            })
        } else {
            gsap.to(icon3.current, {
                rotate: 90,
                duration: 0.8,
                ease: "power3.out",
            })
        }
    }
    const handleHover4 = () => {
        setHover4(!hover4);
        if (hover4) {
            gsap.to(icon4.current, {
                rotate: 0,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
            })
        } else {
            gsap.to(icon4.current, {
                rotate: 36,
                y: -5,
                duration: 0.8,
                ease: "power3.out",
            })
        }
    }
    const handleHover5 = () => {
        setHover5(!hover5);
        if (hover5) {
            gsap.to(icon5.current, {
                rotate: -360,
                duration: 1,
                ease: "power3.out",
            })
        } else {
            gsap.to(icon5.current, {
                rotate: 360,
                duration: 1,
                ease: "power3.out",
            })
        }
    }

    return (
        <section>
            <Types_Wrapper>
                <Types_Wrapper__div1 onMouseEnter={handleHover} onMouseLeave={handleHover} >
                    <img src={icon_design} alt="Icone Design" ref={icon} />
                    <h3>Design</h3>
                </Types_Wrapper__div1>
                <Types_Wrapper__div2 onMouseEnter={handleHover2} onMouseLeave={handleHover2}>
                    <img src={icon_rapide} alt="Icone Rapide" ref={icon2} />
                    <h3>Rapide</h3>
                </Types_Wrapper__div2>
                <Types_Wrapper__div3 onMouseEnter={handleHover3} onMouseLeave={handleHover3}>
                    <img src={icon_responsive} alt="Icone Responsive" ref={icon3} />
                    <h3>Responsive</h3>
                </Types_Wrapper__div3>
                <Types_Wrapper__div4 onMouseEnter={handleHover4} onMouseLeave={handleHover4}>
                    <img ref={icon4} src={icon_referencement} alt="Icone Referencement" />
                    <h3>Référencement</h3>
                </Types_Wrapper__div4>
                <Types_Wrapper__div5 onMouseEnter={handleHover5} onMouseLeave={handleHover5}>
                <img ref={icon5} src={icon_evolutif} alt="Icone Evolutif" />
                    <h3>Evolutif</h3>
                </Types_Wrapper__div5>
            </Types_Wrapper>
        </section>
    )
}