import styled from "styled-components";

export const Container = styled.div`
    padding: 2.4rem 1.6rem 5.2rem;
    font-size: 1.2rem;
    line-height: 16px;
    font-weight: 400;
    color: rgb(var(--f52));
`;

export const FooterLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
    flex-wrap: wrap;
`;

export const LangaugeAndCopyright = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
    margin: 2.4rem 0px 1.2rem 0px;
    flex-wrap: wrap;
`;

export const Language = styled.div`
    position: relative;
`;

export const LangaugeInvisibleSelect = styled.select`
    opacity: 0;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
`;

export const LangaugeSelect = styled.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;
`;
