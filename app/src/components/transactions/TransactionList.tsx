import {Box, Divider, IconButton, List, Skeleton, Typography} from "@mui/material";
import {useBitcoinHistory} from "@app/hooks/useBitcoinHistory";
import {TransactionListItem} from "@app/components/transactions/TransactionListItem";
import {ArrowBackIosNew, CurrencyBitcoin} from "@mui/icons-material";
import {AppPaper} from "@app/components/AppPaper";
import {useNavigate} from "react-router-dom";
import {Fragment} from "react";

export function TransactionList() {
    const navigate = useNavigate();
    const {getHistoryQuery} = useBitcoinHistory();

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
            <Box mb={2}>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <IconButton>
                            <ArrowBackIosNew onClick={handleReturn} fontSize="small"/>
                        </IconButton>
                    </Box>
                    <Box display="flex" justifyContent="center" alignItems="center" flexGrow={1}>
                        <CurrencyBitcoin color="primary" fontSize="small"/>
                        <Typography>Bitcoin</Typography>
                    </Box>
                </Box>
            </Box>
            <Divider/>
            <Box display="flex" alignItems="center" mt={2}>
                <Typography variant="h6">Transakce</Typography>
            </Box>
            <Box pt={1}>
                <List>
                    {getHistoryQuery.data.history.map((transaction, index, {length}) => (
                        <Fragment key={index}>
                            <TransactionListItem transaction={transaction}/>
                        </Fragment>
                    ))}
                </List>
            </Box>
        </AppPaper>
    );
}