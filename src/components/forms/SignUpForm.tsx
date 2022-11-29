import { useState, FormEvent, ChangeEvent } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import SignUpNewUserTask from "../../tasks/SignUpNewUserTask";

export default function SignUpForm () {
    const [mail, setMail] = useState('');
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setverifyPassword] = useState('');
    const navigate = useNavigate();

    async function handleFormSubmit(event: FormEvent) {
        event.preventDefault();

        try {
            const logInNewUserTask = new SignUpNewUserTask({
                mail,
                nombreUsuario,
                password,
                verifyPassword
            });

            await logInNewUserTask.execute();

            navigate('/');
        } catch (e) {
            switch ((e as Error).message) {
                case 'ErrorFormularioIncompleto':
                    toast(
                        'One or more fields are missing',
                        { type: 'warning' }
                    );
                    break;
                case 'ErrorPasswordsNoCoinciden':
                    toast(
                        "Passwords don't match",
                        { type: 'warning' }
                    );
                    break;
                case 'ErrorNombreUsuarioDuplicado':
                    toast(
                        'Username or email already in use',
                        { type: 'error' }
                    );
                    break;
                default:
                    toast(
                        "there's been an unkown error",
                        { type: 'error' }
                    );
            }
        }
    }

    function handleMailChange(
        event: ChangeEvent<HTMLInputElement>
    ) {
        const valorMail = event.target.value;
        setMail(valorMail);
    }

    function handleNombreUsuarioChange(
        event: ChangeEvent<HTMLInputElement>
    ) {
        const valorNombreUsuario = event.target.value;
        setNombreUsuario(valorNombreUsuario);
    }

    function handlePasswordChange(
        event: ChangeEvent<HTMLInputElement>
    ) {
        const valorPassword = event.target.value;
        setPassword(valorPassword);
    }

    function handleVerificarPasswordChange(
        event: ChangeEvent<HTMLInputElement>
    ) {
        const valorVerificarPassword = event.target.value;
        setverifyPassword(valorVerificarPassword);
    }

    return(
        <Form onSubmit={handleFormSubmit}>
            <Form.Group>
                <Form.Label htmlFor="txtMail">Mail</Form.Label>
                <Form.Control
                    type="text"
                    id="txtMail"
                    name="Mail"
                    onChange={handleMailChange}
                />
            </Form.Group>
            <Form.Group className="pt-2">
                <Form.Label htmlFor="txtUser">User</Form.Label>
                <Form.Control
                    type="text"
                    id="txtUser"
                    name="User"
                    onChange={handleNombreUsuarioChange}
                />
            </Form.Group>
            <Form.Group className="pt-2">
                <Form.Label htmlFor="txtPassword">Password</Form.Label>
                <Form.Control
                    type="password"
                    id="txtPassword"
                    name="Password"
                    onChange={handlePasswordChange}
                />
            </Form.Group>
            <Form.Group className="pt-2">
                <Form.Label htmlFor="txtConfirmPassword">Confirm Password</Form.Label>
                <Form.Control
                    type="password"
                    id="txtConfirmPassword"
                    name="ConfirmPassword"
                    onChange={handleVerificarPasswordChange}
                />
            </Form.Group>
            <Button type="submit" variant="primary" className="text-center mt-3 col-12">
                Sign Up
            </Button>
        </Form>
    );
}