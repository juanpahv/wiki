import { ChangeEvent, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import SendPasswordRecuperationMailTask from '../../tasks/SendPasswordRecuperationMailTask';
import { toast } from 'react-toastify';
import ChangePasswordByRecuperationTask from '../../tasks/ChangePasswordByRecuperationTask';
import { useNavigate } from "react-router-dom";

export default function PasswordRecoveryForm() {
    const [mail, setMail] = useState('');
    const [mailVerificationCodeId, setmailVerificationCodeId] = useState(0);
    const [newPassword, setNewPassword] = useState('');
    const [showModalCodeEntry, setShowModalCodeEntry] = useState(false);
    const [showModalChangePassword, setShowModalChangePassword] = useState(false);
    const navigate = useNavigate();

    const handleAcceptCodeEntry = () =>{
        setShowModalCodeEntry(false);
        setShowModalChangePassword(true);
    }
    function handleChangePassword () {
        try{
            const changePasswordByRecuperationTask = new ChangePasswordByRecuperationTask({mailVerificationCodeId,newPassword});
            changePasswordByRecuperationTask.execute();
        }catch(e){
            switch ((e as Error).message) {
                case 'ErrorFormularioIncompleto':
                    toast(
                        'One or more fields are missing',
                        { type: 'warning' }
                    );
                    break;
                case 'CodigoExpirado':
                    toast(
                        "Expierd code",
                        { type: 'warning' }
                    );
                    break;
                default:
                    toast(
                        "there's been an unkown error",
                        { type: 'error' }
                    );
            }
        }
        setShowModalChangePassword(false);
        setShowModalCodeEntry(false);
        
        //navigate('/LogIn')
    }

    const handleSendEmail = () => {
        try{
            const sendPasswordRecuperationMailTask = new SendPasswordRecuperationMailTask({mail});
            sendPasswordRecuperationMailTask.execute();
        }catch(e){
            switch ((e as Error).message) {
                case 'ErrorFaltaMail':
                    toast(
                        'Mail is missing',
                        { type: 'warning' }
                    );
                    break;
                case 'ErrorCorreoNoRegistrado':
                    toast(
                        "non-existent acount",
                        { type: 'warning' }
                    );
                    break;
                default:
                    toast(
                        "there's been an unkown error",
                        { type: 'error' }
                    );
            }
        }
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
                        type="number"
                        id="txtCode"
                        name="code"
                        autoFocus
                        onChange={(event: ChangeEvent<HTMLInputElement>)=>setmailVerificationCodeId(parseInt(event.target.value))}
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
                        onChange={(event: ChangeEvent<HTMLInputElement>)=>setNewPassword(event.target.value)}
                    />
                </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={()=>setShowModalChangePassword(false)}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleChangePassword}>
                    Accept
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}