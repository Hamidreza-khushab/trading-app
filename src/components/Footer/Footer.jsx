import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { MdEmail } from 'react-icons/md'
import ShowContactForm from './ShowContactForm';

const Footer = () => {
    const [show, setShow] = useState(false);

    return <div className='foot'>
        <Navbar
            bg="dark" expand="lg" variant="dark"
            style={{ marginTop: '1.25rem' }}
        >
            <Container style={{ height: '3.65rem' }}>
                <Navbar.Brand style={{ fontSize: '1rem' }}>&copy;Hamidreza Khushab</Navbar.Brand>
                <Navbar.Text>
                    <Button
                        variant="outline-secondary"
                        style={{ fontSize: '1.25rem' }}
                        onClick={() => setShow(true)}
                    ><MdEmail /></Button>
                </Navbar.Text>
            </Container>
        </Navbar>
        <ShowContactForm
            show={show}
            handelHid={() => setShow(false)}
        />
    </div>;
};

export default Footer;
