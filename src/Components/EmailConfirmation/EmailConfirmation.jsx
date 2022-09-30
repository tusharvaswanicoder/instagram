import React, { useState } from "react";
import { useMutation } from "react-query";
import { resendVerificationEmail, verifyAccount } from "../../Api/users.api";
import useAuthState from "../../Hooks/useAuthState";
import Button from "../Button/Button";
import {
    Desc,
    EmailResentContainer,
    Error,
    Form,
    Icon,
    IconTitleDesc,
    Input,
    ResendButton,
    Title,
} from "./styles";

const EmailConfirmation = () => {
    const [showEmailResentContainer, setShowEmailResentContainer] =
        useState(false);
    const [userDetails, loading, fetchUserDetailsAgain] = useAuthState();
    const [error, setError] = useState();
    const [confirmationCode, setConfirmationCode] = useState("");
    const verifyAccountMutation = useMutation(verifyAccount, {
        onSuccess: () => fetchUserDetailsAgain(),
        onError: (err) => {
            if (err.code === "ERR_NETWORK")
                setError(
                    "We couldn't connect to Instagram. Make sure you're connected to the internet and try again."
                );
            else if (err.code === "ERR_BAD_REQUEST")
                setError("That code isn't valid. You can request a new one.");
            else
                setError("Some unknown error occured. Please try again later.");
        },
    });
    const resendVerificationEmailMutation = useMutation(
        resendVerificationEmail,
        {
            onSuccess: () => {
                setShowEmailResentContainer(true);
                setTimeout(() => {
                    setShowEmailResentContainer(false);
                }, 5000);
            },
            onError: (err) => {
                if (err.code === "ERR_NETWORK")
                    setError(
                        "We couldn't connect to Instagram. Make sure you're connected to the internet and try again."
                    );
                else
                    setError(
                        "Some unknown error occured. Please try again later."
                    );
            },
        }
    );
    return (
        <>
            {showEmailResentContainer && (
                <EmailResentContainer>
                    We sent the confirmation code to your email
                    {userDetails.email}.
                </EmailResentContainer>
            )}
            <IconTitleDesc>
                <Icon />
                <Title>Enter Confirmation Code</Title>
                <Desc>
                    Enter the confirmation code we sent to {userDetails.email}.{" "}
                    <ResendButton
                        onClick={() => resendVerificationEmailMutation.mutate()}
                    >
                        Resend Code.
                    </ResendButton>
                </Desc>
            </IconTitleDesc>
            <Form>
                <Input
                    type="text"
                    value={confirmationCode}
                    placeholder="Confirmation Code"
                    onChange={({ target }) => setConfirmationCode(target.value)}
                />
                <Button
                    style={{
                        marginTop: "1.6rem",
                        width: "100%",
                    }}
                    isLoading={verifyAccountMutation.isLoading}
                    isDisabled={
                        confirmationCode.length < 6 ||
                        isNaN(Number(confirmationCode))
                    }
                    onClick={() =>
                        verifyAccountMutation.mutate(confirmationCode)
                    }
                >
                    Verify
                </Button>
                {error && <Error>{error}</Error>}
            </Form>
        </>
    );
};

export default EmailConfirmation;
