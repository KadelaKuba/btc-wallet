import {useState} from "react";
import {satoshisToBitcoin} from "bitcoin-conversion";

export function Home() {
    const [price, setPrice] = useState(0);

    fetch('https://www.blockonomics.co/api/searchhistory', {
        headers: {
            Authorization: 'Bearer ' + import.meta.env.VITE_BLOCKONOMICS_API_KEY,
            'Content-Type': 'application/json',
        },
        method: "POST",
        body: JSON.stringify({"addr": import.meta.env.VITE_BTC_PUBLIC_KEY})
    })
        .then(resp => resp.json())
        .then(function (response) {
            const numberOfSatoshi = response.history.reduce((accumulator, currentValue) => accumulator + currentValue.value, 0)
            const btcPrice = satoshisToBitcoin(numberOfSatoshi);

            setPrice(btcPrice);
        })

    return (
        <>{price}</>
    );
}