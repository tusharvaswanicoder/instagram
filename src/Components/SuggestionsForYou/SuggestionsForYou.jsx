import React from "react";
import { NavLink } from "react-router-dom";
import {
    Container,
    Heading,
    HeadingSeeAll,
    SeeAll,
    Suggestion,
    SuggestionFollow,
    SuggestionPersonContext,
    SuggestionPersonUserName,
    SuggestionPersonUserNameContext,
    SuggestionProfilePic,
    Suggestions,
} from "./styles";

const SuggestionsForYou = () => {
    return (
        <Container>
            <HeadingSeeAll>
                <Heading>Suggestions For You</Heading>
                <NavLink to="/explore/people/">
                    <SeeAll>See All</SeeAll>
                </NavLink>
            </HeadingSeeAll>
            <Suggestions>
                <Suggestion>
                    <SuggestionProfilePic />
                    <SuggestionPersonUserNameContext>
                        <SuggestionPersonUserName>
                            8narayanmishra
                        </SuggestionPersonUserName>
                        <SuggestionPersonContext>
                            New to instagram
                        </SuggestionPersonContext>
                    </SuggestionPersonUserNameContext>
                    <SuggestionFollow>Follow</SuggestionFollow>
                </Suggestion>
            </Suggestions>
        </Container>
    );
};

export default SuggestionsForYou;
