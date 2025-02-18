import {AppPaper} from "@app/components/AppPaper";
import {Box, Chip, Divider, IconButton, Skeleton, Typography} from "@mui/material";
import {ArrowBackIosNew} from "@mui/icons-material";
import {useNavigate, useParams} from "react-router-dom";
import {useGetTransactionDetail} from "@app/hooks/useGetTransactionDetail";
import {satoshisToBitcoin} from "bitcoin-conversion";

export function TransactionDetail() {
    const navigate = useNavigate();
    const { transactionId} = useParams();

    if (transactionId === undefined) {
        throw new Error("Route parameter [transactionId] not found")
    }

    const handleReturn = async () => {
        await navigate("/transactions");
    };

    const {getTransactionDetail} = useGetTransactionDetail(transactionId);

    if (getTransactionDetail.isPending) {
        return (
            <Box pt={3}>
                <Skeleton variant="rectangular" height={60}/>
            </Box>
        );
    }

    const date = new Date(getTransactionDetail.data.time * 1000);

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
                        <Typography>Received transaction</Typography>
                    </Box>
                </Box>
            </Box>
            <Divider/>
            <Box pt={1} textAlign="center">
                <Chip size="small" color="success" label={getTransactionDetail.data.status} />
                <Typography>{'Time: ' + date.toLocaleString("cs")}</Typography>
                <Typography>{'Fee: ' + satoshisToBitcoin(getTransactionDetail.data.fee).toFixed(5)} BTC</Typography>
                <Typography>{'Status: ' + getTransactionDetail.data.status}</Typography>
            </Box>
        </AppPaper>
    );
}