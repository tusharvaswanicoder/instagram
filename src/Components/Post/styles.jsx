import styled from "styled-components";

export const Container = styled.div`
    border-radius: 8px;
    margin-bottom: 12px;
    background-color: rgb(var(--ig-primary-background));
    border: 1px solid rgb(var(--ig-elevated-separator));
`;

export const UserOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.8rem 1.2rem;
`;

export const User = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
`;

export const UserName = styled.div`
    color: rgb(var(--ig-secondary-button));
    font-size: 14px;
    font-weight: var(--font-weight-system-semibold);
`;

export const Options = styled.div`
    color: #262626;
    display: flex;
    align-items: center;
    cursor: pointer;
`;
