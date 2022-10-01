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
            />
        </Container>
    );
};

export default Posts;
