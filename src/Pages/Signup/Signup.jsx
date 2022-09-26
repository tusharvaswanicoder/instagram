import React, { useEffect, useState } from "react";
import { Container } from "../Login/styles";
import SignupDetails from "../../Components/SignupDetails/SignupDetails";
import SignupBirthdayDetails from "../../Components/SignupBirthdayDetails/SignupBirthdayDetails";
import EmailConfirmation from "../../Components/EmailConfirmation/EmailConfirmation";

const Signup = () => {
    const [signupCredentials, setSignupCredentials] = useState({
        email: "",
        fullName: "",
        userName: "",
        birthday: new Date(),
        password: "",
    });
    const [activeStep, setActiveStep] = useState(0);
    const stepsComponent = [
        <SignupDetails
            signupCredentials={signupCredentials}
            setSignupCredentials={setSignupCredentials}
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
