import styled from "styled-components";

export const Container = styled.div`
    overflow: hidden;
`;

export const Images = styled.div`
    display: flex;
`;

export const Image = styled.div`
    width: 100%;
    flex-shrink: 0;
    & img {
        max-width: 100%;
        height: auto;
    }
`;
