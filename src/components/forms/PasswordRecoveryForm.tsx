import { Button, Form, Modal } from "react-bootstrap";

export default function PasswordRecoveryForm() {
    return(
        <>
        <Form>
            <Button className="mt-3" /*onClick={}*/>
                Send code
            </Button>
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
                <Modal.Title>Enter your code</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Enter the 6 digit code we have sent you by email</p>
                <Form>
                <Form.Group>
                    <Form.Label htmlFor="txtCode">Code</Form.Label>
                    <Form.Control 
                        type="text"
                        id="txtCode"
                        name="code"
                        autoFocus
                    />
                </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" /*onClick={}*/>
                    Cancel
                </Button>
                <Button variant="primary" /*onClick={}*/>
                    Accept
                </Button>
            </Modal.Footer>
        </Modal>

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
                    <Form.Label htmlFor="txtNewPassword">New Password</Form.Label>
                    <Form.Control 
                        type="password"
                        id="txtNewPassword"
                        name="newPassword"
                        autoFocus
                    />
                </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" /*onClick={}*/>
                    Cancel
                </Button>
                <Button variant="primary" /*onClick={}*/>
                    Accept
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}