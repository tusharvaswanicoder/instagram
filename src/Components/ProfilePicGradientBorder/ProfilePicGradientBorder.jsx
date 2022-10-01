import styled from "styled-components";

const defaultProfilePicLink = `${process.env.PUBLIC_URL}/assets/default-profile.jpg`;

const ProfilePicGradientBorder = styled.div`
    width: ${({ size, whiteSpacing, gradientSize }) =>
        size + gradientSize + whiteSpacing}rem;
    height: ${({ size, whiteSpacing, gradientSize }) =>
        size + gradientSize + whiteSpacing}rem;
    background: linear-gradient(
        to right,
        var(--gradient-yellow),
        var(--gradient-orange),
        var(--gradient-pink),
        var(--gradient-lavender)
    );
    border-radius: 50%;
    position: relative;
    &:after {
        content: "";
        position: absolute;
        top: ${({ size, whiteSpacing, gradientSize }) =>
            (size + gradientSize + whiteSpacing - (size + whiteSpacing)) /
            2}rem;
        left: ${({ size, whiteSpacing, gradientSize }) =>
            (size + gradientSize + whiteSpacing - (size + whiteSpacing)) /
            2}rem;
        width: ${({ size, whiteSpacing }) => size + whiteSpacing}rem;
        height: ${({ size, whiteSpacing }) => size + whiteSpacing}rem;
        background: #fff;
        border-radius: 50%;
        z-index: 1;
    }
    &:before {
        content: "";
        position: absolute;
        top: ${({ whiteSpacing, gradientSize }) =>
            (gradientSize + whiteSpacing) / 2}rem;
        left: ${({ whiteSpacing, gradientSize }) =>
            (gradientSize + whiteSpacing) / 2}rem;
        width: ${({ size }) => size}rem;
        height: ${({ size }) => size}rem;
        background: url(${({ src }) => (src ? src : defaultProfilePicLink)});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 50%;
        z-index: 2;
    }
`;

export default ProfilePicGradientBorder;
