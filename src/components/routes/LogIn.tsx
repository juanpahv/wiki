import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import LogInForm from "../forms/LogInForm";
import { useEffect } from "react";
import "./scss/LogIn.scss"

export default function LogIn (){
    const navigate = useNavigate();

    useEffect(() => {
        const tokenSesion = localStorage.getItem('tokenSesion');

        if(tokenSesion) {
            navigate('/Landing');
        }
    });

    return (
        <div className="bg">
            <Container className="content">
                <Row>
                    <h1 className="text-center">Log In</h1>
                    <LogInForm/>
                    <Col md={12} className="pt-4 text-center">
                        <Link to={"/PasswordRecovery"} className="text-center pt-3">
                            <p>Forgot password</p>
                        </Link>
                        Don't have an acconut? 
                        <Link to={"/SignUp"}>
                            <p>Click here to register</p>
                        </Link>
                        <Link to={"/Landing"} className="pt-4">
                            <FontAwesomeIcon icon ={faHouse} size="xl" className="pb-2" color="black" />
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}