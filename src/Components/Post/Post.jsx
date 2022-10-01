import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import ProfilePicGradientBorder from "../ProfilePicGradientBorder/ProfilePicGradientBorder";
import { Container, Options, User, UserName, UserOptions } from "./styles";

export const Post = ({ user, images }) => {
    return (
        <Container>
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
        </Container>
    );
};
