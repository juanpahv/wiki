import { Button, Container, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './scss/AppNavbar.scss'
import { useEffect, useState } from "react";

export default function AppNavbar() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadedElement, setLodedElement] = useState(<></>)
    const navigate = useNavigate();

    async function getTokenSession() {
        const tokenSesionValue = localStorage.getItem('tokenSesion');
        
        if(tokenSesionValue){
            setLodedElement(
                <Link to={"/Account"} className="mt-2">
                    <FontAwesomeIcon icon ={faUser} size="xl" className="pb-2" color="black" />
                </Link>
            );


        }else{
            setLodedElement(
                <>
                    <Button className="me-3" onClick={handleClickLogIn}>
                        Log In
                    </Button>
                    <Button onClick={handleClickSignUp}>
                        Sign Up
                    </Button>
                </>
            );
        }
        setIsLoaded(true)
    }

    useEffect(() => {
        if (!isLoaded) {
            getTokenSession();
        }
    });

    if (!isLoaded) {
        return <></>;
    }

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
                        {loadedElement}                 
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}