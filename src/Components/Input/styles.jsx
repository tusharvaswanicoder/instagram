import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    height: 3.6rem;
    background: rgb(var(--b3f));
    border: 0.1rem solid
        rgb(var(--${({ focused }) => (focused ? "c8c" : "ca6")}));
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
`;

export const Content = styled.input`
    border: none;
    position: relative;
    width: 100%;
    padding: ${({ shouldTransform }) =>
        shouldTransform ? "1.4rem 0.8rem 0.2rem" : "0.9rem 0.8rem"};
    background: transparent;
    z-index: 1;
`;

export const Placeholder = styled.span`
    position: absolute;
    left: 0.8rem;
    line-height: 3.6rem;
    user-select: none;
    color: rgb(var(--f52));
    font-size: 1.2rem;
    text-align: left;
    overflow: hidden;
    ${({ shouldTransform }) =>
        shouldTransform && "transform: scale(.83333) translateY(-1rem);"}
    transform-origin: left;
    transition: transform ease-out 0.1s, -webkit-transform ease-out 0.1s;
`;

export const ShowHidePassword = styled.button`
    margin: 0px 0.8rem;
    color: rgb(var(--f75));
    font-size: 1.4rem;
    font-weight: 600;
    cursor: pointer;
`;
