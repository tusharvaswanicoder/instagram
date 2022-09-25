import { Route, Routes } from "react-router-dom";
import "./App.css";
import Accounts from "./Layout/Accounts";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";

function App() {
    return (
        <Routes>
            <Route path="/accounts" element={<Accounts />}>
                <Route path="login" element={<Login />} />
                <Route path="emailsignup" element={<Signup />} />
            </Route>
        </Routes>
    );
}

export default App;
