import styled from "styled-components";

export const Container = styled.div``;

export const Links = styled.div`
    display: flex;
    align-items: center;
    color: rgb(var(--ig-tertiary-text));
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 16px;
    flex-wrap: wrap;
    margin-bottom: 1.6rem;
    & a:hover {
        text-decoration: underline;
    }
`;

export const Copyright = styled.div`
    color: rgb(var(--ig-tertiary-text));
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.6rem;
    text-transform: uppercase;
`;
