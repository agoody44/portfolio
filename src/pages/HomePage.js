import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Goldendoodle from '../imgs/Goldendoodle.png'
import Trivia from '../imgs/Trivia.png'
import Pokemon from '../imgs/Pokemon.png'
import Savings from '../imgs/Savings.png'
import HTML5 from '../imgs/HTML5.png'
import CSS3 from '../imgs/CSS3.png'
import JavaScript from '../imgs/JavaScript.png'
import JQuery from '../imgs/JQuery.png'
import Github2 from '../imgs/Github2.png'
import Git from '../imgs/Git.png'
import Nodejs from '../imgs/Nodejs.png'
import Mongodb2 from '../imgs/Mongodb2.png'
import Ruby from '../imgs/Ruby.png'
import Rails from '../imgs/Rails.png'
import Bootstrap from '../imgs/Bootstrap.png'
import React from '../imgs/React.png'
import Heroku from '../imgs/Heroku.png'
import Postman from '../imgs/Postman.png'
import Postgresql from '../imgs/Postgresql.png'
import Python from '../imgs/Python.png'
import Django from '../imgs/Django.png'
// import bgimg  from '../bgimg.png'

import Linkedin64 from '../imgs/Linkedin64.png'
import Github64 from '../imgs/Github64.png'


const StylePage = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;
`;

const StyleText = styled.p`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    font-size: 20px;
    padding: 10px;
    margin: 15px;
    border: 1px solid #000000;
    border-radius: 10px;
    background-color: white;
    width: 60vw;
`;

const StyleIcons = styled.i`
    padding: 15px;
    margin: 15px;
    border: 1px solid #000000;
    border-radius: 10px;
    background-color: white;
    h1 {
        text-align: center;
    }
`;

const StyleProjects = styled.main`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 15px;
    .goldendoodle,.GDP {
        border: 2px solid #000000;
        border-radius: 5px;
        background-color: white;
        margin: 15px;
    }
    .trivia {
        border: 2px solid #000000;
        border-radius: 5px;
        background-color: white;
        margin: 15px;
    }
    .pokemon {
        border: 2px solid #000000;
        border-radius: 5px;
        background-color: white;
        margin: 15px;
    }
    .savings {
        border: 2px solid #000000;
        border-radius: 5px;
        background-color: white;
        margin: 15px;
    }
`;



export default function HomePage(props) {
    return(
        <StylePage> 
            <StyleText>
            <p>I’m a Software Engineer with a background in Healthcare. My previous industry relies on immense attention to detail, one which I bring forward to development to ensure quality and sustainable code.</p>

            <a href='https://www.linkedin.com/in/alyssa-goodhue/' target="_blank" rel="noreferrer" >
            <img id='Linkedin64' src={Linkedin64} alt="Linkedin64"/>
            </a>
            <a href='https://github.com/agoody44' target="_blank" rel="noreferrer">
            <img id='Github64' src={Github64} alt="Github64"/>
            </a>


            </StyleText>
            <StyleIcons>
            <h1>Technologies that I use</h1>
            <Link>
            <img src={HTML5} alt="HTML5" />
            </Link>
            <img src={CSS3} alt="CSS3" />
            <Link>
            </Link>
            <Link>
            <img src={JavaScript} alt="JavaScript" />
            </Link>
            <Link>
            <img src={JQuery} alt="JQuery" />
            </Link>
            <Link>
            <img src={Github2} alt="Github2" />
            </Link>
            <Link>
            <img src={Git} alt="Git" />
            </Link>
            <Link>
            <img src={Nodejs} alt="Nodejs" />
            </Link>
            <Link>
            <img src={Mongodb2} alt="Mongodb2" />
            </Link>
            <Link>
            <img src={Ruby} alt="Ruby" />
            </Link>
            <Link>
            <img src={Rails} alt="Rails" />
            </Link>
            <Link>
            <img src={Bootstrap} alt="Bootstrap" />
            </Link>
            <Link>
            <img src={React} alt="React" />
            </Link>
            <Link>
            <img src={Heroku} alt="Heroku" />
            </Link>
            <Link>
            <img src={Postman} alt="Postman" />
            </Link>
            <Link>
            <img src={Postgresql} alt="Postgresql" />
            </Link>
            <Link>
            <img src={Python} alt="Python" />
            </Link>
            <Link>
            <img src={Django} alt="Django" />
            </Link>
            </StyleIcons>
            
            <StyleProjects>
            <a href='https://goldendoodles.herokuapp.com/goldendoodles' target="_blank" rel="noreferrer">
            <img src={Goldendoodle} alt="Goldendoodles" class='goldendoodle'id='links'/>
            </a>
            {/* <p class='GDP'>A full-stack application that utilized Node.js with Express and MongoDB.Shows information about Goldendoodle generations and lets you share your dog on the website.</p> */}
            <a href='https://trivia-game-flame.vercel.app/' target="_blank" rel="noreferrer">
            <img src={Trivia} alt="Trivia" class='trivia' id='links' />
            </a>
            {/* <p>A trivia game about greek and roman mythology using open trivia database API.That utilizes JavaScript , CSS, HTML, and Fetch.</p> */}
            <a href='https://pokemon-project-3-front.herokuapp.com/' target="_blank" rel="noreferrer">
            <img src={Pokemon} alt="Pokemon" class='pokemon' id='links' />
            </a>
            {/* <p>A pokemon database app using fetch calls to Pokemon API.With a React front-end and Node.js back-end.</p> */}
            <a href='https://savings-calculator-8189.herokuapp.com/' target="_blank" rel="noreferrer">
            <img src={Savings} alt="Savings" class='savings' id='links' />
            </a>
            {/* <p>A savings calculator that will track daily, weekly, and monthly budgets.This project that was self taught over a week that utilizes Python and Django.</p> */}
            </StyleProjects>
        </StylePage>
    );
};

