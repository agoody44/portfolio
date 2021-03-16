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
    background-color: rgb(237, 237, 237);
    width: 60vw;
`;

const StyleIcons = styled.i`
    padding: 15px;
    margin: 15px;
    border: 1px solid #000000;
    border-radius: 10px;
    background-color: rgb(237, 237, 237);
    h1 {
        text-align: center;
    }
`;

const StyleProjects = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;

    .card {
    border: 2px solid #555;
    background-color: rgb(237, 237, 237);
    color: rgb(0, 0, 0);
    border: 2px solid;
    border-radius: 6px;
    padding: 5px;
    margin-bottom: 18px;
    width: 55rem
    }
    .card-img-top{
    border: 2px solid;
    border-radius: 6px;
    }
    .card-text,
    .card-title{
    text-align: center;
    }
    .grid2x2 {
    min-height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    
    }
    .grid2x2 > div {
    display: flex; 
    flex-basis: calc(50% - 40px);  
    justify-content: center;
    flex-direction: column;
    }
    .grid2x2 > div > div {
    display: flex;
    justify-content: center;
    }
    .box { margin: 20px; }
    /* .box1 { background-color: red; }
    .box2 { background-color: orange; }
    .box3 { background-color: purple; }
    .box4 { background-color: grey; } */
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

            {/* <ImageSlider slides={SliderData} /> */}
            
            <StyleProjects>
            <div class="grid2x2">

            <div class="box box1">
                <div class="card">
                    <a href='https://goldendoodles.herokuapp.com/goldendoodles' target="_blank" rel="noreferrer">
                    <img class="card-img-top" src={Goldendoodle} alt="Goldendoodles" id='links'/>
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">Goldendoodle Generations</h5>
                            <p class="card-text">Shows information about Goldendoodle generations and lets you share your dog on the website.
                            A full-stack application that utilized Node.js with Express and MongoDB.
                            Made RESTful API fetch calls to an Express, MongoDB, Node.js backend handling all create, read, update, delete (CRUD) operations. Also has authentication.
                            Made frequent commits using Git control throughout the production of the application, and deployed using Heroku.
                            </p>
                    </div>
                </div>
            </div>    

            <div class="box box2">
                <div class="card">
                    <a href='https://trivia-game-flame.vercel.app/' target="_blank" rel="noreferrer">
                    <img class="card-img-top" src={Trivia} alt="Trivia" id='links' />
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">Mythology Trivia</h5>
                        <p class="card-text">A trivia game about greek and roman mythology using open trivia database API.
                        Utilized JavaScript, CSS, HTML, and Fetch.
                        Styled using flex-box.
                        Used Open Trivia Database to pull questions and answers. Made frequent commits using Git control throughout the production of the application, and deployed using Vercel.
                        </p>
                    </div>
                </div>
            </div>

            <div class="box box3">
                <div class="card">
                    <a href='https://pokemon-project-3-front.herokuapp.com/' target="_blank" rel="noreferrer">
                    <img class="card-img-top" src={Pokemon} alt="Pokemon" id='links' />
                    </a>
                    <div class="card-body">
                            <h5 class="card-title">Pokemon Database</h5>
                            <p class="card-text">Created a Pokemon database app using fetch calls to Pokemon API.
                            Used React.js and components to serve the front-end.
                            Served the back-end of the application using Node.js.
                            Styled and created the visual aspects using Bootstrap, HTML5, and CSS3.
                            Made frequent commits using Git control throughout the production of the application, and deployed using Heroku.
                            </p>
                    </div>
                </div> 
            </div>

            <div class="box box4">
                <div class="card">
                    <a href='https://savings-calculator-8189.herokuapp.com/' target="_blank" rel="noreferrer">
                    <img class="card-img-top" src={Savings} alt="Savings" id='links' />
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">Savings Calculator</h5>
                        <p class="card-text">Created a savings calculator that will track daily, weekly, and monthly budgets.
                        Final project that was self taught over a week that utilizes Python and Django.
                        Utilized Git control during the production of the application with frequent commits until deployment.
                        Deployed online using Heroku.
                        </p>
                    </div>
                </div>
            </div>    
            </div>

            </StyleProjects>
        </StylePage>
    );
};

