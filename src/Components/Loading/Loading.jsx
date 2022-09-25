import React from "react";
import { Container } from "./styles";

const Loading = ({ style }) => {
    return (
        <Container style={style} viewBox="0 0 100 100">
            <rect
                fill="#fafafa"
                height="10"
                opacity=".125"
                rx="5"
                ry="5"
                transform="rotate(-45 50 50)"
                width="28"
                x="67"
                y="45"
            />
            <rect
                fill="#fafafa"
                height="10"
                opacity=".25"
                rx="5"
                ry="5"
                width="28"
                x="67"
                y="45"
            />
            <rect
                fill="#fafafa"
                height="10"
                opacity=".375"
                rx="5"
                ry="5"
                transform="rotate(45 50 50)"
                width="28"
                x="67"
                y="45"
            />
            <rect
                fill="#fafafa"
                height="10"
                opacity=".5"
                rx="5"
                ry="5"
                transform="rotate(90 50 50)"
                width="28"
                x="67"
                y="45"
            />
            <rect
                fill="#fafafa"
                height="10"
                opacity=".625"
                rx="5"
                ry="5"
                transform="rotate(135 50 50)"
                width="28"
                x="67"
                y="45"
            />
            <rect
                fill="#fafafa"
                height="10"
                opacity=".75"
                rx="5"
                ry="5"
                transform="rotate(180 50 50)"
                width="28"
                x="67"
                y="45"
            />
            <rect
                fill="#fafafa"
                height="10"
                opacity=".875"
                rx="5"
                ry="5"
                transform="rotate(225 50 50)"
                width="28"
                x="67"
                y="45"
            />
        </Container>
    );
};

export default Loading;
