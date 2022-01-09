import React from "react";
import { Button, Carousel, Col, Row } from "react-bootstrap";
import videofile from "../../../Images/video/video.mp4";
import "./VideoSection.css";

const VideoSection = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <video
            autoPlay
            loop
            muted
            src={videofile}
            type="video/mp4"
            style={{
              height: "640px",
              objectFit: "cover",
              opacity: "0.93",
            }}
            className="d-block w-100"
          ></video>
          <Carousel.Caption>
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
                md={8}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h1 style={{ fontWeight: 'bold', textAlign: 'justify' }}>The Best Place to Collect NFT</h1>
                <p
                  style={{
                    // width: "90%",
                    textAlign: "justify",
                    paddingTop: "31px",
                    paddingBottom: "40px",
                  }}
                  className="col-md-11 text-md-center"
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo doL
                </p>
                <div>
                  <Button
                    className="text-light me-3 navButton"
                    style={{ padding: "14px 46px", marginTop: "10px" }}
                    variant="info"
                  >
                    Create
                  </Button>{" "}
                  <Button className="text-light me-3 " variant="outline-info"
                    style={{ padding: "14px 15px", marginTop: "10px" }}
                  >
                    Connect Wallet
                  </Button>{" "}
                </div>
              </Col>
            </Row>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default VideoSection;
