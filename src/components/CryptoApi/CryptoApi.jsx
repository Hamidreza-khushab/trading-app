import React, { useState, useEffect, useContext } from 'react';
import { CryptoContext } from '../../CryptoContext';
import Spinner from 'react-bootstrap/Spinner'
import CryptoList from '../CryptoList/CryptoList';

const CryptoApi = () => {
    const [loading, setLoading] = useState(true);
    const { price, setPrice } = useContext(CryptoContext)

    useEffect(() => {
        let interval
        async function fetchData() {
            let response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false`)
            response = await response.json()
            setPrice(response)

            setLoading(false);
        }
        fetchData()
        interval = setInterval(() => {
            fetchData()
        }, 60000)
        return () => {
            clearInterval(interval)
        }
    }, []);
    return (
        <>
            {
                loading
                    ?
                    <Spinner animation="grow" variant="warning" />
                    :
                    <CryptoList />
            }
        </>
    );
};

export default CryptoApi;


























