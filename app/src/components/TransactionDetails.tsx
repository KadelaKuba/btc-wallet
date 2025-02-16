import {Box, Card, Divider, List, Skeleton, Typography} from "@mui/material";
import {useBitcoinHistory} from "@app/hooks/useBitcoinHistory";
import {TransactionListItem} from "@app/components/TransactionListItem";

export function TransactionDetails() {
    const {getHistoryQuery, getPriceInCzkQuery} = useBitcoinHistory();

    console.log(getHistoryQuery.data);

    if (getHistoryQuery.isPending) {
        return (
            <Box pt={3}>
                <Skeleton variant="rectangular" height={60}/>
            </Box>
        );
    }

    return (
        <Box pt={3}>
            <Card variant="outlined">
                <Box p={2} display="flex" alignItems="center" justifyContent="space-between">
                    <Box display="flex" alignItems="center">
                        <Typography>Transakce</Typography>
                    </Box>
                </Box>
                <Divider/>
                <Box pt={3}>
                    <List>
                        {getHistoryQuery.data.history.map((transaction, index, {length}) => (
                            <TransactionListItem transaction={transaction}/>
                        ))}
                    </List>
                </Box>
            </Card>
        </Box>
    );
}