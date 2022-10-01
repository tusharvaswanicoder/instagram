import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 1.2rem;
`;

export const HeadingSeeAll = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.4rem 0;
`;

export const Heading = styled.div`
    color: rgb(var(--ig-secondary-text));
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 18px;
`;

export const SeeAll = styled.div`
    color: rgb(var(--ig-primary-text));
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 16px;
`;

export const Suggestions = styled.div`
    padding: 0.8rem 0;
    display: flex;
    flex-direction: column;
`;

export const Suggestion = styled.div`
    padding: 0.8rem 0;
    display: flex;
    align-items: center;
    gap: 1.2rem;
    font-weight: 600;
`;

const defaultProfilePicLink = `${process.env.PUBLIC_URL}/assets/default-profile.jpg`;

export const SuggestionProfilePic = styled.div`
    width: 3.2rem;
    height: 3.2rem;
    background: url(${({ src }) => (src ? src : defaultProfilePicLink)});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export const SuggestionPersonUserNameContext = styled.div`
    flex: 1;
`;

export const SuggestionPersonUserName = styled.div`
    color: rgb(var(--ig-primary-text));
    font-size: 1.4rem;
    line-height: 18px;
`;

export const SuggestionPersonContext = styled.div`
    color: rgb(var(--ig-secondary-text));
    font-size: 1.2rem;
    line-height: 16px;
    font-weight: 400;
`;

export const SuggestionFollow = styled.div`
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: rgb(var(--ig-primary-button));
`;
