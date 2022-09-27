import React, { useEffect, useState } from "react";
import { Container } from "../Login/styles";
import SignupDetails from "../../Components/SignupDetails/SignupDetails";
import SignupBirthdayDetails from "../../Components/SignupBirthdayDetails/SignupBirthdayDetails";
import EmailConfirmation from "../../Components/EmailConfirmation/EmailConfirmation";
import {
    passwordValidateSchema,
    userNameValidateSchema,
} from "./validationSchema";
import { useMutation } from "react-query";
import { signUp } from "../../Api/usersApi";

const Signup = () => {
    const [signupCredentials, setSignupCredentials] = useState({
        email: "",
        fullName: "",
        userName: "",
        password: "",
        birthday: new Date(),
    });
    const [signupCredsErrors, setSignupCredsErrors] = useState({});
    const [activeStep, setActiveStep] = useState(0);
    const signUpMutation = useMutation(signUp);
    const stepsComponent = [
        <SignupDetails
            signupCredentials={signupCredentials}
            setSignupCredentials={setSignupCredentials}
            signupCredsErrors={signupCredsErrors}
            setSignupCredsErrors={setSignupCredsErrors}
            next={() => setActiveStep(1)}
        />,
        <SignupBirthdayDetails
            signupCredentials={signupCredentials}
            setSignupCredentials={setSignupCredentials}
            prev={() => setActiveStep(0)}
            signUpMutation={signUpMutation}
            next={async () => {
                signUpMutation.mutate(signupCredentials);
                // setActiveStep(2);
            }}
        />,
        <EmailConfirmation />,
    ];
    useEffect(() => {
        document.title = "Sign up • Instagram";
    }, []);
    return <Container>{stepsComponent[activeStep]}</Container>;
};

export default Signup;
