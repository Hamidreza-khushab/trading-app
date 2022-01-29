import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ShowContactForm = ({ show, handelHid }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mass, setMass] = useState('');
    const [invalidname, setInvaname] = useState(false);
    const [invalidemail, setInvaemail] = useState(false);
    const [invalidmass, setInvamass] = useState(false);
    const [validname, setVaname] = useState(false);
    const [validemail, setVaemail] = useState(false);
    const [validmass, setVamass] = useState(false);
    const totoal = () => {
        if (nameCheck(name) && massCheck(mass) && emailCheck(email)) {
            handelHid(false)
        }
        if (!nameCheck(name)) {
            setInvaname(true)
            setVaname(false)
        }
        else {
            setVaname(true)
            setInvaname(false)
        }
        if (!massCheck(mass)) {
            setInvamass(true)
            setVamass(false)
        }
        else {
            setVamass(true)
            setInvamass(false)
        }
        if (!emailCheck(email)) {
            setInvaemail(true)
            setVaemail(false)
        }
        else {
            setVaemail(true)
            setInvaemail(false)
        }
    }
    const nameCheck = (input) => {
        if (input.length < 3) {
            return false
        } else
            return true
    }
    const emailCheck = (input) => {
        const re = (
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        return re.test(email)
    }
    const massCheck = (input) => {
        if (input.length < 10) {
            return false
        } else
            return true
    }
    return <>
        <Modal show={show} onHide={() => handelHid()}>
            <Modal.Header closeButton>
                <Modal.Title>Contact me...</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <div>
                    <p style={{ fontSize: '0.8rem', textAlign: 'justify' }}>
                        <b>3BS</b>  sets high standards to its services because quality is just as decisive for us as for our clients. We believe that versatile financial services require versatility in thinking and a unified policy of business principles. <br />
                        Our mission is to keep pace with global market demands and approach our clients’ investment goals with an open mind. <br />
                        <b>Risk Warning:</b> Trading on margin products involves a high level of risk.
                    </p>
                    <hr />
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="your name"
                                onChange={(e) => { setName(e.target.value) }}
                                isInvalid={invalidname}
                                isValid={validname}
                            />
                        </Form.Group>
                        <Form.Group className='mb-3'
                            controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" onChange={(e) => {
                                setEmail(e.target.value)
                            }} isValid={validemail}
                                isInvalid={invalidemail}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Please write your message</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={(e) => {
                                setMass(e.target.value)
                            }}
                                isInvalid={invalidmass}
                                isValid={validmass}
                            />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button variant="primary" size="lg"
                                onClick={() => {
                                    totoal()
                                }}>
                                send message
                            </Button>
                        </div>
                    </Form>
                </div>
            </Modal.Body>
        </Modal>
    </>;
};
export default ShowContactForm;
