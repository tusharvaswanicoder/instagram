import styled from "styled-components";

export const Logo = styled.img`
    width: 17.5rem;
    margin: 3.6rem 0px;
    margin-bottom: 1.2rem;
`;

export const Desc = styled.div`
    color: rgba(var(--f52, 142, 142, 142), 1);
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 20px;
    margin: 0 4rem 1.8rem;
    text-align: center;
`;

export const SignupParas = styled.div`
    margin: 1.6rem 0px;
    font-size: 1.2rem;
    line-height: 16px;
    & div:first-child {
        margin-bottom: 1.6rem;
    }
`;

export const SignupPara = styled.div`
    color: rgb(var(--f52));
    & a {
        color: rgb(var(--f52));
        font-weight: 600;
    }
`;
