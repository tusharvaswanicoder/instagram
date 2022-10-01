import React, { useEffect, useMemo, useRef, useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import postActions from "../../data/postActions";
import ProfilePicGradientBorder from "../ProfilePicGradientBorder/ProfilePicGradientBorder";
import {
    AddComment,
    AddCommentTextArea,
    Author,
    AuthorCaption,
    Caption,
    Container,
    Content,
    EmojiPicker,
    More,
    NumOfLikes,
    Options,
    PostAction,
    PostActions,
    PostComment,
    PostedAt,
    User,
    UserName,
    UserOptions,
    ViewComments,
} from "./styles";

export const Post = ({ user, images, likes, caption: orginalCaption }) => {
    const getCaption = (caption, showFull) => {
        if (!showFull && caption.length > 30)
            return `${caption.substr(0, 30)}...`;
        return caption;
    };
    const oneChar = useRef();
    const commentTextArea = useRef();
    const [caption, setCaption] = useState(() => getCaption(orginalCaption));
    const [comment, setComment] = useState();
    const [numOfLines, setNumOfLines] = useState(1);
    // const oneCharValue = oneChar.current;
    // const singleCharSize = useMemo(() => {
    //     if (oneCharValue) return oneCharValue.offsetWidth;
    // }, [oneCharValue]);
    const showMore = () => {
        setCaption(orginalCaption);
    };
    useEffect(() => {
        if (typeof comment === "string") {
            const numOfLinesWithoutCeil =
                comment.length /
                Math.floor(
                    commentTextArea.current.clientWidth /
                        oneChar.current.offsetWidth
                );
            const numOfLines = Number.isInteger(numOfLinesWithoutCeil)
                ? numOfLinesWithoutCeil + 1
                : Math.ceil(numOfLinesWithoutCeil);
            setNumOfLines(numOfLines ? numOfLines : 1);
        }
    }, [comment]);
    return (
        <Container>
            <span
                ref={oneChar}
                style={{
                    position: "absolute",
                    fontSize: "1.4rem",
                    visibility: "none",
                }}
            >
                a
            </span>
            <UserOptions>
                <User>
                    <ProfilePicGradientBorder
                        size={3.2}
                        whiteSpacing={0.4}
                        gradientSize={0.4}
                        src={user.profilePic}
                    />
                    <UserName>{user.userName}</UserName>
                </User>
                <Options>
                    <BiDotsHorizontalRounded fontSize={24} />
                </Options>
            </UserOptions>
            <img style={{ width: "100%" }} src={images[0]} alt="Hello" />
            <Content>
                <PostActions>
                    <PostAction>{postActions.like}</PostAction>
                    <PostAction>{postActions.comment}</PostAction>
                    <PostAction>{postActions.share}</PostAction>
                    <PostAction>{postActions.bookMark}</PostAction>
                </PostActions>
                <NumOfLikes>{likes.count} likes</NumOfLikes>
                <AuthorCaption>
                    <Author>{user.userName}</Author>
                    <Caption>{caption}</Caption>
                    {caption !== orginalCaption && (
                        <More onClick={showMore}>more</More>
                    )}
                </AuthorCaption>
                <ViewComments>View all 2 comments</ViewComments>
                <PostedAt>14 hours ago</PostedAt>
            </Content>
            <AddComment>
                <EmojiPicker>
                    <svg
                        aria-label="Emoji"
                        color="#262626"
                        fill="#262626"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                    >
                        <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path>
                    </svg>
                </EmojiPicker>
                <AddCommentTextArea
                    ref={commentTextArea}
                    style={{ height: `${1.8 * numOfLines}rem` }}
                    onChange={(e) => setComment(e.target.value)}
                    value={comment}
                    textInside={Boolean(comment)}
                    placeholder="Add a comment..."
                />
                <PostComment>Post</PostComment>
            </AddComment>
        </Container>
    );
};
