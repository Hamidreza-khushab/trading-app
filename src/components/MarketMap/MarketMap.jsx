import React, { useContext, useState, useEffect } from 'react';
import { CryptoContext } from '../../CryptoContext';

import Modal from 'react-bootstrap/Modal';

const MarketMap = ({ showMarket, hideModal }) => {
    const { price, setPrice } = useContext(CryptoContext)
    const [totalCap , setTotalCap] = useState(0)
    useEffect(() => {
        let sum = 0;
        for (let i = 0; i < price.length; i++) {
            sum = parseFloat(price[i].market_cap) + sum;
        }
        setTotalCap(sum)
        console.log('totalCap',totalCap);
    }, [])
    return <>
        <Modal
            show={showMarket} fullscreen={true} onHide={() => hideModal()}>
            <Modal.Header closeButton>
                <Modal.Title>Market Map</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* *********************************************************** */}

                {/* ********************************************************** */}
            </Modal.Body>
        </Modal>

    </>;
};

export default MarketMap;
