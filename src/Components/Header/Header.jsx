import React from "react";
import {
    Container,
    Content,
    HeaderLink,
    HeaderLinks,
    Logo,
    LogoVariant,
    ProfileButton,
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

const Header = () => {
    const { pathname } = useLocation();
    const headerClickFunctions = {
        showNewPostModal: () => console.log("showNewPostModal"),
        showActivityFeed: () => console.log("showActivityFeed"),
    };
    return (
        <Container>
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
                            return to ? (
                                <NavLink to={to} key={index}>
                                    <HeaderLink>
                                        {to === pathname ? activeIcon : icon}
                                    </HeaderLink>
                                </NavLink>
                            ) : (
                                <HeaderLink
                                    key={index}
                                    onClick={headerClickFunctions[click]}
                                >
                                    {to === pathname ? activeIcon : icon}
                                </HeaderLink>
                            );
                        }
                    )}
                    <ProfileButton />
                </HeaderLinks>
            </Content>
        </Container>
    );
};

export default Header;
