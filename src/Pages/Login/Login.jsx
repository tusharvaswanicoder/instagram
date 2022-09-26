import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import { Container, ForgotPassword, Form, InputGroup, Logo } from "./styles";

const Login = () => {
    const [loginCredentials, setLoginCredentials] = useState({
        email: "",
        password: "",
    });
    useEffect(() => {
        document.title = "Log in • Instagram";
    }, []);
    return (
        <Container>
            <Link to="/">
                <Logo
                    alt="instagram"
                    src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
                />
            </Link>
            <Form>
                <InputGroup>
                    <Input
                        type="text"
                        value={loginCredentials.email}
                        onChange={(value) =>
                            setLoginCredentials({
                                ...loginCredentials,
                                email: value,
                            })
                        }
                        placeholder="Username or email"
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
                <Button style={{ width: "100%", margin: "1.4rem 0px 0.8rem" }}>
                    Log In
                </Button>
                <ForgotPassword>
                    <NavLink to="/">Forgot password?</NavLink>
                </ForgotPassword>
            </Form>
        </Container>
    );
};

export default Login;
