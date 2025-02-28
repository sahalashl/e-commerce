import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>${product.price}</Card.Text>
        <Button onClick={() => dispatch(addToCart(product))} variant="primary">
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;