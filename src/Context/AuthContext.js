import React, { createContext, useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { userInfo } from "../Api/users.api";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
    const [userDetails, setUserDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const fetchUserInfo = () => {
        setLoading(true);
        userInfo().then(({ data }) => {
            setUserDetails(data);
            setLoading(false);
        });
    };
    useEffect(() => {
        if (!loading) {
            if (userDetails) {
                if (userDetails.email_verified) {
                    navigate("/");
                } else {
                    navigate("/accounts/emailsignup");
                }
            } else {
                if (
                    !pathname.includes("login") &&
                    !pathname.includes("emailsignup")
                ) {
                    navigate("/accounts/login");
                }
            }
        }
    }, [loading, userDetails, pathname, navigate]);
    useEffect(() => {
        const authToken = JSON.parse(localStorage.getItem("authToken"));
        if (!authToken) {
            localStorage.removeItem("authToken");
            setUserDetails(null);
            setLoading(false);
            return;
        }
        localStorage.setItem("authToken", JSON.stringify(authToken));
        fetchUserInfo();
    }, []);
    return (
        <AuthContext.Provider value={[userDetails, loading, fetchUserInfo]}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
