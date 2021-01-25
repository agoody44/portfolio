import styled from "styled-components";
import { Link } from 'react-router-dom';
import Linkedin1 from '../imgs/Linkedin1.png'
import Github from '../imgs/Github.png'

const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    background-color: #717171;
    color: #8a2385;
    box-shadow: 1px 1px 5px 3px #808080;
`;

export default function Footer(props) {
    return (
        <StyledFooter>
            <Link to='https://www.linkedin.com/in/alyssa-goodhue/'>
            <img id='Linkedin1' src={Linkedin1} alt="Linkedin1"/>
            </Link>
            <Link>
            <img id='Github' src={Github} alt="Github"/>
            </Link>
            <p>Copyright &copy; All Rights Reserved {new Date().getFullYear()} Alyssa Goodhue's Portfolio</p>
        </StyledFooter>
    );
};