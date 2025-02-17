import {Box, Card, ListItem, Typography} from "@mui/material";
import {ArrowDownward} from "@mui/icons-material";
import {satoshisToBitcoin} from "bitcoin-conversion";

export function TransactionListItem({transaction}) {
    const totalAmountOfBtc = satoshisToBitcoin(transaction.value);
    const date = new Date(transaction.time * 1000);

    return (
        <Box mb={1}>
            <ListItem disableGutters disablePadding>
                {/*<ListItemButton sx={{p: 0, width: '100%'}}*/}
                    <Card variant="outlined" sx={{width: '100%'}}>
                        <Box p={2} display="flex" alignItems="center" justifyContent="space-between">
                            <Box display="flex" alignItems="center">
                                <ArrowDownward color="primary" fontSize="small"/>
                                <Box pl={1}>
                                    <Typography variant="body2">
                                        Přijato
                                    </Typography>
                                    <Typography variant="body2">
                                        {date.toLocaleString("cs")}
                                    </Typography>
                                </Box>
                            </Box>
                            <Typography>{totalAmountOfBtc.toFixed(5)} BTC</Typography>
                        </Box>
                    </Card>
                {/*</ListItemButton>*/}
            </ListItem>
        </Box>
    );
}