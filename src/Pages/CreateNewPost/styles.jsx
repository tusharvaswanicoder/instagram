import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--overlay-alpha-80);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CloseButton = styled.div`
    position: absolute;
    top: 1.8rem;
    right: 1.8rem;
    font-size: 2.5rem;
    color: #fff;
    cursor: pointer;
`;

export const Container = styled.div`
    height: 70rem;
    max-height: calc(100vh - 4rem);
    max-width: 60rem;
    width: 100%;
    background: #fff;
    border-radius: 1.2rem;
    display: flex;
    flex-direction: column;
`;

export const Heading = styled.div`
    text-align: center;
    color: rgb(var(--ig-primary-text));
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 24px;
    padding: 1rem 0;
    border-bottom: 0.1rem solid rgb(var(--ig-elevated-separator));
`;

export const Content = styled.div`
    flex-grow: 1;
`;
