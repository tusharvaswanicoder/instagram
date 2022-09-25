import React from "react";
import { NavLink } from "react-router-dom";
import {
    Container,
    GetTheApp,
    GetTheAppBadge,
    GetTheAppBadges,
    GetTheAppTitle,
    LoginSignupJump,
} from "./styles";

const LoginSignupCommon = ({ pathname }) => {
    return (
        <Container>
            <LoginSignupJump>
                {pathname.includes("login")
                    ? "Don't have an account?"
                    : "Have an account?"}{" "}
                <NavLink
                    to={`/accounts/${
                        pathname.includes("login") ? "emailsignup" : "login"
                    }`}
                >
                    {pathname.includes("login") ? "Sign up" : "Log in"}
                </NavLink>
            </LoginSignupJump>
            <GetTheApp>
                <GetTheAppTitle>Get the app.</GetTheAppTitle>
                <GetTheAppBadges>
                    <a
                        href="https://apps.apple.com/app/instagram/id389801252?vt=lo"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <GetTheAppBadge
                            alt="Download on the app store"
                            src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                        />
                    </a>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DD6047D8B-1E6B-4641-BD7F-9AC2561EC3AA%26utm_content%3Dlo%26utm_medium%3Dbadge"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <GetTheAppBadge
                            alt="Get it on google play"
                            src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                        />
                    </a>
                </GetTheAppBadges>
            </GetTheApp>
        </Container>
    );
};

export default LoginSignupCommon;
