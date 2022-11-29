import { Nav } from "react-bootstrap";
import logo from "../img/logo.svg"
import './scss/AppAside.scss'

export default function AppAside() {

    return(
        <>
            <div className="sideBar sticky-top">
                <Nav className="flex-column">
                    <Nav.Link href="/Landing">
                        <img src={logo} className="mt-2" width={60} alt="..." />
                    </Nav.Link>
                    <Nav.Link href="/HTTP">HTTP</Nav.Link>
                    <Nav.Link href="/HTML">HTML</Nav.Link>
                    <Nav.Link href="/JavaScript">JavaScript</Nav.Link>
                    <Nav.Link href="/CSS">CSS</Nav.Link>
                </Nav>
            </div>
        </>
    )
}