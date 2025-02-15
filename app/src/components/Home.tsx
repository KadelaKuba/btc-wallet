import {NavLink} from "react-router-dom";

export function Home() {
    return (
        <>
            <NavLink to="/login" end>
                Please login!
            </NavLink>
        </>
    );
}