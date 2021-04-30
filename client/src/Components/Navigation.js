import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'


const Navigation = () => {
    return (
        <>
            <Navbar bg="light" fixed="top" className="navigation">
                <Navbar.Brand href="/" className='remember'>Remember<span>That</span></Navbar.Brand>
                <Nav defaultActiveKey="/" as="ul">
                    <Nav.Item as="li">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="/features">Features</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="/pricing">Pricing</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
                <button className="premium">Go Premium</button>

            </Navbar>
        </>
    )
}

export default Navigation
