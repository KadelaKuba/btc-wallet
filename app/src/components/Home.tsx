import {Box, Button, Paper, Typography} from "@mui/material";
import {useAuth0} from "@auth0/auth0-react";

export function Home() {
    const { loginWithRedirect } = useAuth0();

    const handleLogin = async () => {
        await loginWithRedirect({
            appState: {
                returnTo: "/account",
            },
        });
    };

    return (
        <Paper>
            <Box p={4} justifyContent="center" alignItems="center">
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                    <Typography variant="h4">Bitcoin peněženka</Typography>
                    <Box>
                        <img src="/assets/bitcoinWallet.png" width={70} alt="BTC peněženka"/>
                    </Box>
                </Box>
                <Typography>Pro zobrazení stavu vašich BTC se prosím přihlaste!</Typography>
                <Box pt={2}>
                    <Button variant="contained" onClick={handleLogin}>Přihlásit</Button>
                </Box>
            </Box>
        </Paper>
    );
}