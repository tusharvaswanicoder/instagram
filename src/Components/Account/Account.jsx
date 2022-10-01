import React from "react";
import { Container, Name, NameUserName, ProfilePic, UserName } from "./styles";

const Account = () => {
    return (
        <Container>
            <ProfilePic />
            <NameUserName>
                <UserName>tushar.coder</UserName>
                <Name>Tushar Vaswani</Name>
            </NameUserName>
        </Container>
    );
};

export default Account;
