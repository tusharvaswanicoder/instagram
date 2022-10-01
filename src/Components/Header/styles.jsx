import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    display: block;
    width: 100%;
    top: 0px;
    left: 0px;
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
    position: relative;
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
    width: 2.8rem;
    height: 2.8rem;
    border: 1px solid
        rgb(
            var(
                --ig-primary-${({ profileMenuVisible }) => (profileMenuVisible ? "text" : "background")}
            )
        );
    border-radius: 50%;
    position: relative;
`;

export const ProfileButtonMenu = styled.div`
    background: rgb(var(--ig-banner-background));
    border-radius: 0.6rem;
    position: absolute;
    padding: 0.4rem 0;
    top: calc(100% - 0.2rem);
    right: 0px;
    filter: drop-shadow(0 0 5px rgba(var(--web-always-black), 0.0975));
    display: flex;
    flex-direction: column;
    width: 23rem;
    opacity: 1;
    transition: opacity 75ms linear, transform 38ms ease-out;
    transform: translateY(-10px);
    transform: translateY(0);
    &:after {
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        top: -1rem;
        right: 2.2rem;
        border-bottom: 1rem solid rgb(var(--ig-banner-background));
        border-left: 1rem solid transparent;
        border-right: 1rem solid transparent;
    }
`;

export const ProfileButtonMenuLink = styled.div`
    padding: 1rem 1.6rem;
    display: flex;
    align-items: center;
    gap: 1.2rem;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 18px;
    cursor: pointer;
    &:hover {
        background: rgb(var(--ig-secondary-background));
    }
`;
