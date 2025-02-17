import {AppPaper} from "@app/components/AppPaper";
import {Box, Button, Chip, Divider, Skeleton, Typography} from "@mui/material";
import {KeyboardReturn} from "@mui/icons-material";
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
            <Box display="flex" alignItems="center" mb={2}>
                <Button sx={{mr: 2}} size="small" variant="outlined" startIcon={<KeyboardReturn/>} onClick={handleReturn}>
                    Zpět
                </Button>
                <Typography variant="h5">Detail transakce</Typography>
            </Box>
            <Divider/>
            <Box>
                <Chip color="success" label={getTransactionDetail.data.status} />
                <Typography>{'Time: ' + date.toLocaleString("cs")}</Typography>
                <Typography>{'Fee: ' + satoshisToBitcoin(getTransactionDetail.data.fee).toFixed(5)} BTC</Typography>
                <Typography>{'Status: ' + getTransactionDetail.data.status}</Typography>
            </Box>
        </AppPaper>
    );
}