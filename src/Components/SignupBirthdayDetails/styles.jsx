import styled from "styled-components";

export const Container = styled.div`
    padding: 0.8rem 2.8rem;
`;

export const BirthdayIcon = styled.div`
    background: var(--all-icons);
    background-position: 0 0;
    height: 9.6rem;
    width: 14.4rem;
    margin: auto;
`;

export const BirthdayTitle = styled.div`
    margin: 1.6rem 0 0.8rem;
    color: rgb(var(--i1d));
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 24px;
`;

export const BirthdayWontBePublic = styled.div`
    margin-top: 1.6rem;
    color: rgb(var(--i1d));
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 18px;
`;

export const WhyBirthdayDetails = styled.button`
    margin-bottom: 0.8rem;
    color: rgb(var(--d69));
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 18px;
    &:active {
        opacity: 0.7;
    }
`;

export const MonthDayYearBirthdayRequired = styled.div`
    margin: 0.8rem 0;
`;

export const MonthDayYear = styled.div`
    display: flex;
    margin-bottom: 0.8rem;
    gap: 0.8rem;
    justify-content: center;
    flex-wrap: wrap;
`;

export const SelectContainer = styled.div`
    position: relative;
    & svg {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0.8rem;
        font-size: 1.2rem;
        color: rgb(var(--f52));
    }
`;

export const Select = styled.select`
    width: 100%;
    appearance: none;
    background: rgb(var(--d87));
    border: 0.1rem solid rgb(var(--b38));
    border-radius: 0.3rem;
    color: rgb(var(--f52));
    font-size: 1.2rem;
    height: 36px;
    padding: 0 2.4rem 0 0.8rem;
    &:focus-visible {
        outline: none;
    }
    &:active {
        border: 1px solid 1px solid rgba(var(--edc, 199, 199, 199), 1);
        color: rgba(var(--i1d, 38, 38, 38), 1);
        outline: 0;
    }
`;

export const BirthdayRequired = styled.div`
    margin: 0.4rem 0 1.6rem;
    color: rgb(var(--f52));
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 16px;
`;

export const OwnBirthday = styled.div`
    margin: 0.8rem 0;
    color: rgb(var(--f52));
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 16px;
`;

export const Link = styled.button`
    margin-bottom: 0.8rem;
    font-size: 1.4rem;
    font-weight: 600;
    color: rgb(var(--d69));
    &:active {
        opacity: 0.7;
    }
`;

export const Error = styled.div`
    margin: 1.4rem 0px;
    font-size: 14px;
    line-height: 18px;
    color: rgb(var(--ig-error-or-destructive));
`;
