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

export const StoryPersonProfilePic = styled.div`
    width: 6.6rem;
    height: 6.6rem;
    background: linear-gradient(
        to right,
        var(--gradient-yellow),
        var(--gradient-orange),
        var(--gradient-pink),
        var(--gradient-lavender)
    );
    border-radius: 50%;
    margin: 0.4rem 0 0.8rem 0;
    position: relative;
    &:after {
        content: "";
        position: absolute;
        top: 0.2rem;
        left: 0.2rem;
        width: 6.2rem;
        height: 6.2rem;
        background: #fff;
        border-radius: 50%;
        z-index: 1;
    }
    &:before {
        content: "";
        position: absolute;
        top: 0.5rem;
        left: 0.5rem;
        width: 5.6rem;
        height: 5.6rem;
        background: url("https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 50%;
        z-index: 2;
    }
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
