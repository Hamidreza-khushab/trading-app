import React, { useState, useEffect, useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import AddOrder from '../AddOrder/AddOrder';
import Portfolio from '../Portfolio/Portfolio';
import About from '../About/About';
import Badge from 'react-bootstrap/Badge'
import useLocalStorag from '../../command/useLocalStorag'
import MarketMap from '../MarketMap/MarketMap';
import { CryptoContext } from '../../CryptoContext';
import useLocalStorage from '../../command/useLocalStorag'


const Header = () => {
    const { price, setPrice } = useContext(CryptoContext)
    const [showOrder, setShowOrder] = useState(false)
    const [showPortfolio, setShowPortfolio] = useState(false)
    const [showAbout, setShowAbout] = useState(false)
    const [showMarket, setShowMarket] = useState(false)
    const [numberOrders, setNumberOrders] = useLocalStorag('no', []);
    const [numberPostions, setNumberPositions] = useLocalStorag('np', []);
    const [ProfitOrLoss, setProfitOrLoss] = useState(0)
    const [RecordingPosition, setRecordingPosition] = useLocalStorage('position', [])

    useEffect(() => {

        const position = JSON.parse(window.localStorage.getItem('position'));
        if (position !== null) {
            let update = 0
            for (let i = 0; i < position.length; i++) {
                for (let j = 0; j < price.length; j++) {
                    if (position[i].name === price[j].id) {
                        update = (price[j].current_price - position[i].EnterPint) * position[i].TradingValue + update
                    }
                }
            }
            setProfitOrLoss(update)
        }
        else
            setRecordingPosition([])
    }, [price]);
    return <div>
        <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
            <Container fluid>
                <Navbar.Brand >Trading App</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '180px' }}
                    >
                        {/* ********************** */}
                        <Button variant="link"
                            onClick={() => {
                                setShowOrder(true);
                            }}
                        >
                            Add&nbsp;Order&nbsp;
                            <Badge bg="warning">{numberOrders}</Badge>
                        </Button>
                        <Button
                            variant="link"
                            onClick={() => setShowPortfolio(true)}
                        >
                            portfolio&nbsp;management&nbsp;
                            <Badge bg="danger">{numberPostions}</Badge>
                        </Button>
                        <Button
                            variant="link"
                            onClick={() => setShowMarket(true)}
                        >Market&nbsp;Map&nbsp;
                        </Button>
                        <Button
                            variant="link"
                            onClick={() => setShowAbout(true)}
                        >
                            About&nbsp;the&nbsp;App
                        </Button>
                        <Button
                            variant={ProfitOrLoss < 0 ? 'danger' : 'success'}
                            disabled
                        >
                            Profit&nbsp;Or&nbsp;Loss&nbsp;&nbsp;{ProfitOrLoss.toFixed(3)}&nbsp;$
                        </Button>

                        {/* *********************** */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        < AddOrder
            showOrder={showOrder}
            hideModal={() => setShowOrder(false)}
            setNumberOrders={setNumberOrders}
        />
        < Portfolio
            showPortfolio={showPortfolio}
            hideModal={() => setShowPortfolio(false)}
            setNumberPositions={setNumberPositions}
            setProfitOrLoss={setProfitOrLoss}
        />
        <MarketMap
            showMarket={showMarket}
            hideModal={() => setShowMarket(false)}
        />
        < About
            showAbout={showAbout}
            hideModal={() => setShowAbout(false)}
        />
    </div>;
};

export default Header;
