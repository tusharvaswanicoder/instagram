import styled from "styled-components";

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--overlay-alpha-80);
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    border-radius: 1.2rem;
    background-color: rgb(var(--ig-elevated-background));
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Heading = styled.div`
    border-bottom: 1px solid rgb(var(--ig-elevated-separator));
    color: rgb(var(--ig-primary-text));
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 2.4rem;
    padding: 1rem 0;
    text-align: center;
    position: relative;
`;

export const CloseButton = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const Content = styled.div`
    flex-grow: 1;
    overflow: auto;
`;
