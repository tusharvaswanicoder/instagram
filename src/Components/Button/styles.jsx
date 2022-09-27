import styled from "styled-components";

export const Container = styled.button`
    line-height: 18px;
    font-size: 1.4rem;
    font-weight: 600;
    padding: 0.5rem 0.9rem;
    text-align: center;
    user-select: none;
    border-radius: 0.4rem;
    color: rgb(var(--eca));
    position: relative;
    border: 0.1rem solid transparent;
    background-color: rgba(
        var(--d69),
        ${({ isDisabled }) => (isDisabled ? "0.3" : "1")}
    );
    ${({ isDisabled }) => isDisabled && "cursor: default;"}
`;

export const Content = styled.div`
    ${({ isLoading }) => isLoading && "opacity: 0;"}
`;

export const LoadingContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
`;
