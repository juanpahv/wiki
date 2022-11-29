import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import AppNavbar from "../common/AppNavbar";
import AppAside from "../common/AppAside";
import "./scss/Home.scss"

export default function Home (){
    return (
        <>
            <Container fluid >
                <Row>
                    <Col md={1} className="p-0">
                        <AppAside />
                    </Col>
                    <Col md={11} className="p-0">
                        <Row className="m-0">
                            <AppNavbar/>
                        </Row>
                        <Container>
                            <Row className="justify-content-center mt-5">
                                <Col md={ {span: 10, offset: 2} } className="main p-5">
                                    <Outlet />
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
}