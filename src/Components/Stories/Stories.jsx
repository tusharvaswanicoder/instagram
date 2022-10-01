import React from "react";
import {
    ArrowLeft,
    ArrowRight,
    Container,
    Content,
    Story,
    StoryPersonName,
    StoryPersonProfilePic,
} from "./styles";

const Stories = () => {
    return (
        <Container>
            <Content>
                {[...Array(40)]
                    .map((e) => ~~(Math.random() * 40))
                    .map((item, index) => (
                        <Story key={index}>
                            <StoryPersonProfilePic />
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
