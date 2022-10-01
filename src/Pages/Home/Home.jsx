import React from "react";
import Account from "../../Components/Account/Account";
import Stories from "../../Components/Stories/Stories";
import { Container, Left, Right } from "./styles";

const Home = () => {
    return (
        <Container>
            <Left>
                <Stories />
            </Left>
            <Right>
                <Account />
            </Right>
        </Container>
    );
};

export default Home;
