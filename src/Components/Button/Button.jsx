import React from "react";
import Loading from "../Loading/Loading";
import { Container, Content, LoadingContainer } from "./styles";

const Button = ({ style, onClick, children, isDisabled, isLoading }) => {
    return (
        <Container
            isDisabled={isDisabled}
            style={style}
            onClick={
                isDisabled || !onClick
                    ? () => {}
                    : (e) => {
                          e.preventDefault();
                          onClick();
                      }
            }
        >
            <Content isLoading={isLoading}>{children}</Content>
            {isLoading && (
                <LoadingContainer>
                    <Loading
                        style={{
                            width: "1.8rem",
                            height: "1.8rem",
                        }}
                    />
                </LoadingContainer>
            )}
        </Container>
    );
};

export default Button;
