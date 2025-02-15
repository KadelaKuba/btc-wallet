import {Home} from "@app/components/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Profile} from "@app/components/Profile";
import {Login} from "@app/components/Login";

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}
