import React from "react";
import ProfilePicGradientBorder from "../ProfilePicGradientBorder/ProfilePicGradientBorder";
import {
    ArrowLeft,
    ArrowRight,
    Container,
    Content,
    Story,
    StoryPersonName,
} from "./styles";

const Stories = () => {
    return (
        <Container>
            <Content>
                {[...Array(40)]
                    .map(() => ~~(Math.random() * 40))
                    .map((item, index) => (
                        <Story key={index}>
                            <ProfilePicGradientBorder
                                size={5.6}
                                whiteSpacing={0.6}
                                gradientSize={0.4}
                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                                style={{ margin: "0.4rem 0 0.8rem 0" }}
                            />
                            <StoryPersonName>ai.ayush_singh</StoryPersonName>
                        </Story>
                    ))}
            </Content>
            <ArrowLeft />
            <ArrowRight />
        </Container>
    );
};

export default Stories;
