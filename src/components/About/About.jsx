import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas'


const About = ({ showAbout, hideModal }) => {
    const handleClose = () => hideModal(false);

    return <>
        <Offcanvas
            placement="bottom"
            show={showAbout}
            onHide={handleClose}
            enforceFocus
        >
            <Offcanvas.Header closeButton closeLabel='close'>
                <Offcanvas.Title> About the App </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body style={{ textAlign: 'center' }}>
                <h6>
                    This app helps you to have proper management on your portfolio
                </h6>
                <br />
                <p>
                    <b>Risk Warning:</b>
                    CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. 75.59% of retail investor accounts lose money when trading CFDs with this provider. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money. Please consider our Risk Disclosure.
                </p>

            </Offcanvas.Body>
        </Offcanvas>
    </>;
};

export default About;
