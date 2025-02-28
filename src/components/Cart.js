import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import { Container, ListGroup, Button } from "react-bootstrap";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Container>
      <h2>Shopping Cart</h2>
      <ListGroup>
        {cartItems.map((item) => (
          <ListGroup.Item key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <Button variant="danger" size="sm" onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h4>Total: ${totalPrice.toFixed(2)}</h4>
    </Container>
  );
};

export default Cart;