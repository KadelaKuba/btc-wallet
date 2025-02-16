import {Box, Card, Divider, ListItem, Typography} from "@mui/material";
import {CurrencyBitcoin} from "@mui/icons-material";
import {satoshisToBitcoin} from "bitcoin-conversion";

export function TransactionListItem({transaction}) {
    const totalAmountOfBtc = satoshisToBitcoin(transaction.value);
    const date = new Date(transaction.time * 1000);

    return (
        <Box mb={1}>
        <ListItem disableGutters disablePadding>
            {/*<ListItemButton sx={{p: 0, width: '100%'}}>*/}
                <Card variant="outlined" sx={{width: '100%'}}>
                    <Box p={2} display="flex" alignItems="center" justifyContent="space-between">
                        <Box display="flex" alignItems="center">
                            <CurrencyBitcoin color="primary"/>
                            {date.toLocaleString("cs")}
                        </Box>
                        <Typography>{totalAmountOfBtc.toFixed(5)} BTC</Typography>
                    </Box>
                </Card>
            {/*</ListItemButton>*/}
        </ListItem>
    {/*<Divider/>*/}
        </Box>
    );
}