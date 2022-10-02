import React, { useEffect, useRef, useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import postActions from "../../data/postActions";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import ProfilePicGradientBorder from "../ProfilePicGradientBorder/ProfilePicGradientBorder";
import debounce from "../../Helpers/debounce.js";
import {
    AddComment,
    AddCommentTextArea,
    Author,
    AuthorCaption,
    Backward,
    Caption,
    Container,
    Content,
    EmojiPicker,
    Forward,
    Image,
    Images,
    ImagesTrack,
    ImagesTrackWrapper,
    Like,
    LikePersonName,
    LikePersonProfilePic,
    LikePersonUserName,
    LikePersonUserNameAndName,
    More,
    NumOfLikes,
    NumOfLikesFollowedPersonLike,
    Option,
    Options,
    PostAction,
    PostActions,
    PostComment,
    PostedAt,
    SliderDot,
    SliderDots,
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
    const imagesContainer = useRef();
    const [liked, setLiked] = useState(false);
    const [caption, setCaption] = useState(() => getCaption(orginalCaption));
    const [comment, setComment] = useState();
    const [showLikesModal, setShowLikesModal] = useState(false);
    const [showPostOptions, setShowPostOptions] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);
    const [imagesContainerWidth, setImagesContainerWidth] = useState();
    useEffect(() => {
        const onResize = () => {
            setImagesContainerWidth(imagesContainer.current.offsetWidth);
        };
        onResize();
        window.addEventListener("resize", debounce(onResize, 500));
        return () =>
            window.removeEventListener("resize", debounce(onResize, 500));
    }, []);
    const likeUnlike = ({ target }) => {
        setLiked((prev) => !prev);
        target.classList.add("scale-up");
        setTimeout(() => {
            target.classList.remove("scale-up");
        }, 300);
    };
    const postOptions = [
        {
            name: "Report",
            style: {
                color: "rgb(var(--ig-error-or-destructive))",
                fontWeight: 700,
            },
            onClick: () => {},
        },
        {
            name: "Unfollow",
            style: {
                color: "rgb(var(--ig-error-or-destructive))",
                fontWeight: 700,
            },
            onClick: () => {},
        },
        {
            name: "Add to favourites",
            onClick: () => {},
        },
        {
            name: "Hide",
            onClick: () => {},
        },
        {
            name: "Go to post",
            onClick: () => {},
        },
        {
            name: "Share to...",
            onClick: () => {},
        },
        {
            name: "Copy link",
            onClick: () => {},
        },
        {
            name: "Embed",
            onClick: () => {},
        },
        {
            name: "Cancel",
            onClick: () => setShowPostOptions(false),
        },
    ];
    const showMore = () => {
        setCaption(orginalCaption);
    };
    return (
        <Container>
            {showPostOptions && (
                <Modal
                    closeModal={() => setShowPostOptions(false)}
                    style={{
                        maxWidth: "40rem",
                    }}
                >
                    {postOptions.map(({ name, style, onClick }) => (
                        <Option style={style} onClick={onClick}>
                            {name}
                        </Option>
                    ))}
                </Modal>
            )}
            {showLikesModal && (
                <Modal
                    heading="Likes"
                    style={{
                        maxWidth: "40rem",
                        maxHeight: "40rem",
                    }}
                    closeModal={() => setShowLikesModal(false)}
                >
                    {[...Array(40)]
                        .map((e) => ~~(Math.random() * 40))
                        .map((item, index) => (
                            <Like key={index}>
                                <LikePersonProfilePic src={user.profilePic} />
                                <LikePersonUserNameAndName>
                                    <LikePersonUserName>
                                        leviscaa
                                    </LikePersonUserName>
                                    <LikePersonName>Leviscaa</LikePersonName>
                                </LikePersonUserNameAndName>
                                <Button style={{ width: "9.6rem" }}>
                                    Follow
                                </Button>
                            </Like>
                        ))}
                </Modal>
            )}
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
                <Options onClick={() => setShowPostOptions(true)}>
                    <BiDotsHorizontalRounded fontSize={24} />
                </Options>
            </UserOptions>
            <Images ref={imagesContainer}>
                {activeSlide !== 0 && (
                    <Backward
                        onClick={() =>
                            setActiveSlide((activeSlide) => activeSlide - 1)
                        }
                    />
                )}
                {activeSlide !== images.length - 1 && (
                    <Forward
                        onClick={() =>
                            setActiveSlide((activeSlide) => activeSlide + 1)
                        }
                    />
                )}
                <ImagesTrackWrapper>
                    <ImagesTrack
                        style={{
                            transform: `translateX(-${
                                activeSlide * imagesContainerWidth
                            }px)`,
                        }}
                    >
                        {images.map(({ alt, url }, index) => (
                            <Image
                                draggable={false}
                                key={index}
                                src={url}
                                alt={alt}
                            />
                        ))}
                    </ImagesTrack>
                </ImagesTrackWrapper>
                {images.length !== 1 && (
                    <SliderDots>
                        {images.map((image, index) => (
                            <SliderDot
                                key={index}
                                isActive={index === activeSlide}
                            />
                        ))}
                    </SliderDots>
                )}
            </Images>
            <Content>
                <PostActions>
                    <PostAction onClick={likeUnlike}>
                        {liked ? postActions.unLike : postActions.like}
                    </PostAction>
                    <PostAction>{postActions.comment}</PostAction>
                    <PostAction>{postActions.share}</PostAction>
                    <PostAction>{postActions.bookMark}</PostAction>
                </PostActions>
                {likes.followedPersonLike ? (
                    <NumOfLikesFollowedPersonLike>
                        Liked by <button>{likes.followedPersonLike}</button> and{" "}
                        <button onClick={() => setShowLikesModal(true)}>
                            {likes.count - 1} others
                        </button>
                    </NumOfLikesFollowedPersonLike>
                ) : (
                    <NumOfLikes onClick={() => setShowLikesModal(true)}>
                        {likes.count} likes
                    </NumOfLikes>
                )}
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
                    onChange={(e) => setComment(e.target.value)}
                    value={comment}
                    textInside={Boolean(comment)}
                    placeholder="Add a comment..."
                />
                <PostComment isDisabled={!comment}>Post</PostComment>
            </AddComment>
        </Container>
    );
};
