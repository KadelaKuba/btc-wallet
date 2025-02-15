import {useQuery} from "@tanstack/react-query";

export const useBitcoinHistory = () => {
    const getHistoryQuery = useQuery({
        queryKey: ['btc-history'],
        queryFn: async () => {
            const response = await fetch(
                'https://proxy.corsfix.com/?https://www.blockonomics.co/api/searchhistory',
                {
                    headers: {
                        Authorization: 'Bearer ' + import.meta.env.VITE_BLOCKONOMICS_API_KEY,
                        'Content-Type': 'application/json',
                    },
                    method: "POST",
                    body: JSON.stringify({"addr": import.meta.env.VITE_BTC_PUBLIC_KEY})
                }
            )
            return await response.json()
        },
    });

    const getPriceInCzkQuery = useQuery({
        queryKey: ['btc-czk'],
        queryFn: async () => {
            const response = await fetch(
                'https://proxy.corsfix.com/?https://www.blockonomics.co/api/price?currency=CZK',
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
        getHistoryQuery,
        getPriceInCzkQuery,
    };
}