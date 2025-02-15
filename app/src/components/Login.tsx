import {useAuth0} from "@auth0/auth0-react";

export function Login() {
    const { loginWithRedirect } = useAuth0();

    const handleLogin = async () => {
        await loginWithRedirect({
            appState: {
                returnTo: "/profile",
            },
        });
    };

    return <button onClick={handleLogin}>Log In</button>;
}