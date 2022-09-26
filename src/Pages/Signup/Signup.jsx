import React, { useEffect, useState } from "react";
import { Container } from "../Login/styles";
import SignupDetails from "../../Components/SignupDetails/SignupDetails";
import SignupBirthdayDetails from "../../Components/SignupBirthdayDetails/SignupBirthdayDetails";
import EmailConfirmation from "../../Components/EmailConfirmation/EmailConfirmation";
import {
    passwordValidateSchema,
    userNameValidateSchema,
} from "./validationSchema";
import { useDebounce } from "use-debounce";

const Signup = () => {
    const [signupCredentials, setSignupCredentials] = useState({
        email: "",
        fullName: "",
        userName: "",
        birthday: new Date(),
        password: "",
    });
    const [signupCredsErrors, setSignupCredsErrors] = useState({});
    const [activeStep, setActiveStep] = useState(0);
    useEffect(() => {
        if (signupCredentials.userName) {
            const isUserNameValid = userNameValidateSchema.validate(
                signupCredentials.userName
            );
            if (isUserNameValid.error)
                setSignupCredsErrors({ ...signupCredsErrors, userName: true });
            else
                setSignupCredsErrors({ ...signupCredsErrors, userName: false });
        }
    }, [signupCredentials.userName]);
    useEffect(() => {
        if (signupCredentials.password) {
            const isPasswordValid = passwordValidateSchema.validate(
                signupCredentials.password
            );
            if (isPasswordValid.error)
                setSignupCredsErrors({ ...signupCredsErrors, password: true });
            else
                setSignupCredsErrors({ ...signupCredsErrors, password: false });
        }
    }, [signupCredentials.password]);
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
            next={() => setActiveStep(2)}
        />,
        <EmailConfirmation />,
    ];
    useEffect(() => {
        document.title = "Sign up • Instagram";
    }, []);
    return <Container>{stepsComponent[activeStep]}</Container>;
};

export default Signup;
