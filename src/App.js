import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/authComponents/signin";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/signin" element={<SignIn />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}