import { Navbar, Nav, Container } from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "./CartWidget";
//import ItemListenerContainer from "./ItemListContainer";
import {Link} from 'react-router-dom';

export const NavbarBootstrap = () =>{


             return (
           <Navbar bg="light" data-bs-theme="light">      
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container>
               <Navbar.Brand href="/category/:id">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                     <Nav.Link href="#home">Ofertas do Dia</Nav.Link>
                    <Nav.Link href="#link">Cadastro</Nav.Link>
                    <NavDropdown title="Minha Conta" id="basic-nav-dropdown">
                      <NavDropdown.Item ><Link to="meus_pedidos">Meus Pedidos</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">
                        Sair
                      </NavDropdown.Item>
                 </NavDropdown>
                 <Nav.Link href="#link"><CartWidget></CartWidget> </Nav.Link>
               </Nav>
              </Navbar.Collapse>
              </Container>

            </Navbar>
            </Navbar>
          );
                
       

    }


export default NavbarBootstrap;   

