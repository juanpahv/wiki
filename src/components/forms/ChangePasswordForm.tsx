import { Button, Form, Modal } from "react-bootstrap";

export default function ChangePasswordForm() {
    return(
        <>
        <Form>
            <Button className="mt-3" /*onClick={}*/>Change password</Button>
        </Form>
        <Modal
        // show={true}
        // onHide={}
        animation={true}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        keyboard={false}>
            <Modal.Header>
                <Modal.Title>Change password</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
            <Form.Group>
                <Form.Label>Old password</Form.Label>
                <Form.Control
                    type="password"
                    id="txtOldPassword"
                    name="oldPassword"
                />
            </Form.Group>
            <Form.Group className="pt-2">
                <Form.Label>New password</Form.Label>
                <Form.Control
                    type="password"
                    id="txtNewPassword"
                    name="newPassword"
                />
            </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" /*onClick={}*/>
                    Cancel
                </Button>
                <Button variant="primary" /*onClick={}*/>
                    Change password
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}