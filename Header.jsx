import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import Carosels from './Carosels';
import 'bootstrap/dist/css/bootstrap.min.css';
import img3 from './image1/swami5.jpeg';
import Products from './Products';
import { Link } from 'react-router-dom';





function Header() {
    
  return (

    <>
      <div className='head'>
      <div className='haed1'>
      <img className="logo" src={img3} height={90} width={90} alt='logo' />

      <h1><b>SHREE SAMARTH EARTHMOVER SOLUTIONS</b></h1>
        </div>
    
    
    <Navbar className="navbar" data-bs-theme="dark">
      <Container className=' m-0' >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link className=' text-white text-decoration-none' to={"/home"}>Home</Link></Nav.Link>
            <Nav.Link><Link className=' text-white text-decoration-none' to={"/products"}>Products</Link></Nav.Link>
            <Nav.Link><Link className=' text-white text-decoration-none' to={"/"}>Login</Link></Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  

    

    </>
  );
}

export default Header;