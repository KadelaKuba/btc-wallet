import {Box, Card, ListItem, ListItemButton, Typography} from "@mui/material";
import {ArrowDownward} from "@mui/icons-material";
import {satoshisToBitcoin} from "bitcoin-conversion";
import {useNavigate} from "react-router-dom";

export function TransactionListItem({transaction}) {
    const navigate = useNavigate();

    const totalAmountOfBtc = satoshisToBitcoin(transaction.value);
    const date = new Date(transaction.time * 1000);

    const handleItemClick = async () => {
        await navigate("/transaction/" + transaction.txid);
    };

    return (
        <Box mb={1}>
            <ListItem disableGutters disablePadding>
                <ListItemButton sx={{p: 0, width: '100%'}} onClick={handleItemClick}>
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
                </ListItemButton>
            </ListItem>
        </Box>
    );
}