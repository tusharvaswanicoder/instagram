import React from "react";
import Account from "../../Components/Account/Account";
import FooterHome from "../../Components/FooterHome/FooterHome";
import Posts from "../../Components/Posts/Posts";
import Stories from "../../Components/Stories/Stories";
import SuggestionsForYou from "../../Components/SuggestionsForYou/SuggestionsForYou";
import { Container, Left, Right } from "./styles";

const Home = () => {
    return (
        <Container>
            <Left>
                <Stories />
                <Posts />
            </Left>
            <Right>
                <Account />
                <SuggestionsForYou />
                <FooterHome />
            </Right>
        </Container>
    );
};

export default Home;
