import React, { useEffect, useState } from "react";
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
    onChange = () => {},
    type,
    value,
    inputRef,
    isError,
    validator,
    ...inputProps
}) => {
    const [shouldTransform, setShouldTransform] = useState(Boolean(value));
    const [startValidation, setStartValidation] = useState(false);
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
    useEffect(() => {
        if (startValidation) {
            validator(value);
        }
    }, [startValidation, value]);
    return (
        <Container style={style}>
            <Placeholder shouldTransform={shouldTransform} style={inputStyle}>
                {placeholder}
            </Placeholder>
            <Content
                ref={inputRef}
                shouldTransform={shouldTransform}
                value={value}
                type={isPasswordVisible ? "text" : type}
                onChange={changeInputValue}
                onBlur={(e) =>
                    validator && e.target.value && setStartValidation(true)
                }
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
