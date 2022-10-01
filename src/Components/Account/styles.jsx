import styled from "styled-components";

export const Container = styled.div`
    margin: 2.6rem 0 1rem 0;
    display: flex;
    align-items: center;
    gap: 1.2rem;
`;

const defaultProfilePicLink = `${process.env.PUBLIC_URL}/assets/default-profile.jpg`;

export const ProfilePic = styled.div`
    width: 5.6rem;
    height: 5.6rem;
    background: url(${({ src }) => (src ? src : defaultProfilePicLink)});
    background-size: cover;
`;

export const NameUserName = styled.div`
    line-height: 1.8rem;
    font-size: 1.4rem;
`;

export const UserName = styled.div`
    color: rgb(var(--ig-primary-text));
    font-weight: 600;
`;

export const Name = styled.div`
    margin-top: 0.2rem;
    color: rgb(var(--ig-secondary-text));
    font-weight: 400;
`;
