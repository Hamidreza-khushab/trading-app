import React, { useContext, useState } from 'react';
import { CryptoContext } from '../../CryptoContext';
import { v4 as uuidv4 } from "uuid";
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import useLocalStorage from '../../command/useLocalStorag'
import Showorder from './Showorder';

const InputOrder = ({ setNumberOrders }) => {
    const { price, setPrice } = useContext(CryptoContext)
    const [CoinName, setCoinName] = useState('')
    const [TargetPrice, setTargetPrice] = useState(0);
    const [PurchaseQuantity, setPurchaseQuantity] = useState(0)
    const [OrderDate, setOrderDate] = useState('')
    const [TradingType, setTradingType] = useState('');
    const [RecordingOrder, setRecordingOrder] = useLocalStorage('order', [])
    setNumberOrders(RecordingOrder.length)
    const handleChange = (e) => {
        setCoinName(e.target.value);
    };

    const handleChangeType = (e) => {
        setTradingType(e.target.value)
    }

    const handelSave = () => {

        const newOrder =
        {
            id: uuidv4(),
            name: CoinName,
            targetPrice: TargetPrice,
            quantity: PurchaseQuantity,
            type: TradingType,
            date: OrderDate
        };

        setRecordingOrder(tasks => [newOrder, ...tasks]);

    }
    const handelDeleted = (input) => {
        console.log('k', input);
        const deleted = RecordingOrder.filter(elementDeleted => elementDeleted.id !== input)
        setRecordingOrder(deleted)

    }
    return (
        <Container>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Insert your Order</Accordion.Header>
                    <Accordion.Body>
                        <FloatingLabel controlId="floatingSelect" label="Choose your Coin">
                            <Form.Select aria-label="Floating label select example" onChange={handleChange} >
                                <option value="" >none</option>
                                {
                                    price.map((element, index) => {
                                        return <option value={element.id}>{element.name}&nbsp;&nbsp;price&nbsp;{element.current_price}&nbsp;$</option>
                                    })
                                }
                            </Form.Select>
                        </FloatingLabel>
                        <Form>
                            <Form.Group className="mb-3" >
                                <Form.Label>Target Price</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Targer price"
                                    value={TargetPrice}
                                    onChange={(event) => setTargetPrice(event.target.value)}
                                />
                                <Form.Label>Purchase quantity</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Purchase quantity"
                                    value={PurchaseQuantity}
                                    onChange={(event) => setPurchaseQuantity(event.target.value)}
                                />
                                <br />
                                <FloatingLabel controlId="floatingSelect" label="Choose Trading Type">
                                    <Form.Select aria-label="Floating label select example" onChange={handleChangeType} >
                                        <option value="" >none</option>
                                        <option value="Buy" >Buy</option>
                                        <option value="Sale" >Sale</option>
                                    </Form.Select>
                                </FloatingLabel>
                                <Form.Label>Order Date</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="dd-mm-yyyy"
                                    value={OrderDate}
                                    onChange={(event) => setOrderDate(event.target.value)}
                                />
                            </Form.Group>
                            <Button
                                variant="primary"
                                type="submit"
                                onClick={(event) => {
                                    event.preventDefault();
                                    handelSave();
                                }}
                            >
                                Save
                            </Button>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
            <Showorder RecordingOrder={RecordingOrder} handelDeleted={handelDeleted} />
        </Container>
    );
};

export default InputOrder;
