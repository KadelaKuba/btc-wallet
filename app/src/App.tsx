import {Home} from "@app/components/Home";
import {Route, Routes} from "react-router-dom";
import {Account} from "@app/components/Account";

export function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<Account/>}/>
        </Routes>
    )
}
