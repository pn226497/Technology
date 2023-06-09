import Button from 'react-bootstrap/Button';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from "react-router-dom";
import '../components/Menu.css';


function Menu() {


  return (
    <Navbar id="menu" expand="lg" className='fixed-top' >
      <Container  >
        <Navbar.Brand ><h1>TECHNOLOGY</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link id="nav" className="text-dark" to="/">Trang chủ</Link>
            <Link id="nav" className=" text-dark" to="/Phone">Điện thoại</Link>
            <Link id="nav" className=" text-dark" to="/Laptop">Laptop</Link>
            <Link id="nav" className=" text-dark" to="/Smartwatch">Smartwatch</Link>

          </Nav>
          <Form className="d-flex" >
           
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            
            <Button variant="outline-success">Search</Button>
          </Form>
          <button 
          style={{border:"none", background:"none", marginLeft:"10px"}}
          >
            <i class="fa fa-cart-shopping fa-2xl"></i>
            </button>
        </Navbar.Collapse>
        
      </Container>

      < div id="detail" >
        <Outlet />
      </div >
    </Navbar>

  )

}

export default Menu