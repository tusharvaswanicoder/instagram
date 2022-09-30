import React from "react";
import useAuthState from "../../Hooks/useAuthState";
import Button from "../Button/Button";
import {
    Desc,
    Form,
    Icon,
    IconTitleDesc,
    Input,
    ResendButton,
    Title,
} from "./styles";

const EmailConfirmation = () => {
    const [userDetails] = useAuthState();
    return (
        <>
            <IconTitleDesc>
                <Icon />
                <Title>Enter Confirmation Code</Title>
                <Desc>
                    Enter the confirmation code we sent to {userDetails.email}.{" "}
                    <ResendButton>Resend Code.</ResendButton>
                </Desc>
            </IconTitleDesc>
            <Form>
                <Input type="text" placeholder="Confirmation Code" />
                <Button
                    style={{
                        marginTop: "1.6rem",
                        width: "100%",
                    }}
                >
                    Sign Up
                </Button>
            </Form>
        </>
    );
};

export default EmailConfirmation;
