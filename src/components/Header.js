import React from "react";
import { useSelector } from "react-redux";
import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
        <Navbar.Text>
          🛒 Cart ({totalQuantity})
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Header;