import {Home} from "@app/components/Home";
import {Route, Routes} from "react-router-dom";
import {Account} from "@app/components/Account";
import {withAuthenticationRequired} from "@auth0/auth0-react";

const ProtectedRoute = ({ component, ...args }) => {
    const Component = withAuthenticationRequired(component, args);

    return <Component />;
};

export function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/account" element={<ProtectedRoute component={Account} />}/>
        </Routes>
    )
}
