import styled from "styled-components" 

import logo_42dev from "../assets/logo-42dev-no-bg.svg"

const theme = {
    primary: "#0f284e",
    secondary: "#00ff73",
    border: "#e0e0e038",
    shadowPrimary: "#00ff7383",
}

const Container = styled.div`
    font-family: 'Montserrat', sans-serif;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    margin-top: 5vw;
    width: 95%;
    background-color: ${theme.primary};
    height: 8vw;
    border-radius: 50px;
    padding-left: 3vw;
    margin-left: 50%;
    transform: translateX(-50%);
    img{
        width: 7vw;
        margin-right: 3vw;
    }
`

const InfoConteneur = styled.div`
    margin-top: 1vw;
    margin-bottom: 5vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`
 
 const Info = styled.div`
    background-color: ${theme.secondary};
    border-radius: 50px;
    width: 95%;
    height: 19vw;
`

const InfoHover = styled.div`
    position: absolute; 
    right: 0;
    height: 19vw;
    background-color: ${theme.primary};
    width: 49.5%;
    border-radius: 50px 0 0 50px;
    box-shadow: -8px 10px 7px 0px rgba(0, 0, 0, 0.25);
    h2{
        margin: 0;
    }
`

const InfoHover2 = styled.div`
    position: absolute;
    left: 0;
    height: 19vw;
    background-color: ${theme.primary};
    width: 49.5%;
    border-radius:  0 50px 50px 0 ;
    box-shadow: 8px 0px 7px 0px rgba(0, 0, 0, 0.25);
    h2{
        margin: 0;
    }
`

export default function A_TechPro() {
    return (
        <Container>

            <Header>
                <img src={logo_42dev} />
                <div>
                    <h1>42dev</h1>
                    <p>Création de sites internet sur mesure, adaptés à vos besoins et à votre budget.</p>
                </div>
            </Header>

            <InfoConteneur>

                <Info>
                    <div></div>
                    <InfoHover>
                        <h2>Création de sites internet</h2>
                    </InfoHover>
                </Info>

                <Info>
                    <div></div>
                    <InfoHover2>
                        <h2>Création de sites internet</h2>
                    </InfoHover2>
                </Info>

            </InfoConteneur>

        </Container>
    )
}