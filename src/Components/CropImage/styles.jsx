import styled from "styled-components";

export const Container = styled.div`
    overflow: hidden;
    position: relative;
    height: 100%;
`;

export const Images = styled.div`
    display: flex;
    transition: transform 300ms cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
    height: 100%;
`;

export const Image = styled.div`
    width: 100%;
    flex-shrink: 0;
    & img {
        max-width: 100%;
        height: auto;
    }
`;

const forwardBackwardExpandZoomGalleryCommon = `
    background: rgba(26, 26, 26, .8);
    border-radius: 50%;
    width: 32px;
    height: 32px;
    cursor: pointer;
    transition: opacity 0.2s;
    color: #fff;
    z-index: 1;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        opacity: 0.7;
    }
`;

const forwardBackwardCommon = `
    ${forwardBackwardExpandZoomGalleryCommon}
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`;

export const Forward = styled.div`
    ${forwardBackwardCommon}
    right: 0.8rem;
`;

export const Backward = styled.div`
    ${forwardBackwardCommon}
    left: 0.8rem;
`;

export const AspectRatioZoom = styled.div`
    display: flex;
    position: absolute;
    left: 1.6rem;
    bottom: 1.6rem;
    gap: 1.6rem;
`;

export const activeStyle = `
    color: var(--web-overlay-on-media);
    background: #fff!important;
`;

export const AspectRatio = styled.div`
    ${forwardBackwardExpandZoomGalleryCommon}
    font-size: 2rem;
    ${({ isActive }) => (isActive ? activeStyle : "")}
`;

export const Zoom = styled.div`
    ${forwardBackwardExpandZoomGalleryCommon}
    font-size: 2rem;
    ${({ isActive }) => (isActive ? activeStyle : "")}
`;

export const Gallery = styled.div`
    ${forwardBackwardExpandZoomGalleryCommon}
    position: absolute;
    bottom: 1.6rem;
    right: 1.6rem;
    font-size: 1.8rem;
    ${({ isActive }) => (isActive ? activeStyle : "")}
`;

const aspectRatioZoomSlidesMenuCommonStyles = `
    background: rgba(26, 26, 26, 0.8);
    border-radius: 8px;
    position: absolute;
    z-index: 1;
    bottom: 6.4rem;
`;

export const AspectRatioMenu = styled.div`
    ${aspectRatioZoomSlidesMenuCommonStyles}
    left: 1.6rem;
`;

export const AspectRatioMenuItem = styled.div`
    display: flex;
    align-items: center;
    gap: 1.6rem;
    padding: 1.2rem;
    cursor: pointer;
    color: rgb(
        var(
            --${({ isActive }) => (isActive ? "web-always-white" : "ig-secondary-text")}
        )
    );
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 18px;
    & svg {
        font-size: 2.5rem;
    }
    border-bottom: 0.1rem solid rgb(var(--ig-separator));
    &:last-child {
        border-bottom: none;
    }
`;

export const ZoomMenu = styled.div`
    ${aspectRatioZoomSlidesMenuCommonStyles}
    padding: 1.5rem 1.2rem;
    width: 13rem;
    display: flex;
    align-items: center;
    left: 6.4rem;
`;

const inputThumbStyle = `
    background: #fff;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
`;

export const Input = styled.input`
    width: 100%;
    height: 0.1rem;
    background: #000;
    appearance: none;
    ::-webkit-slider-thumb {
        appearance: none;
        ${inputThumbStyle}
    }
    ::-moz-range-thumb {
        ${inputThumbStyle}
    }
`;

export const SlidesMenu = styled.div`
    ${aspectRatioZoomSlidesMenuCommonStyles}
    padding: 0.8rem 1.2rem;
    display: flex;
    gap: 0.8rem;
    max-width: calc(100% - 3.2rem);
    margin: auto;
    right: 1.6rem;
`;

export const SlidesMenuContent = styled.div`
    flex: 1;
    display: flex;
    gap: 1.2rem;
    overflow: hidden;
`;

export const SlidesMenuSlide = styled.div`
    width: 9.4rem;
    height: 9.4rem;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url("${({ src }) => src}");
    background-size: cover;
    background-position: center;
    cursor: pointer;
    flex-shrink: 0;
    position: relative;
`;

export const SlidesMenuSlideDelete = styled.div`
    background: rgba(26, 26, 26, 0.8);
    color: #fff;
    font-size: 1.5rem;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: absolute;
    top: 0.4rem;
    right: 0.4rem;
`;

export const SlidesMenuAddSlide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.1rem solid rgb(var(--ig-separator));
    border-radius: 50%;
    height: 5rem;
    width: 5rem;
    color: rgb(var(--ig-secondary-text));
    font-size: 2.2rem;
    cursor: pointer;
    flex-shrink: 0;
`;
