import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Container style={{ paddingTop: "136px", paddingBottom: "136px" }}>
        <div className="bannertext">
          <h1>Create Digital Items, Sell Them Yourself Or Keep Collecting</h1>
          <p>
            The world is clear. Our aim is to become the first NFT generator on
            the Binance Smart Chain & Ethereum Blockchain.
          </p>
          <Button
            variant="info"
            size="sm"
            className="navButton"
          >
            BUY $TRAP
          </Button>{" "}
        </div>
      </Container>
    </div>
  );
};

export default Banner;
