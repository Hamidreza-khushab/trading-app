import React, { useContext, useEffect, useState } from 'react';
import { CryptoContext } from '../../CryptoContext';
import { v4 as uuidv4 } from "uuid";
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import useLocalStorage from '../../command/useLocalStorag'
import ShowPortfolio from './ShowPortfolio'

const InputPortfolio = ({ setNumberPositions }) => {
    const { price, setPrice } = useContext(CryptoContext)
    const [CoinName, setCoinName] = useState('')
    const [EnterPint, setEnterPoint] = useState(0)
    const [TradingValue, setTradingValue] = useState(0)
    const [TakeProfit, setTakeProfit] = useState(0)
    const [realPrice, setRealPrice] = useState(0)
    const [RecordingPosition, setRecordingPosition] = useLocalStorage('position', [])
    setNumberPositions(RecordingPosition.length)
    // ***************************************
    const handelrealprice = (input) => {
        console.log('input', input);
        price.map(element => {
            if (element.id == input) {
                setRealPrice(element.current_price)
            }
        })
    }
    // ***************************************
    const handleChange = (e) => {
        setCoinName(e.target.value);
        handelrealprice(e.target.value)
    };
    const handelSave = () => {

        const newpositin =
        {
            id: uuidv4(),
            name: CoinName,
            EnterPint: EnterPint,
            TradingValue: TradingValue,
            TakeProfit: TakeProfit,
            realPrice: realPrice,
            ProfitOrLoss: (-Number(EnterPint) + Number(realPrice)) * Number(TradingValue)
        };
        setRecordingPosition(tasks => [newpositin, ...tasks]);
    }
    const handelDeleted = (input) => {
        const deleted = RecordingPosition.filter(elementDeleted => elementDeleted.id !== input)
        setRecordingPosition(deleted)
    }
    return (
        <Container>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Insert your Position</Accordion.Header>
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
                                <Form.Label>Enter Point</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter Point"
                                    value={EnterPint}
                                    onChange={(event) => setEnterPoint(event.target.value)}
                                />
                                <Form.Label>Trading Value</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Trading Value"
                                    value={TradingValue}
                                    onChange={(event) => setTradingValue(event.target.value)}
                                />
                                <Form.Label>Take Profit Point</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Take Profit Point"
                                    value={TakeProfit}
                                    onChange={(event) => setTakeProfit(event.target.value)}
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
            <ShowPortfolio
                handelDeleted={handelDeleted}
                RecordingPosition={RecordingPosition}
            />
        </Container>);
};

export default InputPortfolio;
