// NavBarBS.js
import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget'; // Importe o CartWidget aqui
import { useCart } from './CartContext'; // Importe o hook useCart do CartContext

const NavbarBootstrap = () => {
  const { totalItems } = useCart(); // Obtenha o total de itens do carrinho usando o hook useCart

  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Ofertas do Dia</Nav.Link>
            <Nav.Link href="#link">Cadastro</Nav.Link>
            <NavDropdown title="Minha Conta" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="meus_pedidos">Meus Pedidos</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Sair</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link to="/cart" className="nav-link">
              <CartWidget />
              {totalItems > 0 && (
                <span className="badge bg-secondary">{totalItems}</span>
              )}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarBootstrap;
