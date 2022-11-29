import { Button, Container, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './scss/AppNavbar.scss'

export default function AppNavbar() {
    const navigate = useNavigate();

    function handleClickLogIn(){
        navigate('/LogIn');
    }

    function handleClickSignUp(){
        navigate('/SignUp');
    }

    return(
            <Navbar className="AppNavbar">
                <Container>
                    <Navbar.Brand>
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
                        <Link to={"/Account"} className="mt-2">
                            <FontAwesomeIcon icon ={faUser} size="xl" className="pb-2" color="black" />
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}