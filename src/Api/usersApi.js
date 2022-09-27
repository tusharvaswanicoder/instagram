import axios from "axios";

const users = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/users`,
    headers: {
        "Content-Type": "application/json",
    },
});

export const signUp = async (userData) => {
    return await users.post("/", userData);
};
