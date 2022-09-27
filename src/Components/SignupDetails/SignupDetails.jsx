import React, { useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { Form, InputGroup } from "../../Pages/Login/styles";
import { Desc, Logo, SignupPara, SignupParas } from "./styles";
import debounce from "../../Helpers/debounce";
import {
    emailValidateSchema,
    passwordValidateSchema,
    userNameValidateSchema,
} from "../../Pages/Signup/validationSchema";

const SignupDetails = ({
    signupCredentials,
    setSignupCredentials,
    next,
    signupCredsErrors,
    setSignupCredsErrors,
}) => {
    const validateEmailUsername = useCallback(async (what, value) => {
        const isValid =
            what === "email"
                ? emailValidateSchema.validate(value)
                : userNameValidateSchema.validate(value);
        if (isValid.error)
            setSignupCredsErrors((prev) => ({
                ...prev,
                [what]: true,
            }));
        else {
            const res = await fetch(
                `${
                    process.env.REACT_APP_API_URL
                }/users/validate${what.toLowerCase()}?${what}=${value}`
            );
            const { valid } = await res.json();
            setSignupCredsErrors((prev) => ({
                ...prev,
                [what]: !valid,
            }));
        }
    }, []);
    const validateEmailUsernameDebounced = useMemo(
        () => debounce(validateEmailUsername, 200),
        []
    );
    const validatePassword = (value) => {
        const isValid = passwordValidateSchema.validate(value);
        if (isValid.error)
            setSignupCredsErrors((prev) => ({
                ...prev,
                password: true,
            }));
        else
            setSignupCredsErrors((prev) => ({
                ...prev,
                password: false,
            }));
    };
    const formValidated = () => {
        for (let field in signupCredsErrors)
            if (signupCredsErrors[field]) return true;
        for (let field in signupCredentials)
            if (!signupCredentials[field]) return true;
    };
    return (
        <>
            <Link to="/">
                <Logo
                    alt="instagram"
                    src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
                />
            </Link>
            <Desc>Sign up to see photos and videos from your friends.</Desc>
            <Form>
                <InputGroup>
                    <Input
                        type="email"
                        value={signupCredentials.email}
                        onChange={(value) => {
                            setSignupCredentials({
                                ...signupCredentials,
                                email: value,
                            });
                        }}
                        validator={(value) =>
                            validateEmailUsernameDebounced("email", value)
                        }
                        isError={signupCredsErrors.email}
                        placeholder="Email"
                    />
                    <Input
                        type="text"
                        value={signupCredentials.fullName}
                        onChange={(value) =>
                            setSignupCredentials({
                                ...signupCredentials,
                                fullName: value,
                            })
                        }
                        placeholder="Full Name"
                    />
                    <Input
                        type="text"
                        value={signupCredentials.userName}
                        onChange={(value) =>
                            setSignupCredentials({
                                ...signupCredentials,
                                userName: value,
                            })
                        }
                        validator={(value) =>
                            validateEmailUsernameDebounced("userName", value)
                        }
                        isError={signupCredsErrors.userName}
                        placeholder="Username"
                    />
                    <Input
                        type="password"
                        value={signupCredentials.password}
                        onChange={(value) =>
                            setSignupCredentials({
                                ...signupCredentials,
                                password: value,
                            })
                        }
                        validator={validatePassword}
                        isError={signupCredsErrors.password}
                        placeholder="Password"
                    />
                </InputGroup>
                <SignupParas>
                    <SignupPara>
                        People who use our service may have uploaded your
                        contact information to Instagram.{" "}
                        <a href="/" target="_blank" rel="noreferrer">
                            Learn More
                        </a>
                    </SignupPara>
                    <SignupPara>
                        By signing up, you agree to our{" "}
                        <a href="/" target="_blank" rel="noreferrer">
                            Terms
                        </a>
                        ,{" "}
                        <a href="/" target="_blank" rel="noreferrer">
                            Privacy Policy
                        </a>{" "}
                        and{" "}
                        <a href="/" target="_blank" rel="noreferrer">
                            Cookies Policy
                        </a>
                        .
                    </SignupPara>
                </SignupParas>
                <Button
                    isDisabled={formValidated()}
                    onClick={next}
                    style={{ width: "100%", marginBottom: "2.8rem" }}
                >
                    Sign Up
                </Button>
            </Form>
        </>
    );
};

export default SignupDetails;
