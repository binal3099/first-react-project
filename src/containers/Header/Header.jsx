import ComponentCom from "../../components/ComponentCom/ComponentCom";
import HOCP from "../../components/HOC/HOCP";
import HOCB from "../../components/HOC/HOCB";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Banner from "../../components/ComponentCom/Banner/Banner";
function Header(){
    return(

        // <header>
        //     <HOCP cmp = {<ComponentCom />} />
        //     <HOCB cmp = {<ComponentCom />} />
        // </header>
        <div>
             <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="ms-auto">
                <Nav.Link href="#home" style={{color:"white"}}>Home</Nav.Link>
                <Nav.Link href="#features" style={{color:"white"}}>About</Nav.Link>
                <Nav.Link href="#pricing" style={{color:"white"}}>Service</Nav.Link>
            </Nav>
            </Container>
            </Navbar>
            <Banner />
        </div>
    )

}
export default Header;