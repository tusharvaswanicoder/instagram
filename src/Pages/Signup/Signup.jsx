import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import { Container, Form, InputGroup } from "../Login/styles";
import { Desc, Logo, SignupPara, SignupParas } from "./styles";

const Signup = () => {
    const [loginCredentials, setLoginCredentials] = useState({
        email: "",
        fullName: "",
        userName: "",
        birthday: "",
        password: "",
    });
    return (
        <Container>
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
                        value={loginCredentials.email}
                        onChange={(value) =>
                            setLoginCredentials({
                                ...loginCredentials,
                                email: value,
                            })
                        }
                        placeholder="Email"
                    />
                    <Input
                        type="text"
                        value={loginCredentials.email}
                        onChange={(value) =>
                            setLoginCredentials({
                                ...loginCredentials,
                                email: value,
                            })
                        }
                        placeholder="Full Name"
                    />
                    <Input
                        type="text"
                        value={loginCredentials.email}
                        onChange={(value) =>
                            setLoginCredentials({
                                ...loginCredentials,
                                email: value,
                            })
                        }
                        placeholder="Username"
                    />
                    <Input
                        type="password"
                        value={loginCredentials.password}
                        onChange={(value) =>
                            setLoginCredentials({
                                ...loginCredentials,
                                password: value,
                            })
                        }
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
                <Button style={{ width: "100%", marginBottom: "2.8rem" }}>
                    Sign Up
                </Button>
            </Form>
        </Container>
    );
};

export default Signup;
