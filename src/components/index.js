import React from "react";
import "./index.scss";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./header/header";
import Small from "./body/smallBox/small";
import BigBox from "./body/bigBox/bigBox";
import Footer from "./footer/footer";

const Index = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col sm={12}>
            <div className="holdIndexHeader">
              <div style={{ width: "90%" }}>
                <Header />
              </div>
            </div>
          </Col>
          <Col sm={12}>
            <div className="holdIndexBody">
              <div style={{ width: "90%" }}>
                <div style={{ width: "100%", display: "flex" }}>
                  <div className="smallBox">
                    <Small />
                  </div>
                  <div className="bigBox">
                    <BigBox />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={12} style={{ backgroundColor: "whitesmoke" }}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "90%" }}>
                <Footer />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Index;
