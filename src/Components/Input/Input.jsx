import React, { useState } from "react";
import {
    Container,
    Content,
    Placeholder,
    ShowHidePassword,
    ValidInvalidIcon,
} from "./styles";

const Input = ({
    style,
    inputStyle,
    placeholder,
    onChange,
    type,
    value,
    isError,
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
                {...inputProps}
            />
            {typeof isError === "boolean" && (
                <ValidInvalidIcon
                    isError={isError}
                    style={type === "password" ? { margin: "0" } : {}}
                />
            )}
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
