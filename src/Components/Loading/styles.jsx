import styled, { keyframes } from "styled-components";

const IGCoreSpinnerSpin8 = keyframes`
    from {
        transform:rotate(180deg);
    }
    to {
        transform:rotate(540deg)
    }
`;

export const Container = styled.svg`
    animation: ${IGCoreSpinnerSpin8} 0.8s steps(8) infinite;
`;
