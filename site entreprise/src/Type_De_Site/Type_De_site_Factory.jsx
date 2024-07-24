import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { gsap } from "gsap";
import Site_Vitrine from "./Site_Vitrine/Site_Vitrine";
import LandingPage from "./LandingPage/LandingPage";
import Site_E_Commerce from "./Site_E_Commerce/Site_E_Commerce";
import Site_Saas from "./Site_Saas/Site_Saas";
import Creatif_Coding from "./CreatifCoding/CreatifCoding";
import Portfolio from "./Portfolio/Portfolio"

import icon_landing_page from "../assets/Icon-site.svg";
import icon_site_vitrine from "../assets/Icon-monitor-shadow copy.svg";
import icon_site_saas from "../assets/Icon-saas-shadow copy.svg";
import icon_site_e_commerce from "../assets/Icon-shop-shadow copy.svg";
import icon_creatif_coding from "../assets/Icon-creatif-coding-shadow copy.svg";
import icon_Portfolio from "../assets/Icon-portfolio.svg";

const theme = {
    primary: "#0f284e",
    secondary: "#00ff73",
    border: "#e0e0e038",
    shadowPrimary: "#00ff7383",
}

const Section__Type_de_Site = styled.section`
    margin-top: 300px;
    margin-bottom: 300px;
    margin-left: 20px;
    margin-right: 20px;
    font-family: 'Poppins', sans-serif;
`
const Type_De_Site__Container__Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 50px;
    background-color: ${theme.primary};
    border-radius: 50px;
    height: 10vw;
    margin-bottom: 5px;
    color: #fff;
    img {
        width: 5vw;
        height: 5vw;
    }
`

const Type_De_Site__Container__Title__Info = styled.div`
    margin-left: 2vw;
    h1{
        margin: 0;
        margin-bottom: 20px;
        font-size: 2vw;
        font-weight: 700;
        font-family: 'Anybody', cursive;
    }
    p{
        margin: 0;
        font-size: 0.9vw;
    }
`

const Type_De_Site__Container__description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 3vw;
    padding-right: 4vw;
    background-color: ${theme.primary};
    border-radius: 50px;
    margin-top: 5px;
    margin-bottom: 5px;
    height: 17vw;
    color: #fff;
    h2{
        margin: 0;
        padding-bottom: 1.5vw;
        font-size: 1.8vw;
        font-weight: 700;
        font-family: 'Anybody', cursive;
    }
    p{
        margin: 0;
        font-size: 0.8vw;
        span{
            color: ${theme.secondary};
        }
    }
`

export default function Type_De_site_Factory() {

    let titre = window.location.href.includes("Site-vitrine") ? "Site Vitrine"
        : window.location.href.includes("Landing-page") ? "Landing page"
            : window.location.href.includes("Site-e-commerce") ? "Site e-commerce"
                : window.location.href.includes("Creatif-coding") ? "Creatif Coding"
                    : window.location.href.includes("Site-saas") ? "Saas"
                        : window.location.href.includes("Portfolio") ? "Portfolio"
                            : null

    let titre2 = window.location.href.includes("Site-vitrine") ? "un Site Vitrine"
        : window.location.href.includes("Landing-page") ? "une Landing page"
            : window.location.href.includes("Site-e-commerce") ? "un Site e-commerce"
                : window.location.href.includes("Creatif-coding") ? "un Creatif Coding"
                    : window.location.href.includes("Site-saas") ? "un Saas"
                        : window.location.href.includes("Portfolio") ? "un Portfolio"
                            : null


    let icon = window.location.href.includes("Site-vitrine") ? <img src={icon_site_vitrine} alt="title" />
        : window.location.href.includes("Landing-page") ? <img src={icon_landing_page} alt="title" />
            : window.location.href.includes("Site-e-commerce") ? <img src={icon_site_e_commerce} alt="title" />
                : window.location.href.includes("Creatif-coding") ? <img src={icon_creatif_coding} alt="title" />
                    : window.location.href.includes("Site-saas") ? <img src={icon_site_saas} alt="title" />
                        : window.location.href.includes("Portfolio") ? <img src={icon_Portfolio} alt="title" />
                            : null


    let description = window.location.href.includes("Site-vitrine") ? "Pour se démarquer sur internet et faire de votre projet une entité unique."
        : window.location.href.includes("Landing-page") ? "Offrez une première impression inoubliable avec notre design épuré et nos appels à l'action percutants"
            : window.location.href.includes("Site-e-commerce") ? "Réinventez votre expérience de shopping en ligne avec notre plateforme élégante, sécurisée et facile à utiliser."
                : window.location.href.includes("Creatif-coding") ? "Fusionnez l'art et la technologie pour créer des expériences interactives et visuellement époustouflantes."
                    : window.location.href.includes("Site-saas") ? "Révolutionnez la gestion de votre entreprise avec des fonctionnalités robustes et une sécurité renforcée."
                        : window.location.href.includes("Portfolio") ? "Exposez votre créativité avec un portfolio qui reflète véritablement votre talent et votre vision."
                            : null

    let textDescription = window.location.href.includes("Site-vitrine") ? "Présentez votre entreprise avec un site vitrine qui capte l'essence de votre marque. Notre design sophistiqué et professionnel met en valeur vos services et produits, tout en reflétant l'identité unique de votre entreprise. Avec une navigation intuitive, des visuels percutants et des contenus optimisés pour le SEO, votre site vitrine devient un puissant outil de communication et de marketing. Faites bonne impression et attirez de nouveaux clients grâce à une présence en ligne impeccable."
        : window.location.href.includes("Landing-page") ? "Découvrez notre Landing Page conçue pour captiver et convertir. Avec un design épuré, des appels à l'action percutants et une navigation intuitive, nous transformons vos visiteurs en clients potentiels. Notre approche centrée sur l’utilisateur garantit une première impression mémorable, incitant à l’exploration et à l’engagement. Faites de chaque visite un pas vers le succès."
            : window.location.href.includes("Site-e-commerce") ? "Bienvenue dans notre univers e-commerce où l'innovation rencontre la facilité d'utilisation. Profitez d'une expérience d'achat sans égale avec une interface élégante, des fonctionnalités avancées de filtrage et une sécurité de paiement inégalée. Nos pages produits détaillées et visuellement attrayantes offrent une vitrine parfaite pour chaque article, maximisant ainsi les chances de conversion. Réinventez votre manière de vendre en ligne avec notre solution."
                : window.location.href.includes("Creatif-coding") ? "Plongez dans le monde fascinant du Creative Coding, où la technologie rencontre l’art pour créer des expériences interactives et visuellement époustouflantes. Notre plateforme permet aux artistes et développeurs de repousser les limites du possible, en transformant des lignes de code en chefs-d'œuvre numériques. Que vous soyez débutant ou expert, explorez une nouvelle dimension de créativité avec nos outils et ressources innovants."
                    : window.location.href.includes("Site-saas") ? "Découvrez notre site SaaS, conçu pour révolutionner la gestion de vos affaires. Avec une interface intuitive, des fonctionnalités robustes et une scalabilité sans faille, notre solution SaaS est l’outil ultime pour booster votre productivité. Profitez de mises à jour en temps réel, d'une sécurité renforcée et d'un support client exceptionnel pour faire passer votre entreprise au niveau supérieur. Simplifiez, automatisez et prospérez avec notre service cloud innovant."
                        : window.location.href.includes("Portfolio") ? "Présentez votre travail avec un portfolio qui reflète véritablement votre talent et votre vision. Notre plateforme offre une mise en page élégante et personnalisable, mettant en valeur chaque projet de manière professionnelle et attrayante. Que vous soyez artiste, designer ou développeur, transformez vos réalisations en une galerie d’art numérique qui capture l’attention et inspire. Faites de votre portfolio un véritable atout dans votre carrière."
                            : null

    let réponseDescription = window.location.href.includes("Site-vitrine") ? "Un site vitrine est essentiel pour établir votre présence en ligne et renforcer la crédibilité de votre entreprise. Il permet de présenter vos services, produits et valeurs de manière professionnelle et attrayante. Grâce à un design élégant et une navigation intuitive, un site vitrine informe et engage vos visiteurs, augmentant ainsi vos chances de convertir des prospects en clients. De plus, un site vitrine bien optimisé pour le SEO améliore votre visibilité sur les moteurs de recherche, attirant davantage de trafic qualifié. C’est un outil de communication incontournable pour toute entreprise souhaitant se démarquer et attirer de nouveaux clients."
        : window.location.href.includes("Landing-page") ? "Une landing page est cruciale pour convertir les visiteurs en clients potentiels. Elle est spécialement conçue pour guider vos visiteurs vers une action spécifique, comme s’inscrire à une newsletter, télécharger un e-book ou effectuer un achat. Avec un design épuré, des appels à l’action clairs et des messages percutants, une landing page maximise l’efficacité de vos campagnes marketing. En fournissant des informations ciblées et pertinentes, elle réduit les distractions et augmente les taux de conversion. C’est un élément clé de toute stratégie marketing numérique réussie."
            : window.location.href.includes("Site-e-commerce") ? "Un site e-commerce ouvre des opportunités infinies pour vendre vos produits en ligne. Il permet de toucher un public global, 24h/24 et 7j/7, offrant une commodité sans précédent à vos clients. Avec une interface utilisateur intuitive, des fonctionnalités avancées de gestion de produits et une sécurité renforcée des paiements, un site e-commerce transforme l’expérience d’achat. Il permet également de suivre et d’analyser les comportements d’achat, vous aidant à adapter vos stratégies de vente. C’est la plateforme idéale pour augmenter vos revenus et faire croître votre entreprise."
                : window.location.href.includes("Creatif-coding") ? "Un site de créatif coding est parfait pour ceux qui veulent fusionner art et technologie pour créer des expériences uniques et interactives. Il permet aux artistes, designers et développeurs de repousser les limites de leur créativité en utilisant le code comme médium artistique. Avec des outils et des ressources innovants, vous pouvez transformer des concepts abstraits en œuvres numériques captivantes. C’est une plateforme idéale pour montrer vos compétences techniques et artistiques, attirer des clients potentiels et collaborer avec d’autres créatifs."
                    : window.location.href.includes("Site-saas") ? "Un site SaaS (Software as a Service) est essentiel pour offrir des solutions logicielles accessibles via le cloud. Il permet aux utilisateurs de bénéficier de mises à jour en temps réel, d’une accessibilité multi-plateforme et d’une maintenance simplifiée. Avec une interface intuitive et des fonctionnalités scalables, un site SaaS optimise la gestion et la productivité des entreprises. Il offre également une sécurité renforcée des données et un support client exceptionnel. C’est la solution idéale pour moderniser les opérations et offrir des services innovants à vos clients."
                        : window.location.href.includes("Portfolio") ? "Un portfolio en ligne est crucial pour mettre en valeur vos compétences, réalisations et projets de manière professionnelle. Il permet de présenter votre travail de manière visuellement attrayante et organisée, facilitant ainsi la navigation et la compréhension pour les visiteurs. Un portfolio bien conçu démontre votre expertise et votre style unique, attirant ainsi des clients potentiels, des employeurs ou des partenaires de collaboration. C’est un outil indispensable pour toute personne créative souhaitant faire avancer sa carrière et se démarquer dans son domaine."
                            : null

    return (
        <Section__Type_de_Site>
            <Type_De_Site__Container__Title>
                {icon}
                <Type_De_Site__Container__Title__Info>
                    <h1>{titre}</h1>
                    <p>{description}</p>
                </Type_De_Site__Container__Title__Info>

            </Type_De_Site__Container__Title>
            {
                window.location.href.includes("Site-vitrine") ? <Site_Vitrine />
                    : window.location.href.includes("Landing-page") ? <LandingPage />
                        : window.location.href.includes("Site-e-commerce") ? <Site_E_Commerce />
                            : window.location.href.includes("Creatif-coding") ? <Creatif_Coding />
                                : window.location.href.includes("Site-saas") ? <Site_Saas />
                                    : window.location.href.includes("Portfolio") ? <Portfolio />
                                        : null
            }
            <Type_De_Site__Container__description>
                <h2>Création de {titre}</h2>
                <p>
                    {textDescription}
                </p>
            </Type_De_Site__Container__description>
            <Type_De_Site__Container__description>
                <h2>Pourquoi {titre2} ?</h2>
                <p>
                    {réponseDescription}
                </p>
            </Type_De_Site__Container__description>
        </Section__Type_de_Site>
    )

}