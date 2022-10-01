import React from "react";
import { BsDot } from "react-icons/bs";
import footerHomeLinks from "../../data/footerHomeLinks";
import { Container, Copyright, Links } from "./styles";

const FooterHome = () => {
    return (
        <Container>
            <Links>
                {footerHomeLinks.map(({ href, name }, index) => (
                    <React.Fragment key={index}>
                        <a href={href} target="_blank" rel="noreferrer">
                            {name}
                        </a>
                        {footerHomeLinks.length - 1 !== index && <BsDot />}
                    </React.Fragment>
                ))}
            </Links>
            <Copyright>
                &copy; {new Date().getFullYear()} instagram from meta
            </Copyright>
        </Container>
    );
};

export default FooterHome;
