import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

const FormModal = () => {
    const [fullscreen, setFullscreen] = useState(true)
    const [show, setShow] = useState(false)

    function handleShow() {
        setFullscreen('xxl-down')
        setShow(true)
    }
    return (
        <>
            <Button className="me-2" onClick={handleShow}>
                Full screen
            </Button>
            <Modal
                show={show}
                fullscreen={fullscreen}
                onHide={() => setShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>Modal body content</Modal.Body>
            </Modal>
        </>
    )
}

export default FormModal
