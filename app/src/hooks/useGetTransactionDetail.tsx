import {useQuery} from "@tanstack/react-query";

export const useGetTransactionDetail = (transactionId: string) => {

    const getTransactionDetail = useQuery({
        queryKey: ['transaction-detail', transactionId],
        queryFn: async () => {
            const response = await fetch(
                'https://proxy.corsfix.com/?https://www.blockonomics.co/api/tx_detail?txid=' + transactionId,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: "GET",
                }
            )
            return await response.json()
        },
    });

    return {
        getTransactionDetail,
    }
}