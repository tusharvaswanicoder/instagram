import React, { useState } from "react";
import { Container, Content, Placeholder, ShowHidePassword } from "./styles";

const Input = ({
    style,
    inputStyle,
    placeholder,
    onChange,
    type,
    value,
    inputProps = {},
}) => {
    const [shouldTransform, setShouldTransform] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const changeInputValue = ({ target }) => {
        const { value } = target;
        onChange(value);
        if (value) {
            setShouldTransform(true);
            return;
        }
        setShouldTransform(false);
    };
    return (
        <Container style={style}>
            <Placeholder shouldTransform={shouldTransform} style={inputStyle}>
                {placeholder}
            </Placeholder>
            <Content
                shouldTransform={shouldTransform}
                value={value}
                type={isPasswordVisible ? "text" : type}
                onChange={changeInputValue}
            />
            {type === "password" && (
                <ShowHidePassword
                    onClick={(e) => {
                        e.preventDefault();
                        setIsPasswordVisible(!isPasswordVisible);
                    }}
                >
                    {isPasswordVisible ? "Hide" : "Show"}
                </ShowHidePassword>
            )}
        </Container>
    );
};

export default Input;
