import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ChangePasswordTask from "../../tasks/ChangePasswordTask";

export default function ChangePasswordForm() {    
    const [mail, setMail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    function handleOldPasswordChange(
        event: ChangeEvent<HTMLInputElement>
    ) {
        const value = event.target.value;
        setOldPassword(value);
    }

    function handleNewPasswordChange(
        event: ChangeEvent<HTMLInputElement>
    ) {
        const value = event.target.value;
        setNewPassword(value);
    }

    function handleMailChange(
        event: ChangeEvent<HTMLInputElement>
    ) {
        const value = event.target.value;
        setMail(value);
    }

    async function handleFormSubmit(event: FormEvent) {
        event.preventDefault();
        
        try {
            const changePasswordTask = new ChangePasswordTask({
                mail,
                oldPassword,
                newPassword
            });
            
            await changePasswordTask.execute();
            setShowModal(false);
            toast(
                'success',
                { type: 'success' }
            );
            localStorage.removeItem('tokenSesion')
            navigate('/LogIn');
            
        } catch (e) {
            console.log('5');
            switch ((e as Error).message) {
                case 'ErrorFormularioIncompleto':
                    toast(
                        'One or more fields are empty',
                        { type: 'warning' }
                    );
                    break;
                case 'ErrorSesionExpiradaOInvalida':
                    toast(
                        "Session expired log in again",
                        { type: 'error' }
                    );
                    localStorage.removeItem('tokenSesion')
                    navigate('/LogIn');
                    break;
                case 'ErrorPasswordDoesntMatchUser':
                    toast(
                        "Password and email don't match",
                        { type: 'error' }
                    );
                    break;
                default:
                    toast(
                        "there's been an unknown error",
                        { type: 'error' }
                    );
            }
        }

    }
    
    return(
        <>
        <Form>
            <Button className="mt-3" onClick={()=>setShowModal(true)}>Change password</Button>
        </Form>
        <Modal
        show={showModal}
        animation={true}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        keyboard={false}>
            <Modal.Header>
                <Modal.Title>Change password</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleFormSubmit}>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Mail</Form.Label>
                        <Form.Control
                            type="email"
                            id="txtMail"
                            name="mail"
                            onChange={handleMailChange}
                        />
                    </Form.Group>
                    <Form.Group className="pt-2">
                        <Form.Label>Old password</Form.Label>
                        <Form.Control
                            type="password"
                            id="txtOldPassword"
                            name="oldPassword"
                            onChange={handleOldPasswordChange}
                        />
                    </Form.Group>
                    <Form.Group className="pt-2">
                        <Form.Label>New password</Form.Label>
                        <Form.Control
                            type="password"
                            id="txtNewPassword"
                            name="newPassword"
                            onChange={handleNewPasswordChange}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" type="submit"/*onClick={}*/>
                        Change password
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
        </>
    );
}