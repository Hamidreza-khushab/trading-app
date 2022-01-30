import React, { useContext, useState, useEffect } from 'react';
import { CryptoContext } from '../../CryptoContext';
import { ResponsiveTreeMap } from '@nivo/treemap'

import Modal from 'react-bootstrap/Modal';

const MarketMap = ({ showMarket, hideModal }) => {

    // useEffect(() => {

    //     let sum = 0;
    //     for (let i = 0; i < price.length; i++) {
    //         sum = Number(price[i].market_cap) + sum;
    //     }
    //     const price1 = [...price]
    //     const price2 = price1.splice(0, 9)
    //     setNewprice(price2)

    //     setTotalValue(sum)
    // }, [price])

    // useEffect(() => {
    //     setArea(Number((windowDimensions.width) - 50) * Number((windowDimensions.height) - 50))
    // }, [windowDimensions])

    const hasWindow = typeof window !== 'undefined';
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    function getWindowDimensions() {
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;
        return {
            width,
            height,
        };

    }
    useEffect(() => {
        if (hasWindow) {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);

        }
    }, [hasWindow]);

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
