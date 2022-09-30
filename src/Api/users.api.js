import axios from "axios";

const config = {
    baseURL: `${process.env.REACT_APP_API_URL}/users`,
    headers: {
        "Content-Type": "application/json",
    },
};

const users = axios.create(config);
const authenticatedUsers = axios.create(config);

authenticatedUsers.interceptors.request.use(
    (config) => {
        const authToken = localStorage.getItem("authToken");
        if (authToken) {
            const accessToken = JSON.parse(authToken).accessToken;
            config.headers.Authorization = `Bearer ${accessToken}`;
            return config;
        }
    },
    (error) => Promise.reject(error)
);

authenticatedUsers.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response.status === 401 && !error.config.retry) {
            error.config.retry = true;
            const accessToken = await refreshAccessToken();
            localStorage.setItem(
                "authToken",
                JSON.stringify({
                    ...JSON.parse(localStorage.getItem("authToken")),
                    accessToken,
                })
            );
            return authenticatedUsers(error.config);
        }
        return Promise.reject(error);
    }
);

export const signUp = async (userData) => {
    return await users.post("/", userData);
};

export const login = async (loginData) => {
    return await users.post("/login", loginData);
};

export const userInfo = async () => {
    return await authenticatedUsers.get("/info");
};

export const resendVerificationEmail = async () => {
    return await authenticatedUsers.post("/resendverificationemail");
};

export const verifyAccount = async (confirmationCode) => {
    return await authenticatedUsers.patch("/verifyaccount", {
        confirmationCode,
    });
};

const refreshAccessToken = async () => {
    const res = await users.post("/refreshAccessToken", {
        refreshToken: JSON.parse(localStorage.getItem("authToken"))
            .refreshToken,
    });
    return res.data.accessToken;
};
