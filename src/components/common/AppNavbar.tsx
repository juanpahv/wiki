import { Button, Container, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './scss/AppNavbar.scss'

export default function AppNavbar() {
    const navigate = useNavigate();

    function handleClickLogIn(){
        navigate('/LogIn');
    }

    function handleClickSignUp(){
        navigate('/SignUp');
    }

    function handleClickHome(){
        navigate('/Landing');
    }

    return(
            <Navbar className="AppNavbar">
                <Container>
                    <Navbar.Brand onClick={handleClickHome}>
                        <h2>Desarrollo Web</h2>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Button className="me-3" onClick={handleClickLogIn}>
                            Log In
                        </Button>
                        <Button onClick={handleClickSignUp}>
                            Sign Up
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}