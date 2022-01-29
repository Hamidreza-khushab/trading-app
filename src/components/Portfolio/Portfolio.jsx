import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas'
import InputPortfolio from './InputPortfolio';

const Portfolio = ({ showPortfolio, hideModal, setNumberPositions }) => {

    const handleClose = () => hideModal(false);

    return <>
        <Offcanvas
            placement="end"
            show={showPortfolio}
            onHide={handleClose}
            enforceFocus
        >
            <Offcanvas.Header closeButton closeLabel='close'>
                <Offcanvas.Title>Portfolio Management</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <InputPortfolio setNumberPositions={setNumberPositions} />
            </Offcanvas.Body>
        </Offcanvas>
    </>;
};

export default Portfolio;
