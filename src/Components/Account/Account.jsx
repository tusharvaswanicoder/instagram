import React from "react";
import useAuthState from "../../Hooks/useAuthState";
import { Container, Name, NameUserName, ProfilePic, UserName } from "./styles";

const Account = () => {
    const [userDetails, loading] = useAuthState();
    if (loading) return null;
    return (
        <Container>
            <ProfilePic src={userDetails.profile_pic} />
            <NameUserName>
                <UserName>{userDetails.user_name}</UserName>
                <Name>{userDetails.full_name}</Name>
            </NameUserName>
        </Container>
    );
};

export default Account;
