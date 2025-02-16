import {useAuth0} from "@auth0/auth0-react";
import {BtcBalance} from "@app/components/BtcBalance";
import {Box, Button, CircularProgress, Divider, Typography} from "@mui/material";
import {AppPaper} from "@app/components/AppPaper";

export function Account() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const { logout } = useAuth0();

    const handleLogout = async () => {
        logout({logoutParams: {returnTo: window.location.origin}})
    };

    if (isLoading) {
        return (
            <Box p={5} display="flex" justifyContent="center" alignItems="center">
                <CircularProgress/>
            </Box>
        );
    }

    return (
        isAuthenticated && (
            <AppPaper>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} >
                    <Typography variant="h5">{user?.nickname}</Typography>
                    <Button size="small" variant="outlined" onClick={handleLogout}>
                        Odhlásit
                    </Button>
                </Box>
                <Divider/>
                <BtcBalance/>
            </AppPaper>
        )
    );
}