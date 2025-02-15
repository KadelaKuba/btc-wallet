import {useAuth0} from "@auth0/auth0-react";
import {BtcBalance} from "@app/components/BtcBalance";
import {Box, Button, Paper, Typography} from "@mui/material";

export function Account() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const { logout } = useAuth0();

    const handleLogout = async () => {
        logout({logoutParams: {returnTo: window.location.origin}})
    };

    if (isLoading) {
        return <Box>Načítání ...</Box>;
    }

    return (
        isAuthenticated && (
            <Paper>
                <Box p={4}>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="h4">{user?.nickname}</Typography>
                        <Button variant="outlined" onClick={handleLogout}>
                            Odhlásit
                        </Button>
                    </Box>
                    <BtcBalance/>
                </Box>
            </Paper>
        )
    );
}