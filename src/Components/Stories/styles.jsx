import styled from "styled-components";

export const Container = styled.div`
    background: rgb(var(--ig-primary-background));
    border: 0.1rem solid rgb(var(--ig-elevated-separator));
    border-radius: 0.8rem;
    padding: 1.6rem 0;
    width: 100%;
    overflow: hidden;
    position: relative;
`;

export const Content = styled.div`
    padding: 0 1.6rem;
    display: flex;
    gap: 1rem;
`;

export const Story = styled.div`
    cursor: pointer;
`;

export const StoryPersonName = styled.div`
    max-width: 7.4rem;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgb(var(--ig-primary-text));
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 16px;
`;

const arrowLeftRightCommon = `
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3;
    background-image: var(--all-icons);
    background-repeat: no-repeat;
    width: 4.5rem;
    height: 4.5rem;
    cursor: pointer;
`;

export const ArrowLeft = styled.div`
    ${arrowLeftRightCommon}
    left: 8px;
    background-position: -294px -226px;
`;

export const ArrowRight = styled.div`
    ${arrowLeftRightCommon}
    right: 8px;
    background-position: -294px -273px;
`;
