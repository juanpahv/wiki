import { Nav } from "react-bootstrap";
import './scss/AppAside.scss'
import logo from "../img/logo.svg"

export default function AppAside() {

    return(
        <>
            <div className="sideBar sticky-top">
                <img src={logo} alt="logo" width={60} className="my-3"/>
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