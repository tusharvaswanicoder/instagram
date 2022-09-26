import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 35rem;
    text-align: center;
    color: rgb(var(--i1d));
    font-size: 1.4rem;
`;

export const LoginSignupJump = styled.div`
    border: 0.1rem solid rgb(var(--b6a));
    padding: 2.5rem 1.5rem;
    background: #fff;
    & a {
        color: rgb(var(--d69));
        font-weight: 600;
        &:active {
            opacity: 0.5;
        }
    }
`;

export const GetTheApp = styled.div``;

export const GetTheAppTitle = styled.div`
    margin: 2rem;
`;

export const GetTheAppBadges = styled.div`
    display: flex;
    gap: 0.8rem;
    justify-content: center;
`;

export const GetTheAppBadge = styled.img`
    height: 4rem;
`;
