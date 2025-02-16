import {satoshisToBitcoin} from "bitcoin-conversion";
import {Box, Card, List, ListItem, ListItemButton, Skeleton, Typography} from "@mui/material";
import {useBitcoinHistory} from "@app/hooks/useBitcoinHistory";
import {CurrencyBitcoin} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";

export function BtcBalance() {
    const navigate = useNavigate();

    const czkNumberFormat = new Intl.NumberFormat('cs', {
        style: 'currency',
        currency: 'CZK',
    });

    const {getHistoryQuery, getPriceInCzkQuery} = useBitcoinHistory();

    if (getHistoryQuery.isPending || getPriceInCzkQuery.isPending) {
        return (
            <Box pt={3}>
                <Skeleton variant="rectangular" height={60}/>
            </Box>
        );
    }

    const totalAmountOfSatoshi = getHistoryQuery.data.history.reduce((accumulator, currentValue) => accumulator + currentValue.value, 0)
    const totalAmountOfBtc = satoshisToBitcoin(totalAmountOfSatoshi);
    const actualPriceInCzk = getPriceInCzkQuery.data.price * totalAmountOfBtc;

    const handleItemClick = async () => {
        await navigate("/transaction-details");
    };

    return (
        <Box pt={3}>
            <List>
                <ListItem disableGutters disablePadding>
                    <ListItemButton sx={{ p: 0, width: '100%' }}>
                        <Card variant="outlined" onClick={handleItemClick} sx={{width: '100%'}}>
                            <Box p={2} display="flex" alignItems="center" justifyContent="space-between">
                                <Box display="flex" alignItems="center">
                                    <CurrencyBitcoin color="primary"/>
                                    <Typography>Bitcoin</Typography>
                                </Box>
                                <Box display="flex" flexDirection="column" textAlign="right">
                                    <Typography fontWeight="bolder">{czkNumberFormat.format(actualPriceInCzk.toFixed(0))}</Typography>
                                    <Typography variant="body2">{totalAmountOfBtc.toFixed(5)} BTC</Typography>
                                </Box>
                            </Box>
                        </Card>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
}