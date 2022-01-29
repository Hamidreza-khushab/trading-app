import React, { useContext } from 'react';
import { CryptoContext } from '../../CryptoContext';
import Modal from 'react-bootstrap/Modal'
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'
import Moment from 'react-moment';


const CoinInformation = ({ selectCoin, show, hideModal }) => {
    const { price, setPrice } = useContext(CryptoContext)

    const infoCoin = price.filter(coin => coin.symbol == selectCoin)
    return (
        <>
            {
                infoCoin.length !== 0
                    ?
                    <Modal
                        size='sm'
                        show={show}
                        fullscreen={"md-down"}
                        onHide={() => hideModal()}>
                        <Modal.Header closeButton>
                            <Modal.Title> {infoCoin[0].name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Card style={{ width: '20rem', paddingTop: '1rem' }}>
                                <Card.Img variant="top" style={{ width: '10rem' }} src={infoCoin[0].image} />
                                <Card.Body>
                                    <Card.Title>Additional project information&nbsp;{infoCoin[0].name} </Card.Title>
                                    <Card.Text>
                                        <p>Current&nbsp;price:&nbsp;{infoCoin[0].current_price}&nbsp;$</p>
                                        <p>ATH:&nbsp;{infoCoin[0].ath}&nbsp;$</p>
                                        <p>ATH Date:&nbsp;<Moment format='D MMM YYYY'>{infoCoin[0].ath_date}</Moment>&nbsp;</p>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Modal.Body>

                    </Modal>
                    :
                    <Alert>
                        There is a problem with the server !!!!
                    </Alert>
            }
        </>
    );
};

export default CoinInformation;

