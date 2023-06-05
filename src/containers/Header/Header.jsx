import ComponentCom from "../../components/ComponentCom/ComponentCom";
import HOCP from "../../components/HOC/HOCP";
import HOCB from "../../components/HOC/HOCB";
import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Banner from "../../components/ComponentCom/Banner/Banner";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
function Header() {

    const [count, setCount] = useState(0);
    console.log(count,"Count");

    const inc = () => {
        
        let n = count + 1; 
        setCount(n);
    }
    const dec = () => {
        
        let n = count - 1; 
        if(n >= 0){
            setCount(n);
        }
        else{
            setCount(0);
        }
    }

    return (

        // <header>
        //     <HOCP cmp = {<ComponentCom />} />
        //     <HOCB cmp = {<ComponentCom />} />
        // </header>
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" style={{ color: "white" }}>Home</Nav.Link>
                        <Nav.Link href="#features" style={{ color: "white" }}>About</Nav.Link>
                        <Nav.Link href="#pricing" style={{ color: "white" }}>Service</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Banner />
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <p>{
                        count
                        }</p>
                    <Button variant="primary" onClick={inc}>Go somewhere</Button>
                    <Button variant="danger" onClick={dec}>Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )

}
export default Header;