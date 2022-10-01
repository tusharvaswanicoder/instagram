import styled from "styled-components";

const defaultProfilePicLink = `${process.env.PUBLIC_URL}/assets/default-profile.jpg`;

export const Container = styled.div`
    border-radius: 8px;
    margin-bottom: 12px;
    background-color: rgb(var(--ig-primary-background));
    border: 1px solid rgb(var(--ig-elevated-separator));
    position: relative;
`;

export const Like = styled.div`
    display: flex;
    padding: 0.8rem 1.6rem;
    gap: 1.2rem;
    align-items: center;
`;

export const LikePersonProfilePic = styled.div`
    width: 4.4rem;
    height: 4.4rem;
    background: url(${({ src }) => (src ? src : defaultProfilePicLink)});
    background-size: cover;
    background-position: center;
    border-radius: 50%;
`;

export const LikePersonUserNameAndName = styled.div`
    flex: 1;
    font-size: 1.4rem;
    line-height: 18px;
`;

export const LikePersonUserName = styled.button`
    color: rgb(var(--ig-primary-text));
    font-weight: 600;
`;

export const LikePersonName = styled.div`
    color: rgb(var(--ig-secondary-text));
    font-weight: 400;
    margin-top: 0.2rem;
`;

// export const LikePersonFollow = styled.div``;

export const UserOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.8rem 1.2rem;
`;

export const User = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
`;

export const UserName = styled.button`
    color: rgb(var(--ig-secondary-button));
    font-size: 14px;
    font-weight: 600;
`;

export const Options = styled.button`
    color: #262626;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const Content = styled.div`
    padding: 0 1.2rem;
`;

export const PostActions = styled.div`
    padding-bottom: 0.6rem;
    display: flex;
    gap: 1.6rem;
`;

export const PostAction = styled.button`
    padding: 0.8rem 0;
    cursor: pointer;
    color: var(--web-overlay-on-media);
    &:hover {
        opacity: 0.5;
    }
    &:last-child {
        margin-left: auto;
    }
`;

export const NumOfLikes = styled.button`
    padding-bottom: 0.8rem;
    color: rgb(var(--ig-primary-text));
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 18px;
`;

export const NumOfLikesFollowedPersonLike = styled.div`
    color: rgb(var(--ig-primary-text));
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 18px;
    padding-bottom: 0.8rem;
    & button {
        font-weight: 600;
    }
`;

export const AuthorCaption = styled.div`
    font-size: 14px;
    margin-bottom: 0.8rem;
`;

export const Author = styled.span`
    color: rgb(var(--ig-secondary-button));
    font-weight: 600;
`;

export const Caption = styled.span`
    padding-left: 0.4rem;
`;

export const More = styled.span`
    color: rgb(var(--ig-secondary-text));
    font-weight: 400;
    line-height: 1.8rem;
    padding-left: 0.4rem;
    cursor: pointer;
`;

export const ViewComments = styled.div`
    margin-bottom: 0.8rem;
    color: rgb(var(--ig-secondary-text));
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 18px;
    cursor: pointer;
`;

export const PostedAt = styled.div`
    margin-bottom: 1.2rem;
    letter-spacing: 0.02rem;
    color: rgb(var(--ig-secondary-text));
    font-weight: 400;
    font-size: 1rem;
    line-height: 12px;
    text-transform: uppercase;
`;

export const AddComment = styled.div`
    padding: 1.2rem;
    display: flex;
    align-items: center;
    gap: 1.2rem;
    border-top: 1px solid rgb(var(--post-separator));
`;

export const AddCommentTextArea = styled.textarea`
    max-height: 8rem;
    background: none;
    border: none;
    color: rgb(
        var(
            --ig-${({ textInside }) => (textInside ? "primary" : "secondary")}-text
        )
    );
    height: 1.8rem;
    flex-grow: 1;
    max-height: 8rem;
    outline: none;
    padding: 0;
    resize: none;
    font-size: 1.4rem;
    line-height: 1.8rem;
    font-weight: 400;
`;

export const EmojiPicker = styled.div`
    display: flex;
    align-items: center;
`;

export const PostComment = styled.button`
    color: rgb(var(--ig-primary-button));
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 18px;
    cursor: pointer;
`;
