import {CSSPreview} from '../articleContent/CSSContent';
import {HTMLPreview} from '../articleContent/HTMLContent';
import {HTTPPreview} from '../articleContent/HTTPContent';
import {JavaScriptPreview} from '../articleContent/JavaScriptContent';
import {Container, Row, Col} from 'react-bootstrap';
import "./scss/Landing.scss"

export default function Landing (){
    return (
        <>
        <h2 className="text-center mb-4 title">
            <b>Artículos</b>
            </h2>
        <Container className="">
            <Row>
                <Col md={7} className="leftArticles">
                    <HTMLPreview/>
                    <CSSPreview/>
                </Col>
                <Col md={5} className="rightArticles">
                    <JavaScriptPreview/>
                    <HTTPPreview/>
                </Col>
            </Row>
        </Container>
        </>
    );
}