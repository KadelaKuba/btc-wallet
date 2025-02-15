import {useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {satoshisToBitcoin} from "bitcoin-conversion";
import {Box, Typography} from "@mui/material";

export function BtcBalance() {
    const [price, setPrice] = useState(0);
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    fetch('https://proxy.corsfix.com/?https://www.blockonomics.co/api/searchhistory', {
        headers: {
            Authorization: 'Bearer ' + import.meta.env.VITE_BLOCKONOMICS_API_KEY,
            'Content-Type': 'application/json',
        },
        method: "POST",
        body: JSON.stringify({"addr": import.meta.env.VITE_BTC_PUBLIC_KEY})
    })
        .then(resp => resp.json())
        .then(function (response) {
            const numberOfSatoshi = response.history.reduce((accumulator, currentValue) => accumulator + currentValue.value, 0)
            const btcPrice = satoshisToBitcoin(numberOfSatoshi);

            setPrice(btcPrice);
        })

    return (
        <Box pt={3}>
            <Typography>
                Aktuální stav: {price} <strong>BTC</strong>
            </Typography>
        </Box>
    );
}