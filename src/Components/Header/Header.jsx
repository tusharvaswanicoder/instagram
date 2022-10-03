import React, { useState } from "react";
import {
    Container,
    Content,
    HeaderLink,
    HeaderLinks,
    Logo,
    LogoVariant,
    ProfileButton,
    ProfileButtonMenu,
    ProfileButtonMenuLink,
    SearchBox,
    SearchBoxIcon,
    SearchBoxIconPlaceholder,
    SearchBoxInput,
    SearchBoxPlaceholder,
    Variant,
} from "./styles";
import { FiChevronDown } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";
import headerLinks from "../../data/headerLinks";
import profileMenuButtonIcons from "../../data/profileMenuButtonIcons";
import CreateNewPost from "../../Pages/CreateNewPost/CreateNewPost";

const Header = () => {
    const { pathname } = useLocation();
    const [profileMenuVisible, setProfileMenuVisible] = useState(false);
    const [showCreatePost, setShowCreatePost] = useState(false);
    const headerClickFunctions = {
        showNewPostModal: () => setShowCreatePost(true),
        showActivityFeed: () => console.log("showActivityFeed"),
    };
    const profileMenuButtons = [
        {
            to: "/",
            name: "Profile",
            icon: "profile",
        },
        {
            to: "/",
            name: "Saved",
            icon: "saved",
        },
        {
            to: "/",
            name: "Settings",
            icon: "settings",
        },
        {
            to: "/",
            name: "Report a problem",
            icon: "reportAProblem",
        },
    ];
    const openProfileMenu = (e) => {
        e.stopPropagation();
        setProfileMenuVisible(true);
        document.body.addEventListener("click", () => {
            setProfileMenuVisible(false);
            document.body.removeEventListener("click", () => {});
        });
    };
    return (
        <Container>
            {showCreatePost && (
                <CreateNewPost close={() => setShowCreatePost(false)} />
            )}
            <Content>
                <LogoVariant>
                    <NavLink to="/">
                        <Logo
                            src={`${process.env.PUBLIC_URL}/assets/logo.svg`}
                        />
                    </NavLink>
                    <Variant>
                        <FiChevronDown fontSize={20} />
                    </Variant>
                </LogoVariant>
                <SearchBox>
                    <SearchBoxInput />
                    <SearchBoxIconPlaceholder>
                        <SearchBoxIcon>
                            <IoIosSearch fontSize={20} />
                        </SearchBoxIcon>
                        <SearchBoxPlaceholder>Search</SearchBoxPlaceholder>
                    </SearchBoxIconPlaceholder>
                </SearchBox>
                <HeaderLinks>
                    {headerLinks.map(
                        ({ to, icon, activeIcon, click }, index) => {
                            const correctIcon =
                                (to === pathname && !profileMenuVisible) ||
                                (click === "showNewPostModal" && showCreatePost)
                                    ? activeIcon
                                    : icon;
                            return to ? (
                                <NavLink to={to} key={index}>
                                    <HeaderLink>{correctIcon}</HeaderLink>
                                </NavLink>
                            ) : (
                                <HeaderLink
                                    key={index}
                                    onClick={headerClickFunctions[click]}
                                >
                                    {correctIcon}
                                </HeaderLink>
                            );
                        }
                    )}
                    <ProfileButton
                        profileMenuVisible={profileMenuVisible}
                        onClick={openProfileMenu}
                    />
                </HeaderLinks>
                {profileMenuVisible && (
                    <ProfileButtonMenu>
                        {profileMenuButtons.map(({ to, name, icon }, index) => (
                            <NavLink to={to} key={index}>
                                <ProfileButtonMenuLink>
                                    {profileMenuButtonIcons[icon]}
                                    {name}
                                </ProfileButtonMenuLink>
                            </NavLink>
                        ))}
                        <ProfileButtonMenuLink
                            style={{
                                borderTop: "1px solid rgb(var(--ig-separator))",
                            }}
                        >
                            Logout
                        </ProfileButtonMenuLink>
                    </ProfileButtonMenu>
                )}
            </Content>
        </Container>
    );
};

export default Header;
