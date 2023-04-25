import React from "react";
import styled from "styled-components";

import icon_fichier from "../assets/Icon-fichier.svg";
import icon_envoyer from "../assets/Icon-envoyer.svg";
import icon_telephone from "../assets/Icon-telephone.svg";
import icon_mail from "../assets/Icon-mail.svg";
import icon_arrow from "../assets/Icon-arrow.svg";

const Section__Contact = styled.section`
    margin-top: 200px;
    margin-bottom: 300px;
    margin-left: 20px;
    margin-right: 20px;
    font-family: 'Poppins', sans-serif;
`

const Contact__Container__Info = styled.div`
    display: flex;
    width: 100%;
    height: 20vw;
    margin-bottom: 5px;
`    
const Contact__Container__Info__button = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    button{
        height: 50%;
        border: none;
        background-color: #EF8354;
        border-radius: 50px;
        cursor: pointer;
        font-size: 1vw;
        font-weight: 600;
        color: #EF8354;
        margin-top: 5px;
        img{
            width: 3vw;
            height: 3vw;
        }
    }
`
const Contact__Container__Info__div = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    background-color: #4F5D75;
    padding: 50px;
    border-radius: 50px;
    position: relative;
    margin-left: 5px;
    h1{
        font-size: 2vw;
        font-weight: 600;
        color: #EF8354;
        margin-top: 0px;
    }
    p{
        font-size: 0.9vw;
        font-weight: 600;
        color: #BFC0C0;
        margin-top: 0px;
    }
    img{
        position: absolute;
        width: 2vw;
        height: 2vw;
        right: 40px;
        bottom: 40px;
        rotate: 50deg;
    }
` 

const Contact__Container__Form__Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(3, 1fr) 4fr;
    grid-column-gap: 5px;
    grid-row-gap: 5px;
`
const Contact__Container__Form__Wrapper__div1 = styled.div`
    grid-area: 1 / 1 / 2 / 6;
    height: 3vw;
    border-radius: 50px;
    input{
        width: 100%;
        height: 100%;
        border: none;
        background-color: #fff;
        font-size: 1vw;
        font-weight: 600;
        padding-left: 20px;
        border-radius: 50px;
        &::placeholder{
            color: #EF8354;
            font-size: 1vw;
            font-weight: 600;
        }
    }
`
const Contact__Container__Form__Wrapper__div2 = styled.div`
    grid-area: 1 / 6 / 2 / 8;
    border-radius: 50px;
    input{
        width: 100%;
        height: 100%;
        border: none;
        background-color: #fff;
        font-size: 1vw;
        font-weight: 600;
        padding-left: 20px;
        border-radius: 50px;
        &::placeholder{
            color: #EF8354;
            font-size: 1vw;
            font-weight: 600;
        }
    }
`
const Contact__Container__Form__Wrapper__div3 = styled.div`
    grid-area: 2 / 1 / 3 / 5;
    border-radius: 50px;
    input{
        width: 100%;
        height: 100%;
        border: none;
        background-color: #fff;
        font-size: 1vw;
        font-weight: 600;
        padding-left: 20px;
        border-radius: 50px;
        &::placeholder{
            color: #EF8354;
            font-size: 1vw;
            font-weight: 600;
        }
    }
`
const Contact__Container__Form__Wrapper__div4 = styled.div`
    grid-area: 2 / 5 / 3 / 8;
    border-radius: 50px;
    input{
        width: 100%;
        height: 100%;
        border: none;
        background-color: #fff;
        font-size: 1vw;
        font-weight: 600;
        padding-left: 20px;
        border-radius: 50px;
        &::placeholder{
            color: #EF8354;
            font-size: 1vw;
            font-weight: 600;
        }
    }
`
const Contact__Container__Form__Wrapper__div5 = styled.div`
    grid-area: 3 / 1 / 4 / 3;
    border-radius: 50px;
    background-color: #EF8354;
`
const Contact__Container__Form__div6 = styled.input`
    width: 100%;
    height: 100%;
    cursor: pointer;
    &::-webkit-file-upload-button{
        display: none;
    }
    &::before{
        content: 'Fichier';
        display: flex;
        align-items: center;
        padding-left: 20px;
        width: 100%;
        height: 100%;
        color: #fff;
        font-size: 1vw;
        font-weight: 600;
    } 
`
const Contact__Container__Form__Wrapper__div6 = styled.div`
    grid-area: 3 / 3 / 4 / 8;
    border-radius: 50px;
    input{
        width: 100%;
        height: 100%;
        border: none;
        background-color: #fff;
        font-size: 1vw;
        font-weight: 600;
        padding-left: 20px; 
        border-radius: 50px;
        &::placeholder{
            color: #EF8354;
            font-size: 1vw;
            font-weight: 600;
        }
    }
`
const Contact__Container__Form__Wrapper__div7 = styled.div`
    grid-area: 4 / 1 / 5 / 6;
    border-radius: 50px;
    input{
        width: 100%;
        height: 100%;
        border: none;
        background-color: #fff;
        font-size: 1vw;
        font-weight: 600;
        padding-left: 20px;
        border-radius: 50px;
        &::placeholder{
            color: #EF8354;
            font-size: 1vw;
            font-weight: 600;
        }
    }
`
const Contact__Container__Form__Wrapper__div8 = styled.div`
    grid-area: 4 / 6 / 5 / 8;
    border-radius: 50px;
    button{
        cursor: pointer;
        width: 100%;
        height: 100%;
        border: none;
        background-color: #EF8354;
        font-size: 1vw;
        font-weight: 600;
        padding-left: 20px;
        border-radius: 50px;
        color: #fff;
    }
`

export default function Contact() {

    return (
        <Section__Contact>
            <Contact__Container__Info>
                <Contact__Container__Info__button>
                    <button><img src={icon_telephone} alt="icon telephone" /></button>
                    <button><img src={icon_mail} alt="icon mail" /></button>
                </Contact__Container__Info__button>
                <Contact__Container__Info__div>
                    <h1>CONTACT</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
                        nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl
                        sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet
                        nisl, eget aliquam nisl nisl sit amet lorem.
                    </p>
                    <img src={icon_arrow} alt="icon arrow" />
                </Contact__Container__Info__div>
            </Contact__Container__Info>
            <Contact__Container__Form__Wrapper>
                <Contact__Container__Form__Wrapper__div1>
                    <input type="text" placeholder="Société" />
                </Contact__Container__Form__Wrapper__div1>
                <Contact__Container__Form__Wrapper__div2>
                    <input type="tel" placeholder="Téléphone" />
                </Contact__Container__Form__Wrapper__div2>
                <Contact__Container__Form__Wrapper__div3>
                    <input type="text" placeholder="Nom" />
                </Contact__Container__Form__Wrapper__div3>
                <Contact__Container__Form__Wrapper__div4>
                    <input type="text" placeholder="Prénom" />
                </Contact__Container__Form__Wrapper__div4>
                <Contact__Container__Form__Wrapper__div5>
                    <Contact__Container__Form__div6 type="file" placeholder="file" />
                </Contact__Container__Form__Wrapper__div5>
                <Contact__Container__Form__Wrapper__div6>
                    <input type="email" placeholder="Email" />
                </Contact__Container__Form__Wrapper__div6>
                <Contact__Container__Form__Wrapper__div7>
                    <input type="text" placeholder="Message" />
                </Contact__Container__Form__Wrapper__div7>
                <Contact__Container__Form__Wrapper__div8>
                    <button><img src={icon_envoyer} alt="icon envoyer" /></button>
                </Contact__Container__Form__Wrapper__div8>
            </Contact__Container__Form__Wrapper>
        </Section__Contact>
    )
}