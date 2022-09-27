import React, { useEffect, useMemo, useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import months from "../../data/months";
import Button from "../Button/Button";
import checkEligibility from "../../Helpers/checkEligibility.js";
import {
    BirthdayIcon,
    BirthdayRequired,
    BirthdayTitle,
    BirthdayWontBePublic,
    Container,
    Link,
    MonthDayYear,
    MonthDayYearBirthdayRequired,
    NetworkError,
    OwnBirthday,
    Select,
    SelectContainer,
    WhyBirthdayDetails,
} from "./styles";

const SignupBirthdayDetails = ({
    signupCredentials,
    setSignupCredentials,
    signUpMutation,
    prev,
    next,
}) => {
    const month = signupCredentials.birthday.getMonth();
    const monthSelect = useRef();
    const dateSelect = useRef();
    const yearSelect = useRef();
    const [nextDisabled, setNextDisabled] = useState(true);
    useEffect(() => {
        monthSelect.current.value = signupCredentials.birthday.getMonth();
        dateSelect.current.value = signupCredentials.birthday.getDate();
        yearSelect.current.value = signupCredentials.birthday.getFullYear();
    }, []);
    useEffect(() => {
        if (checkEligibility(signupCredentials.birthday))
            setNextDisabled(false);
        else setNextDisabled(true);
    }, [signupCredentials.birthday]);
    const daysInMonth = (anyDateInMonth) =>
        new Date(
            anyDateInMonth.getFullYear(),
            anyDateInMonth.getMonth() + 1,
            0
        ).getDate();
    const allDates = useMemo(() => {
        const dateOptions = [];
        for (
            let day = 1;
            day <= daysInMonth(signupCredentials.birthday);
            day++
        ) {
            dateOptions.push(
                <option key={day} value={day}>
                    {day}
                </option>
            );
        }
        return dateOptions;
    }, [month]);
    const yearOptions = useMemo(() => {
        const yearOptions = [];
        for (let year = 1920; year <= new Date().getFullYear(); year++) {
            yearOptions.push(
                <option key={year} value={year}>
                    {year}
                </option>
            );
        }
        return yearOptions;
    }, []);
    const setYear = ({ target }) => {
        const date = new Date(signupCredentials.birthday);
        date.setFullYear(target.value);
        setSignupCredentials({ ...signupCredentials, birthday: date });
    };
    const setMonth = ({ target }) => {
        const date = new Date(signupCredentials.birthday);
        date.setMonth(target.value);
        setSignupCredentials({ ...signupCredentials, birthday: date });
    };
    const setDate = ({ target }) => {
        const date = new Date(signupCredentials.birthday);
        date.setDate(target.value);
        setSignupCredentials({ ...signupCredentials, birthday: date });
    };
    return (
        <Container>
            <BirthdayIcon />
            <BirthdayTitle>Add Your Birthday</BirthdayTitle>
            <BirthdayWontBePublic>
                This won't be a part of your public profile.
            </BirthdayWontBePublic>
            <WhyBirthdayDetails>
                Why do I need to provide my birthday?
            </WhyBirthdayDetails>
            <MonthDayYearBirthdayRequired>
                <MonthDayYear>
                    <SelectContainer>
                        <BsChevronDown />
                        <Select ref={monthSelect} onChange={setMonth}>
                            {months.map((month, index) => (
                                <option key={index} title={month} value={index}>
                                    {month}
                                </option>
                            ))}
                        </Select>
                    </SelectContainer>
                    <SelectContainer>
                        <BsChevronDown />
                        <Select ref={yearSelect} onChange={setYear}>
                            {yearOptions}
                        </Select>
                    </SelectContainer>
                    <SelectContainer>
                        <BsChevronDown />
                        <Select ref={dateSelect} onChange={setDate}>
                            {allDates}
                        </Select>
                    </SelectContainer>
                </MonthDayYear>
                <BirthdayRequired>
                    You need to enter the date you were born
                </BirthdayRequired>
            </MonthDayYearBirthdayRequired>
            <OwnBirthday>
                Use your own birthday, even if this account is for a business, a
                pet, or something else
            </OwnBirthday>
            <Button
                isDisabled={nextDisabled}
                isLoading={signUpMutation.isLoading}
                onClick={next}
                style={{
                    width: "100%",
                    margin: "1.6rem 0",
                }}
            >
                Next
            </Button>
            <Link onClick={prev}>Go Back</Link>
            {signUpMutation.error &&
                signUpMutation.error.code === "ERR_NETWORK" && (
                    <NetworkError>
                        We couldn't connect to Instagram. Make sure you're
                        connected to the internet and try again.
                    </NetworkError>
                )}
        </Container>
    );
};

export default SignupBirthdayDetails;
