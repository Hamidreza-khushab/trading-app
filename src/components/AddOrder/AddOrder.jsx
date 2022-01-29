import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas'
import InputOrder from './InputOrder';

const AddOrder = ({ showOrder, hideModal, setNumberOrders }) => {

    const handleClose = () => hideModal(false);
    return <>
        <Offcanvas
            placement="start"
            show={showOrder}
            onHide={handleClose}
            enforceFocus
        >
            <Offcanvas.Header closeButton closeLabel='close'>
                <Offcanvas.Title>Place of Orders</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <InputOrder setNumberOrders={setNumberOrders} />
            </Offcanvas.Body>
        </Offcanvas>
    </>;
};

export default AddOrder;
