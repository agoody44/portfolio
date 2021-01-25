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
import Mongodb from '../imgs/Mongodb.png'
import Ruby from '../imgs/Ruby.png'
import Rails from '../imgs/Rails.png'
import Bootstrap from '../imgs/Bootstrap.png'
import React from '../imgs/React.png'
import Heroku from '../imgs/Heroku.png'
import Postman from '../imgs/Postman.png'
import Postgresql from '../imgs/Postgresql.png'
import Python from '../imgs/Python.png'
import Django from '../imgs/Django.png'

const StylePage = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;


export default function HomePage(props) {
    return(
        <StylePage> 
            <p>I’m a Software Engineer with a background in Healthcare. I use my experience in Healthcare in combination with a Software Engineer to make working and communicating with my team better. My goal is to be able to work with my team and to finish projects in a timely manner. By combining these two skills, I will achieve my goals.</p>
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
            <img src={Mongodb} alt="Mongodb" />
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


            <Link to='https://goldendoodles.herokuapp.com/goldendoodles'>
            <img src={Goldendoodle} alt="Goldendoodles"/>
            </Link>
            <Link to=''>
            <img src={Trivia} alt="Trivia" />
            </Link>
            <Link>
            <img src={Pokemon} alt="Pokemon" />
            </Link>
            <Link>
            <img src={Savings} alt="Savings" />
            </Link>
        </StylePage>
    );
};
