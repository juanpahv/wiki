import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Col, Container, ListGroup, Row, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import ChangePasswordForm from "../forms/ChangePasswordForm";
import VerifyEmailForm from "../forms/VerifyEmailForm";
import "./scss/Account.scss"

export default function Account() {
    return(
        <>
            <Container className="config p-5">
                <Col md={ {span: 8, offset: 2} }>
                    <Link to={"/Landing"}>
                        <FontAwesomeIcon icon ={faArrowLeft} size="xl" className="pb-2" color="black" />
                    </Link>
                    <Card>
                    <Card.Header as="h2">My account</Card.Header>
                    <Card.Body>
                            <Tab.Container id="tabs" defaultActiveKey="#link1">
                            <Row>
                                <Col sm={4}>
                                    <ListGroup>
                                        {/* <ListGroup.Item action variant="secondary" href="#link1">
                                        Mail verification
                                        </ListGroup.Item> */}
                                        <ListGroup.Item action variant="secondary" href="#link2">
                                        Change password
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                                <Col sm={8}>
                                    <Tab.Content>
                                        {/* <Tab.Pane eventKey="#link1">
                                            <ListGroup variant="flush">
                                                <ListGroup.Item className="mb-3"><h4>Verify your email</h4></ListGroup.Item>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quod qui suscipit. Adipisci aliquam labore minus, voluptates placeat eveniet at et quibusdam qui? Animi molestias quibusdam exercitationem illum provident saepe?
                                                <VerifyEmailForm />
                                            </ListGroup>
                                        </Tab.Pane> */}
                                        <Tab.Pane eventKey="#link2">
                                            <ListGroup variant="flush">
                                                <ListGroup.Item className="mb-3"><h4>Change your password</h4></ListGroup.Item>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa dignissimos laudantium. Vel possimus assumenda perspiciatis beatae reprehenderit! Dolor ut adipisci nobis omnis assumenda, molestias asperiores ullam laborum unde a.
                                                <ChangePasswordForm />
                                            </ListGroup>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                            </Tab.Container>
                    </Card.Body>
                    </Card>
                </Col>
            </Container>
        </>
    );
}