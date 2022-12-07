import React, { useContext, useState, useEffect } from 'react';
import { CryptoContext } from '../../CryptoContext';
import { Treemap, ResponsiveContainer } from 'recharts';
import Modal from 'react-bootstrap/Modal';

const MarketMap = ({ showMarket, hideModal }) => {
    const { price, setPrice } = useContext(CryptoContext)
    const [data, setData] = useState([]);
    useEffect(() => {
        let sum = 0 
        data.splice(0)
        for (let i = 0; i < price.length; i++) {
            if (parseFloat(price[i].market_cap) > 700000000.00) {
                sum = sum + 1 
                setData(data => [{ children: [{ name: price[i].symbol, size: parseFloat(price[i].market_cap) }] }, ...data])
            }
        }
    }, [])
    return <>
        <Modal
            show={showMarket} fullscreen={true} onHide={() => hideModal()}>
            <Modal.Header closeButton>
                <Modal.Title>Market Map</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* *********************************************************** */}
                <ResponsiveContainer width="100%" height="100%">
                    <Treemap width={400} height={200} data={data} dataKey="size" ratio={4 / 3} stroke="#fff" fill="#8884d8" />
                </ResponsiveContainer>
                {/* ********************************************************** */}
            </Modal.Body>
        </Modal>

    </>;
};

export default MarketMap;
