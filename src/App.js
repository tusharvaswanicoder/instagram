import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Accounts from "./Layout/Accounts";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<>Home</>} />
                <Route path="/accounts" element={<Accounts />}>
                    <Route path="login" element={<Login />} />
                    <Route path="emailsignup" element={<Signup />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
