import styled from "styled-components";

export const Container = styled.div`
    background: rgb(var(--ig-primary-background));
    border-bottom: 1px solid rgb(var(--ig-elevated-separator));
    height: 6rem;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    max-width: 97.5rem;
    margin: auto;
    padding: 0 2rem;
    height: 100%;
`;

export const LogoVariant = styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;
    gap: 0.8rem;
    & a:active {
        opacity: 0.5;
    }
`;

export const Logo = styled.img`
    margin-top: 0.7rem;
`;

export const Variant = styled.div`
    display: flex;
    align-items: center;
`;

export const SearchBox = styled.div`
    background: rgb(var(--ig-highlight-background));
    height: 3.6rem;
    min-width: 12.5rem;
    width: 26.8rem;
    border-radius: 0.8rem;
    position: relative;
`;

export const SearchBoxInput = styled.input`
    border-radius: 0.8rem;
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    padding: 0.3rem 1.6rem;
    position: absolute;
    z-index: 1;
`;

export const SearchBoxIconPlaceholder = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;
    position: absolute;
    top: 50%;
    left: 1.6rem;
    transform: translateY(-50%);
    user-select: none;
    color: rgb(var(--ig-secondary-text));
`;

export const SearchBoxIcon = styled.div`
    display: flex;
    align-items: center;
`;

export const SearchBoxPlaceholder = styled.div`
    font-weight: 300;
`;

export const HeaderLinks = styled.div`
    flex: 1 0 127px;
    padding-left: 2.4rem;
    display: flex;
    align-items: center;
    gap: 2.2rem;
    justify-content: flex-end;
    & a:active {
        opacity: 0.5;
    }
`;

export const HeaderLink = styled.div`
    cursor: pointer;
`;

export const ProfileButton = styled.div`
    cursor: pointer;
    background: url("${process.env.PUBLIC_URL}/assets/default-profile.jpg");
    background-size: cover;
    width: 24px;
    height: 24px;
    border: 1px solid rgb(var(--ig-primary-background));
    border-radius: 50%;
`;
