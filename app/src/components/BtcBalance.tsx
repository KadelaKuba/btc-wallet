import {satoshisToBitcoin} from "bitcoin-conversion";
import {Box, Skeleton, Typography} from "@mui/material";
import {useBitcoinHistory} from "@app/hooks/useBitcoinHistory";

export function BtcBalance() {
    const {getHistoryQuery, getPriceInCzkQuery} = useBitcoinHistory();

    if (getHistoryQuery.isPending || getPriceInCzkQuery.isPending) {
        return (
            <Box pt={3}>
                <Skeleton variant="text" sx={{fontSize: '1rem'}}/>
            </Box>
        );
    }

    const totalAmountOfSatoshi = getHistoryQuery.data.history.reduce((accumulator, currentValue) => accumulator + currentValue.value, 0)
    const totalAmountOfBtc = satoshisToBitcoin(totalAmountOfSatoshi);
    const actualPriceInCzk = getPriceInCzkQuery.data.price * totalAmountOfBtc;

    return (
        <Box pt={3}>
            <Typography>
                Aktuální stav: {totalAmountOfBtc.toFixed(5)} <strong>BTC</strong> = {actualPriceInCzk.toFixed(0)} <strong>CZK</strong>
            </Typography>
        </Box>
    );
}