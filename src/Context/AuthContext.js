import React, { createContext, useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { userInfo } from "../Api/users.api";

export const AuthContext = createContext(null);
export const AuthTokenDispatchContext = createContext(null);

const AuthContextProvider = ({ children }) => {
    const [userDetails, setUserDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [authToken, setAuthToken] = useState(
        JSON.parse(localStorage.getItem("authToken"))
    );
    const fetchUserInfo = () => {
        setLoading(true);
        userInfo(setAuthToken).then(({ data }) => {
            setUserDetails(data);
            setLoading(false);
        });
    };
    useEffect(() => {
        if (!loading) {
            if (userDetails) {
                if (userDetails.email_verified) {
                } else {
                    navigate("/accounts/emailsignup");
                }
            } else {
            }
        }
    }, [loading, userDetails, pathname, navigate]);
    useEffect(() => {
        if (!authToken) {
            localStorage.removeItem("authToken");
            setUserDetails(null);
            setLoading(false);
            return;
        }
        localStorage.setItem("authToken", JSON.stringify(authToken));
        fetchUserInfo();
    }, [authToken]);
    return (
        <AuthContext.Provider value={[userDetails, loading, fetchUserInfo]}>
            <AuthTokenDispatchContext.Provider value={setAuthToken}>
                {children}
            </AuthTokenDispatchContext.Provider>
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
