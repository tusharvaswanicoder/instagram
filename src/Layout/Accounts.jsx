import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Components/Footer/Footer";
import LoginSignupCommon from "../Components/LoginSignupCommon/LoginSignupCommon";

const Container = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
`;

const Main = styled.div`
    padding-top: 1.2rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
`;

const Accounts = () => {
    const { pathname } = useLocation();
    return (
        <Container>
            <Main>
                <Outlet />
                {(pathname === "/accounts/emailsignup" ||
                    pathname === "/accounts/login") && (
                    <LoginSignupCommon pathname={pathname} />
                )}
            </Main>
            <Footer />
        </Container>
    );
};

export default Accounts;
