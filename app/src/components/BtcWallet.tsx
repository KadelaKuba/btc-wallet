import {useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {satoshisToBitcoin} from "bitcoin-conversion";

export function BtcWallet() {
    const [price, setPrice] = useState(0);
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    fetch('https://proxy.corsfix.com/?https://www.blockonomics.co/api/searchhistory', {
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

    console.log(isAuthenticated);
    console.log(user);
    return (
        <>
            <p>Aktuální stav: {price} BTC</p>
        </>
    );
}