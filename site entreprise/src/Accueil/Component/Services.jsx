import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Services__section = styled.section`
    margin-top: 300px;
    margin-bottom: 300px;
`

const Services__Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;
    font-family: 'Anybody', cursive;
    h1 {
        font-size: 3vw;
        font-weight: 700;
        margin-bottom: 10px;
        margin-top: 0;
    }
    p {
        font-size: 1vw;
        font-weight: 400;
        margin: 0;
        width: 70%;
        text-align: center;
        font-family: 'Poppins', sans-serif;
    }
`

const Services__wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    overflow: hidden;
    font-family: 'Poppins', sans-serif;
`

const Services__wrapper__item1 = styled.div` 
     grid-area: 1 / 1 / 2 / 3; 
     background-color:#EF8354;
     border-radius: 0px 50px 50px 0px;
     height: 15vw;
     display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding-left: 8%;
        padding-right: 8%;
        h2 {
            font-size: 2vw;
            font-weight: 700;

            margin-bottom: 30px;
            margin-top: 0;
        }
        p {
            font-size: 0.8vw;
            font-weight: 400;

            margin: 0;
        }
`

const Services__wrapper__item2 = styled.div`
     grid-area: 1 / 3 / 2 / 5; 
     background-color:#4F5D75;
     border-radius: 50px 0px 0px 50px;
     height: 15vw;;
`

const Services__wrapper__item3 = styled.div`
     grid-area: 2 / 1 / 3 / 2;
     background-color:#4F5D75;
     border-radius: 0px 50px 50px 0px;
     height: 15vw;
`

const Services__wrapper__item4 = styled.div`
     grid-area: 2 / 2 / 3 / 4; 
     background-color:#EF8354;
     border-radius: 2vw;
     height: 15vw;
     display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding-left: 8%;
        padding-right: 8%;
        h2 {
            font-size: 2vw;
            font-weight: 700;

            margin-bottom: 30px;
            margin-top: 0;
        }
        p {
            font-size: 0.8vw;
            font-weight: 400;

            margin: 0;
        }
`

const Services__wrapper__item5 = styled.div`
     grid-area: 2 / 4 / 3 / 5;
     background-color:#4F5D75;
     border-radius: 50px 0px 0px 50px;
     height: 15vw;
`

const Services__wrapper__item6 = styled.div`
     grid-area: 3 / 1 / 4 / 3;
     background-color:#4F5D75;
     border-radius: 0px 50px 50px 0px;
     height: 15vw;
`

const Services__wrapper__item7 = styled.div`
     grid-area: 3 / 3 / 4 / 5; 
     background-color:#EF8354;
     border-radius: 50px 0px 0px 50px;
     height: 15vw;
     display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding-left: 8%;
        padding-right: 8%;
        h2 {
            font-size: 2vw;
            font-weight: 700;
  
            margin-bottom: 30px;
            margin-top: 0;
        }
        p {
            font-size: 0.8vw;
            font-weight: 400;

            margin: 0;
        }
`

export default function Services() {

    gsap.registerPlugin(ScrollTrigger);
    const item2 = useRef(null);
    const item3 = useRef(null);
    const item5 = useRef(null);
    const item6 = useRef(null);
    
    useEffect(() => {
        gsap.fromTo(item2.current, {
            x: 1000,
        }, {
            scrollTrigger: {
                trigger: item2.current,
                start: "top bottom",
                end: "top top",
                scrub: true,
            },
            x: 0,
            duration: 1,
        });
        gsap.fromTo(item3.current, {
            x: -500,
        }, {
            scrollTrigger: {
                trigger: item3.current,
                start: "top bottom",
                end: "top top",
                scrub: true,
            },
            x: 0,
            duration: 1,
        });
        gsap.fromTo(item5.current, {
            x: 500,
        }, {
            scrollTrigger: {
                trigger: item5.current,
                start: "top bottom",
                end: "+=1000",
                scrub: true,
            },
            x: 0,
            duration: 1,
        });
        gsap.fromTo(item6.current, {
            x: -1000,
        }, {
            scrollTrigger: {
                trigger: item6.current,
                start: "top bottom",
                end: "top top",
                scrub: true,
            },
            x: 0,
            duration: 1,
        });
    }, []);

    return (
        <Services__section>
            <Services__Info>
                <h1>Services</h1>
                <p>
                    Que vous voulier refaire ou cree un site-web, nous vous 
                    accompagne dans votre projet. Profitez de notre expertise
                </p>
            </Services__Info>
            <Services__wrapper>
                <Services__wrapper__item1>
                    <h2>Lorem ipsum </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras aliquam,Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Cras aliquam,
                    </p>
                </Services__wrapper__item1>
                <Services__wrapper__item2 ref={item2}></Services__wrapper__item2>
                <Services__wrapper__item3 ref={item3}></Services__wrapper__item3>
                <Services__wrapper__item4>
                    <h2>Lorem ipsum </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras aliquam,Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Cras aliquam,
                    </p>
                </Services__wrapper__item4>
                <Services__wrapper__item5 ref={item5}></Services__wrapper__item5>
                <Services__wrapper__item6 ref={item6}></Services__wrapper__item6>
                <Services__wrapper__item7>
                    <h2>Lorem ipsum </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras aliquam,Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Cras aliquam,
                    </p>
                </Services__wrapper__item7>
            </Services__wrapper>
        </Services__section>
    );
}