import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PasswordRecoveryForm from "../forms/PasswordRecoveryForm";

export default function PasswordRecovery(){
    return(
        <Container className="p-5">
            <Col md={ {span: 8, offset: 2} }>
                <Link to={"/LogIn"}>
                    <FontAwesomeIcon icon ={faArrowLeft} size="xl" className="pb-2" color="black" />
                </Link>
                <Card >
                    <Card.Header as="h2">Help</Card.Header>
                    <Card.Body>
                        <Row>
                            <Col md={ {span: 10, offset: 1} } >
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="mb-3"><h4>Recover your password</h4></ListGroup.Item>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse repellat assumenda aliquid officiis, aperiam ad inventore cupiditate ipsum tempora recusandae nam autem, dolorem qui. Voluptate nam perferendis modi mollitia vel!
                                    <PasswordRecoveryForm />
                                </ListGroup>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Container>
    );
}