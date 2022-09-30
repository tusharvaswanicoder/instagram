import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { Link, NavLink } from "react-router-dom";
import { login } from "../../Api/users.api";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import useAuthState from "../../Hooks/useAuthState";
import { Container, ForgotPassword, Form, InputGroup, Logo } from "./styles";

const Login = () => {
    const [userDetails, loading, fetchUserDetailsAgain] = useAuthState();
    const [loginCredentials, setLoginCredentials] = useState({
        emailOrUserName: "",
        password: "",
    });
    const loginMutation = useMutation(login, {
        onSuccess: ({ data }) => {
            localStorage.setItem("authToken", JSON.stringify(data));
            fetchUserDetailsAgain();
        },
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
                        value={loginCredentials.emailOrUserName}
                        onChange={(value) =>
                            setLoginCredentials({
                                ...loginCredentials,
                                emailOrUserName: value,
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
                <Button
                    isDisabled={
                        !loginCredentials.emailOrUserName ||
                        !loginCredentials.password
                    }
                    isLoading={loginMutation.isLoading}
                    style={{ width: "100%", margin: "1.4rem 0px 0.8rem" }}
                    onClick={() => loginMutation.mutate(loginCredentials)}
                >
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
