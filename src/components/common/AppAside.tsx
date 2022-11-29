import { Image, Nav } from "react-bootstrap";
import './scss/AppAside.scss'

export default function AppAside() {

    return(
        <>
            <div className="sideBar sticky-top">
                <Image src="../img/logo.png"/>
                <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/HTTP">HTTP</Nav.Link>
                <Nav.Link href="/HTML">HTML</Nav.Link>
                <Nav.Link href="/JavaScript">JavaScript</Nav.Link>
                <Nav.Link href="/CSS">CSS</Nav.Link>
                </Nav>
            </div>
        </>
    )
}