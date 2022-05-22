import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { TelephoneFill, Facebook, Linkedin } from "react-bootstrap-icons";

export const Contact = () => {
  return (
    <div>
      <h3 className="text-header">Contact</h3>
      <p className="sub-text text-center">
        All of the following information can be contacted. For working purpose
        please contact through Email. Thank you for staying here with me ❤️
      </p>
      <Row>
        <Col sm={12} md={4}>
          <Card className="p-4 shadow-sm mb-3 ">
            <Row>
              <Col xs={3}>
                <TelephoneFill color="#EC4747" fontSize={50} />
              </Col>
              <Col xs={9} className="center-div">
                <Card.Title className="card-title ml-2">
                  096.484.9119
                </Card.Title>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card className="p-4 shadow-sm mb-3 ">
            <a
              href="https://www.facebook.com/profile.php?id=100080053136869"
              title="a"
              className="text-deco-none"
            >
              <Row>
                <Col xs={3}>
                  <Facebook color="#EC4747" fontSize={50} />
                </Col>
                <Col xs={9} className="center-div">
                  <Card.Title className="card-title ml-2">
                    Nguyễn Quang
                  </Card.Title>
                </Col>
              </Row>
            </a>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card className="p-4 shadow-sm mb-3 ">
            <a
              href="https://www.linkedin.com/in/nguy%E1%BB%85n-%C4%91%E1%BB%A9c-quang-081a561b7/"
              title="a"
              className="text-deco-none"
            >
              <Row>
                <Col xs={3}>
                  <Linkedin color="#EC4747" fontSize={50} />
                </Col>
                <Col xs={9} className="center-div">
                  <Card.Title className="card-title ml-2">
                    Nguyễn Quang
                  </Card.Title>
                </Col>
              </Row>
            </a>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
