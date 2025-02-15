import {useState} from "react";
import {satoshisToBitcoin} from "bitcoin-conversion";
import {Box, Skeleton, Typography} from "@mui/material";

export function BtcBalance() {
    const [price, setPrice] = useState<undefined|number>(undefined);

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
        });

    return (
        <Box pt={3}>
            {price === undefined ? (
                <Skeleton variant="text" sx={{fontSize: '1rem'}}/>
            ) : (
                <Typography>
                    Aktuální stav: {price} <strong>BTC</strong>
                </Typography>
            )}
        </Box>
    );
}