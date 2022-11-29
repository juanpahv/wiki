import {CSSPreview} from '../articleContent/CSSContent';
import {HTMLPreview} from '../articleContent/HTMLContent';
import {HTTPPreview} from '../articleContent/HTTPContent';
import {JavaScriptPreview} from '../articleContent/JavaScriptContent';
import {Container, Row, Col} from 'react-bootstrap';

export default function Landing (){
    return (
        <>
        <Container className='Contenido'>
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