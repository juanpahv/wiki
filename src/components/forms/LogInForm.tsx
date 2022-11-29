import { useState, FormEvent, ChangeEvent } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import LogInTask from "../../tasks/LogInTask";

export default function LogInForm () {
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function handleFormSubmit(event: FormEvent) {
        event.preventDefault();
        
        try {
            const logInTask = new LogInTask({
                nombreUsuario,
                password
            });

            await logInTask.execute();

            navigate('/');
        } catch (e) {
            switch ((e as Error).message) {
                case 'ErrorFormularioIncompleto':
                    toast(
                        'One or more fields are empty',
                        { type: 'warning' }
                    );
                    break;
                case 'ErrorNombreUsuarioPasswordIncorrectos':
                    toast(
                        "Password and username don't match",
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

    function handleNombreUsuarioChange(
        event: ChangeEvent<HTMLInputElement>
    ) {
        const valueNombreUsuario = event.target.value;
        setNombreUsuario(valueNombreUsuario);
    }

    function handlePasswordChange(
        event: ChangeEvent<HTMLInputElement>
    ) {
        const valuePassword = event.target.value;
        setPassword(valuePassword);
    }
  

    return(
        <Form onSubmit={handleFormSubmit}>
            <Form.Group>
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
            <Button type="submit" variant="primary" className="text-center mt-3 col-12">
                Log In
            </Button>
        </Form>
    );
}