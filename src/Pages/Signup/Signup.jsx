import React, { useContext, useEffect, useState } from "react";
import { Container } from "../Login/styles";
import SignupDetails from "../../Components/SignupDetails/SignupDetails";
import SignupBirthdayDetails from "../../Components/SignupBirthdayDetails/SignupBirthdayDetails";
import EmailConfirmation from "../../Components/EmailConfirmation/EmailConfirmation";
import { useMutation } from "react-query";
import { signUp } from "../../Api/users.api";
import { AuthTokenDispatchContext } from "../../Context/AuthContext";
import useAuthState from "../../Hooks/useAuthState";

const Signup = () => {
    // const [userDetails, loading] = useAuthState();
    const [signupCredentials, setSignupCredentials] = useState({
        email: "",
        fullName: "",
        userName: "",
        password: "",
        birthday: new Date(),
    });
    const [signupCredsErrors, setSignupCredsErrors] = useState({});
    const [activeStep, setActiveStep] = useState(0);
    const setAuthToken = useContext(AuthTokenDispatchContext);
    const signUpMutation = useMutation(signUp, {
        onSuccess: ({ data }) => {
            setAuthToken(data);
        },
    });
    useEffect(() => {
        document.title = "Sign up • Instagram";
    }, []);
    // useEffect(() => {
    //     if (!loading && userDetails) setActiveStep(2);
    // }, [loading, userDetails]);
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
            }}
        />,
        <EmailConfirmation />,
    ];
    // if (loading) return null;
    return <Container>{stepsComponent[activeStep]}</Container>;
};

export default Signup;
