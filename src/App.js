import { Route, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Header from "./Components/Header/Header";
import Accounts from "./Layout/Accounts";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";

const Main = styled.div`
    min-height: calc(100vh - 6rem);
    margin-top: 6rem;
`;

function App() {
    const { pathname } = useLocation();
    return (
        <>
            {!pathname.includes("accounts") && <Header />}
            <Routes>
                <Route
                    path="/"
                    element={
                        <Main>
                            <Home />
                        </Main>
                    }
                />
                <Route path="/accounts" element={<Accounts />}>
                    <Route path="login" element={<Login />} />
                    <Route path="emailsignup" element={<Signup />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
