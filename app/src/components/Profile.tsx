import {useAuth0} from "@auth0/auth0-react";
import {BtcWallet} from "@app/components/BtcWallet";
import {Logout} from "@app/components/Logout";

export function Profile() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    console.log(isAuthenticated);
    if (isLoading) {
        return <div>Načítání ...</div>;
    }

    return (
        isAuthenticated && (
            <>
                <div>
                    <h2>{user.name}</h2>
                </div>
                <p>
                    <BtcWallet/>
                </p>
                <Logout/>
            </>
        )
    );
}