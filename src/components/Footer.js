import styled from "styled-components";


const StyledFooter = styled.footer`
    /* display: flex;
    align-items: center;
    justify-content: center; */
    padding: 0 15px;
    background-color: #454545;
    color: #ffffff;
    p {
        text-align: center;
    }
`;

export default function Footer(props) {
    return (
        <StyledFooter>
            <p>Copyright &copy; All Rights Reserved {new Date().getFullYear()} Alyssa Goodhue's Portfolio</p>
        </StyledFooter>
    );
};