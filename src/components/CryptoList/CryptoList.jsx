import React, { useContext, useState } from 'react';
import { CryptoContext } from '../../CryptoContext';
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import CoinInformation from '../CoinInformation/CoinInformation'
import { v4 as uuidv4 } from "uuid";
const CryptoList = () => {
    // ***********************************
    const separate = (Number) => {
        Number += '';
        Number = Number.replace(',', '');
        let x = Number.split('.');
        let y = x[0];
        let z = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(y))
            y = y.replace(rgx, '$1' + ',' + '$2');
        return y + z;
    }
    // ********************************************
    const { price, setPrice } = useContext(CryptoContext)
    const [selectCoin, setSelectCoin] = useState()
    const [show, setShow] = useState(false);
    return <>
        <h2 className='titleCryptoList'>Online list of cryptocurrency prices</h2>
        <Container >
            <Table striped bordered hover responsive="xs" size="sm">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Currency</th>
                        <th>Symbol</th>
                        <th>Current&nbsp;Price</th>
                        <th>Market&nbsp;Cap</th>
                        <th>Change%&nbsp;(24H)</th>
                    </tr>
                </thead>
                <tbody className='sizeList'>
                    {
                        price.map((elementPrice) => (
                            <tr
                                key={uuidv4()}
                                onClick={(e) => {
                                    setSelectCoin(e.target.id)
                                    setShow(true)
                                }
                                }
                            >
                                <td id={elementPrice.symbol} >{elementPrice.market_cap_rank}</td>
                                <td id={elementPrice.symbol}>{elementPrice.id}</td>
                                <td id={elementPrice.symbol}>{elementPrice.symbol}</td>
                                <td id={elementPrice.symbol}>{separate(elementPrice.current_price)}&nbsp;$</td>
                                <td id={elementPrice.symbol}>{separate(elementPrice.market_cap)}&nbsp;$</td>
                                 <td id={elementPrice.symbol} style={parseFloat(elementPrice.price_change_percentage_24h) < 0 ? { color: '#c10' } : { color: '#000' }}>{parseFloat(elementPrice.price_change_percentage_24h).toFixed(2)}&nbsp;%</td> 
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <CoinInformation
                selectCoin={selectCoin}
                show={show}
                hideModal={() => setShow(false)}
            />
        </Container>
    </>
};

export default CryptoList;


