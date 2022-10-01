import React from "react";
import { Post } from "../Post/Post";
import { Container } from "./styles";

const Posts = () => {
    return (
        <Container>
            <Post
                user={{
                    profilePic:
                        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
                    userName: "tusharhecker1234",
                }}
                images={[
                    "https://i.ibb.co/BwMN3sp/309914231-858282178914365-135185440008970980-n.jpg",
                ]}
                likes={{
                    count: 138,
                }}
                caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit ac lorem quis efficitur. Nullam sed mauris orci. Ut sollicitudin odio quis malesuada eleifend. Curabitur posuere ornare ex, ac facilisis nisi dictum ac. Donec non erat ligula. Donec non dolor sit amet magna tristique commodo. Nulla sodales sem ac leo ullamcorper, sit amet ultricies metus pharetra. Donec iaculis tellus leo, eget tristique tortor dictum nec. Mauris blandit justo id lacus ornare luctus. Duis scelerisque nisl at convallis vehicula. Proin tortor mauris, dignissim sed tellus non, lacinia vulputate enim. Donec quis vulputate tortor. Aliquam ultricies egestas dui, et tincidunt arcu. Vivamus."
            />
        </Container>
    );
};

export default Posts;
