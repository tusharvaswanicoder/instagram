import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2.4rem;
    height: 100%;
    ${({ fileBeingDragged }) =>
        fileBeingDragged
            ? `
                 background: rgb(var(--ig-secondary-background))
              `
            : ""}
`;

export const Content = styled.div`
    text-align: center;
`;

export const Icon = styled.div`
    margin-bottom: 1.6rem;
`;

export const Title = styled.div`
    color: rgb(var(--ig-primary-text));
    font-weight: 300;
    font-size: 2.2rem;
    line-height: 26px;
    margin-bottom: 2.4rem;
`;

export const Error = styled.div`
    color: rgb(var(--ig-secondary-text));
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 18px;
    margin: -1.6rem 0 2.4rem 0;
    & span {
        font-weight: 600;
    }
`;
