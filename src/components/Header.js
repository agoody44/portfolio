
import styled from 'styled-components';
import Profile from '../imgs/Profile.png'
import Helloworld3 from '../imgs/Helloworld3.png'



const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    color: #ffffff;
    box-shadow: 1px 1px 1px 1px #ffffff;
    background-image: url(${Helloworld3});
    background-size: 100% 100%;
    ul {
        display: flex;
        align-items: center;
        list-style: none;
        li {
            margin-left: 10px;
            font-weight: bold;
            font-size: 20px;
            text-shadow: #000000 5px 0 10px;
            padding: 0.5em;
        }

    }
`;


    export default function Header(props) {

    return (
        <StyledHeader>
            {/* <Link to="/">
                <h1>HomePage</h1>
            </Link> */}
            <nav>
                <ul>
                    <li>
                    <img id='profile' src={Profile} alt="Profile"/>
                    </li>
                    <li>
                        <h1>Alyssa Goodhue</h1>
                        <h2>Boston Ma</h2>
                        <h3>agoody44@gmail.com</h3>
                        <h4>(978)-290-2324</h4>
                    </li>
                </ul>
            </nav>
        </StyledHeader>
    );
};