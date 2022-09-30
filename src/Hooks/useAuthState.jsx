import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const useAuthState = () => useContext(AuthContext);

export default useAuthState;
