import {CSSPreview} from '../articleContent/CSSContent';
import {HTMLPreview} from '../articleContent/HTMLContent';
import {HTTPPreview} from '../articleContent/HTTPContent';
import {JavaScriptPreview} from '../articleContent/JavaScriptContent';
import {Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./scss/Landing.scss"

export default function Landing (){
    return (
        <>
        <h2 className="text-center mb-4 title">
            <b>Artículos</b>
            </h2>
        <Container>
            <Row>
                <Col md={7} className="leftArticles">
                    <Link to={"/HTML"} className="link"><HTMLPreview/></Link>
                    <Link to={"/CSS"} className="link"><CSSPreview/></Link>
                </Col>
                <Col md={5} className="rightArticles">
                    <Link to={"/JavaScript"} className="link"><JavaScriptPreview/></Link>
                    <Link to={"/HTTP"} className="link"><HTTPPreview/></Link>
                </Col>
            </Row>
        </Container>
        </>
    );
}