import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignUpForm from '../forms/SignUpForm';
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./scss/SignUp.scss"

export default function SignUp (){
    return (
        <div className="bg">
            <Container className="content-su">
                <Row>
                    <h1 className="text-center"><b>Sign Up</b></h1>
                    <SignUpForm/>
                    <Col md={12} className="pt-4 text-center">
                        Already have an acconut? 
                        <Link to={"/LogIn"}>
                            <p>Click here to log in</p>
                        </Link>
                        <Link to={"/Landing"}>
                            <FontAwesomeIcon icon={faHouse} size="xl" className="pb-2" color="black" />
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}