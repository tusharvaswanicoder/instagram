import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { Form, InputGroup } from "../../Pages/Login/styles";
import { Desc, Logo, SignupPara, SignupParas } from "./styles";
import { emailValidateSchema } from "../../Pages/Signup/validationSchema";
import { useDebounce } from "use-debounce";

const SignupDetails = ({
    signupCredentials,
    setSignupCredentials,
    next,
    signupCredsErrors,
    setSignupCredsErrors,
}) => {
    const [email, setEmail] = useState();
    const [debouncedEmail] = useDebounce(email, 200);
    const validateEmail = async () => {
        const isEmailValid = emailValidateSchema.validate(email);
        if (isEmailValid.error)
            setSignupCredsErrors({ ...signupCredsErrors, email: true });
        else {
            const res = await fetch(
                `${process.env.REACT_APP_API_URL}/users/validateemail?email=${email}`
            );
            const { valid } = await res.json();
            setSignupCredsErrors({ ...signupCredsErrors, email: !valid });
        }
    };
    useEffect(() => {
        console.log(debouncedEmail);
        if (typeof debouncedEmail === "string") validateEmail();
    }, [debouncedEmail]);
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
                        onChange={(value) =>
                            setSignupCredentials({
                                ...signupCredentials,
                                email: value,
                            })
                        }
                        isError={signupCredsErrors.email}
                        placeholder="Email"
                        onBlur={({ target }) => {
                            setEmail(target.value);
                            target.addEventListener("keyup", (e) =>
                                setEmail(e.target.value)
                            );
                        }}
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
