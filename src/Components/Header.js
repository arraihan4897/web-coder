import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from './logo.png'
import { AiOutlineUser } from "react-icons/ai";
import { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';

    
function Header() {
  const {user,logOut}= useContext(AuthContext)
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" lg = '100' width='100' variant="dark">
      <Container  width='100' >
        <Navbar.Brand href="#home"> <img src={logo} style={{height:40,width:40, marginRight:20, borderRadius:50,marginLeft:0 }} alt="" /></Navbar.Brand>
        <Navbar.Brand href="#home"> Web Coder</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <> 
             <Nav.Link href="/Courses"><Button variant="outline-light" > <b>Courses</b> </Button>{' '}</Nav.Link>
            <Nav.Link href="/FAQ"><Button variant="outline-light" > <b>FAQ</b> </Button>{' '}</Nav.Link>
            <Nav.Link href="/Blog"> <Button variant="outline-light" > <b>Blog</b> </Button>{' '}</Nav.Link>
            {user?.uid?
           
            
            <Nav.Link href="" className='ps-5 ms-5'>   <Button onClick={logOut} variant="outline-primary" > <b>Logout</b> </Button>{' '}</Nav.Link>
              :
              <> 
               <Nav.Link href="/register">Register</Nav.Link>
                          <Nav.Link href="/Login">LogIn</Nav.Link>
                   </>       }
              



            <span  className='text-light ms-5 ps-5 pt-3'> <strong className='ms-5 ps-5 '><AiOutlineUser></AiOutlineUser></strong>   <i className='text-primary'>{user?.email}</i> </span>
            </>
              
          
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Header;

       
     