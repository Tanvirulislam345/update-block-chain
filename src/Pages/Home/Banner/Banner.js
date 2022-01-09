import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Container style={{ paddingTop: "148px", paddingBottom: "136px" }}>
        <div>
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Col
              xs={12}
              sm={12}
              md={10}
              lg={7}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1
                className=""
                style={{
                  fontWeight: "bold",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                Create Digital Items, Sell Them Yourself Or Keep Collecting
              </h1>
              <small
                style={{
                  textAlign: "center",
                  color: "#fff",
                  paddingTop: "30px",
                  paddingBottom: "35px",
                }}
                className="col-md-8"
              >
                The world is clear. Our aim is to become the first NFT generator
                on the Binance Smart Chain & Ethereum Blockchain.
              </small>
              <Button
                variant="info"
                size="sm"
                className="navButton"
                style={{
                  color: "#FFFFFF",
                  padding: "14px 52px",
                  border: 'none',
                  borderRadius: "4px"
                }}
              >
                BUY $TRAP
              </Button>{" "}
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
