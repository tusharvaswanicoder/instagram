import React, { useEffect, useMemo, useRef } from "react";
import { BsChevronDown } from "react-icons/bs";
import months from "../../data/months";
import Button from "../Button/Button";
import {
    BirthdayIcon,
    BirthdayRequired,
    BirthdayTitle,
    BirthdayWontBePublic,
    Container,
    Link,
    MonthDayYear,
    MonthDayYearBirthdayRequired,
    OwnBirthday,
    Select,
    SelectContainer,
    WhyBirthdayDetails,
} from "./styles";

const SignupBirthdayDetails = ({
    signupCredentials,
    setSignupCredentials,
    prev,
    next,
}) => {
    const month = signupCredentials.birthday.getMonth();
    const monthSelect = useRef();
    const dateSelect = useRef();
    const yearSelect = useRef();
    useEffect(() => {
        monthSelect.current.value = signupCredentials.birthday.getMonth();
        dateSelect.current.value = signupCredentials.birthday.getDate();
        yearSelect.current.value = signupCredentials.birthday.getFullYear();
    }, []);
    const daysInMonth = (anyDateInMonth) =>
        new Date(
            anyDateInMonth.getFullYear(),
            anyDateInMonth.getMonth() + 1,
            0
        ).getDate();
    const allDates = useMemo(() => {
        console.log("allDates executed!");
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
        console.log("yearOptions executed!");
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
        const date = signupCredentials.birthday;
        date.setFullYear(target.value);
        setSignupCredentials({ ...signupCredentials, birthday: date });
    };
    const setMonth = ({ target }) => {
        const date = signupCredentials.birthday;
        date.setMonth(target.value);
        setSignupCredentials({ ...signupCredentials, birthday: date });
    };
    const setDate = ({ target }) => {
        const date = signupCredentials.birthday;
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
                onClick={next}
                style={{
                    width: "100%",
                    margin: "1.6rem 0",
                }}
            >
                Next
            </Button>
            <Link onClick={prev}>Go Back</Link>
        </Container>
    );
};

export default SignupBirthdayDetails;
