import React from "react";
import styled from "styled-components";

import icon_fichier from "../assets/Icon-fichier.svg";
import icon_envoyer from "../assets/Icon-envoyer.svg";
import icon_telephone from "../assets/Icon-telephone.svg";
import icon_mail from "../assets/Icon-mail.svg";
import icon_arrow from "../assets/Icon-arrow.svg";

const theme = {
    primary: "#0f284e",
    secondary: "#00ff73",
    border: "#e0e0e038",
    shadowPrimary: "#00ff7383",
}

const Section__Contact = styled.section`
    margin-top: 200px;
    margin-bottom: 300px;
    font-family: 'Poppins', sans-serif;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 470px) {
        margin-top: 50px;
    margin-bottom: 100px;
    }
`

const Contact__Container__Info = styled.div`
    display: flex;
    width: 100%;
    height: 20vw;
    margin-bottom: 5px;
    @media (max-width: 470px){
        flex-direction: column-reverse;
        height: 100%;
        width: 100%;
    }
`

const Contact__Container__Info__button = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    button{
        height: 50%;
        border: none;
        background-color: ${theme.secondary};
        border-radius: 3vw;
        cursor: pointer;
        font-size: 1vw;
        font-weight: 600;
        color: ${theme.secondary};
        margin-top: 5px;  
        transition: cubic-bezier(0.19, 1, 0.22, 1) 0.7s;
        img{
            width: 3vw;
            height: 3vw;
            transition: cubic-bezier(0.19, 1, 0.22, 1) 0.7s;
        }
        &:hover{
            transform: scale(0.95);
            box-shadow: 0vw 1vw 7vw 0px ${theme.shadowPrimary};
            img{
                transform: scale(1.2);
            }
        }
    }
    @media (max-width: 470px){
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 3vw;
        button{
            width: 49%;
            height: 25vw;
            img{
                width: 9vw;
                height: 9vw;
            }
        }
    }
`

const Contact__Container__Info__div = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    background-color: ${theme.primary};
    padding: 50px;
    border-radius: 3vw;
    position: relative;
    margin-left: 5px;
    h1{
        font-size: 2vw;
        font-weight: 600;
        color: ${theme.secondary};
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
    
    @media (max-width: 470px){
        width: 100%;
        padding: 30px;
        margin-bottom: 1vw;
        margin-left: 0;
        h1{
            font-size: 4vw;
        }
        p{
            font-size: 2vw;
        }
        img{
            display: none;
        }
    }
`

const Contact__Container__Form__Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(3, 1fr) 4fr;
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    @media (max-width: 470px){
        display: flex;
        flex-direction: column;
        height: 100%;
        div{
            margin-bottom: 2vw;
            height: 10vw;
            width: 100%;
            margin-bottom: 1vw;
            border-radius: 3vw ;
            &:last-child{
                height: 20vw;
                margin-top: 2vw;
                
                img{
                    display: none;
                }
                span{
                    display:block;
                    font-size: 5vw;
                }
            }
            &:nth-child(7){
                height: 30vw;
                textarea{
                    font-size: 3vw;
                    border-radius: 3vw ;
                    &::placeholder{
                        font-size: 3vw;
                        color: ${theme.primary};
                    }
                }
            }
            input{
                &::placeholder{
                    font-size: 3vw;
                }
                &::before{
                    font-size: 3vw;
                }
                font-size: 3vw;
                border-radius: 3vw ;
            }
        }
    }
`

const Contact__Container__Form__Wrapper__div1 = styled.div`
    grid-area: 1 / 1 / 2 / 6;
    height: 3vw;
    border-radius: 3vw;
    input{
        width: 100%;
        height: 100%;
        border: none;
        background-color: #fff;
        font-size: 1vw;
        font-weight: 600;
        padding-left: 20px;
        border-radius: 3vw;
        transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
        &::placeholder{
            color: ${theme.primary};
            font-size: 1vw;
            font-weight: 600;
        }
        &:hover{
            transform: scaleY(0.95) scaleX(0.99);
        }
    }

`

const Contact__Container__Form__Wrapper__div2 = styled.div`
    grid-area: 1 / 6 / 2 / 8;
    border-radius: 3vw;
    input{
        width: 100%;
        height: 100%;
        border: none;
        background-color: #fff;
        font-size: 1vw;
        font-weight: 600;
        padding-left: 20px;
        border-radius: 3vw;
        transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
        &::placeholder{
            color: ${theme.primary};
            font-size: 1vw;
            font-weight: 600;
        }
        &:hover{
            transform: scaleY(0.95) scaleX(0.99);
        }
    }
`

const Contact__Container__Form__Wrapper__div3 = styled.div`
    grid-area: 2 / 1 / 3 / 5;
    border-radius: 3vw;
    input{
        width: 100%;
        height: 100%;
        border: none;
        background-color: #fff;
        font-size: 1vw;
        font-weight: 600;
        padding-left: 20px;
        border-radius: 3vw;
        transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
        &::placeholder{
            color: ${theme.primary};
            font-size: 1vw;
            font-weight: 600;
        }
        &:hover{
            transform: scaleY(0.95) scaleX(0.99);
        }
    }
`

const Contact__Container__Form__Wrapper__div4 = styled.div`
    grid-area: 2 / 5 / 3 / 8;
    border-radius: 3vw;
    input{
        width: 100%;
        height: 100%;
        border: none;
        background-color: #fff;
        font-size: 1vw;
        font-weight: 600;
        padding-left: 20px;
        border-radius: 3vw;
        transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
        &::placeholder{
            color: ${theme.primary};
            font-size: 1vw;
            font-weight: 600;
        }
        &:hover{
            transform: scaleY(0.95) scaleX(0.99);
        }
    }
`

const Contact__Container__Form__Wrapper__div5 = styled.div`
    grid-area: 3 / 1 / 4 / 3;
    border-radius: 3vw;
    background-color: ${theme.secondary};
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
    &:hover{
        transform: scaleY(0.95) scaleX(0.99);
        box-shadow: 0vw 1vw 7vw 0px ${theme.shadowPrimary};
    }
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
    border-radius: 3vw;
    input{
        width: 100%;
        height: 100%;
        border: none;
        background-color: #fff;
        font-size: 1vw;
        font-weight: 600;
        padding-left: 20px; 
        border-radius: 3vw;
        transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
        &::placeholder{
            color: ${theme.primary};
            font-size: 1vw;
            font-weight: 600;
        }
        &:hover{
            transform: scaleY(0.95) scaleX(0.99);
        }
    }
`

const Contact__Container__Form__Wrapper__div7 = styled.div`
    grid-area: 4 / 1 / 5 / 6;
    border-radius: 3vw;
    textarea{
        width: 100% !important;
        height: 100% !important;
        border: none;
        background-color: #fff;
        font-size: 1vw;
        font-weight: 600;
        padding-left: 20px;
        padding-top: 20px;
        border-radius: 2vw ;
        resize: none;
        font-family: Arial, Helvetica, sans-serif;
        transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s;
        &::placeholder{
            color: ${theme.primary};
            font-size: 1vw;
            font-weight: 600;
        }
        &:hover{
            transform: scaleY(0.98) scaleX(0.995);
        }
    }
`

const Contact__Container__Form__Wrapper__div8 = styled.div`
    grid-area: 4 / 6 / 5 / 8;
    border-radius: 3vw;
    button{
        cursor: pointer;
        width: 100%;
        height: 100%;
        border: none;
        background-color: ${theme.secondary};
        font-size: 1vw;
        font-weight: 600;
        padding-left: 20px;
        border-radius: 2vw;
        color: #fff;
        transition: cubic-bezier(0.19, 1, 0.22, 1) 0.7s;
        span{
            display:none;
        }
        &:hover{
            transform: scale(0.95);
            box-shadow: 0vw 0vw 7vw 0px ${theme.shadowPrimary};
            img{
                transform: scale(1.2);
            }
        }
        img{
            transition: cubic-bezier(0.19, 1, 0.22, 1) 0.7s;
        }
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
                    <textarea type="text" placeholder="Message" />
                </Contact__Container__Form__Wrapper__div7>
                <Contact__Container__Form__Wrapper__div8>
                    <button><img src={icon_envoyer} alt="icon envoyer"/><span>Envoyer</span></button>
                </Contact__Container__Form__Wrapper__div8>
            </Contact__Container__Form__Wrapper>
        </Section__Contact>
    )
}