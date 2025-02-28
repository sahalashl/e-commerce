import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import productsData from "../data/products.json";
import { Container, Row, Col, Form } from "react-bootstrap";

const ProductList = () => {
  const [products, setProducts] = useState(productsData);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const filteredProducts = productsData.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    setProducts(filteredProducts);
  }, [search]);

  return (
    <Container>
      <Form.Control
        type="text"
        placeholder="Search products..."
        onChange={(e) => setSearch(e.target.value)}
        className="my-3"
      />
      <Row>
        {products.map((product) => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;