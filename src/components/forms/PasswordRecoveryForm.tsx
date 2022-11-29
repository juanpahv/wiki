import { ChangeEvent, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import SendPasswordRecuperationMailTask from '../../tasks/SendPasswordRecuperationMailTask';


export default function PasswordRecoveryForm() {
    const [mail, setMail] = useState('');
    const [showModalCodeEntry, setShowModalCodeEntry] = useState(false);
    const [showModalChangePassword, setShowModalChangePassword] = useState(false);

    const handleAcceptCodeEntry = () =>{
        //TODO logic to verify code
        setShowModalCodeEntry(false);
        setShowModalChangePassword(true);
    }

    const handleSendEmail = () => {
        const sendPasswordRecuperationMailTask = new SendPasswordRecuperationMailTask({mail});
        sendPasswordRecuperationMailTask.execute();
        setShowModalCodeEntry(true);

    }

    function handleMailChange(
        event: ChangeEvent<HTMLInputElement>
    ) {
        const valorMail = event.target.value;
        setMail(valorMail);
    }

    return(
        <>
        <Form>
            <Form.Label htmlFor="txtCode">Enter your email</Form.Label>
            <Form.Control 
                type="text"
                id="txtCode"
                name="code"
                autoFocus
                onChange={handleMailChange}
            />
            <Button className="mt-3" onClick={handleSendEmail}>
                Send code
            </Button>
        </Form>

        <Modal
        show={showModalCodeEntry}
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
                <Button variant="secondary" onClick={() => setShowModalCodeEntry(false)}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleAcceptCodeEntry}>
                    Accept
                </Button>
            </Modal.Footer>
        </Modal>

        <Modal
        show={showModalChangePassword}
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
                <Button variant="secondary" onClick={()=>setShowModalChangePassword(false)}>
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