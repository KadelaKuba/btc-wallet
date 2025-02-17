import {Box, Button, Divider, List, Skeleton, Typography} from "@mui/material";
import {useBitcoinHistory} from "@app/hooks/useBitcoinHistory";
import {TransactionListItem} from "@app/components/TransactionListItem";
import {KeyboardReturn} from "@mui/icons-material";
import {AppPaper} from "@app/components/AppPaper";
import {useNavigate} from "react-router-dom";

export function TransactionList() {
    const navigate = useNavigate();
    const {getHistoryQuery, getPriceInCzkQuery} = useBitcoinHistory();

    const handleReturn = async () => {
        await navigate("/account");
    };

    if (getHistoryQuery.isPending) {
        return (
            <Box pt={3}>
                <Skeleton variant="rectangular" height={60}/>
            </Box>
        );
    }

    return (
        <AppPaper>
            <Box display="flex" alignItems="center" mb={2}>
                <Button sx={{mr: 2}} size="small" variant="outlined" startIcon={<KeyboardReturn/>} onClick={handleReturn}>
                    Zpět
                </Button>
                <Typography variant="h5">Transakce</Typography>
            </Box>
            <Divider/>
            <Box pt={3}>
                <List>
                    {getHistoryQuery.data.history.map((transaction, index, {length}) => (
                        <TransactionListItem transaction={transaction}/>
                    ))}
                </List>
            </Box>
        </AppPaper>
    );
}