import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 35rem;
    padding: 1rem 0px;
    border: 0.1rem solid rgb(var(--b6a));
    background: #fff;
    text-align: center;
`;

export const Logo = styled.img`
    width: 17.5rem;
    margin: 3.6rem 0px;
`;

export const Form = styled.form`
    padding: 0px 4rem;
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
`;

export const ForgotPassword = styled.div`
    margin: 1.2rem 0px 1rem;
    text-align: center;
    color: rgb(var(--fe0));
    font-size: 1.2rem;
    line-height: 16px;
    & a:active {
        opacity: 0.5;
    }
`;
