import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";

export const Project = () => {
  return (
    <div>
      <h3 className="text-header">My Project</h3>
      <p className="sub-text">
        Up to now, I have finished 2 projects with one project finished and the
        other still under development:
      </p>
      <ul>
        <li className="sub-text">
          First Project: Computadora is a e-commerce website which is created
          with MERN stack also as know as MongoDB-ExpressJS-ReactJS-NodeJS
          stack. This project for some reason the deployed version is crashed so
          I will leave a link to source code of Project:{" "}
          <a
            className="redirect-link"
            href="https://github.com/Duc-Quang-0310/BackEnd"
          >
            Backend
          </a>
          ,{" "}
          <a className="redirect-link" href="https://github.com/Duc-Quang-0310">
            Frontend
          </a>
        </li>
        <li className="text-decor-none">
          <Row>
            <Col md={6} className="mt-4">
              <Image src="./images/p1.png" className="image-normal shadow-sm" />
            </Col>
            <Col md={6} className="mt-4">
              <Image src="./images/p2.png" className="image-normal shadow-sm" />
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mt-4">
              <Image src="./images/p3.png" className="image-normal shadow-sm" />
            </Col>
            <Col md={6} className="mt-4">
              <Image src="./images/p4.png" className="image-normal shadow-sm" />
            </Col>
          </Row>
        </li>

        <li className="sub-text mt-4">
          Second Project: Gara-auto is an e-commerce website that is created
          with ReactJS-ExpressJS-NodeJS-SequelizeORM Stack. In this project
          besides the role of being a developer. I'm also the team leader in a
          team of 5 members: 3 dev, 1 designer, 1 tester. Coding progress still
          being updated daily at:{" "}
          <a
            className="redirect-link"
            href="https://github.com/A6-Super-Dev/Backend-Gara-auto"
          >
            Backend
          </a>
          ,{" "}
          <a
            className="redirect-link"
            href="https://github.com/A6-Super-Dev/FrontEnd-Gara-auto"
          >
            Frontend
          </a>
        </li>
        <li className="text-decor-none">
          <Row>
            <Col md={6} className="mt-4">
              <Image src="./images/1.png" className="image-normal shadow-sm" />
            </Col>
            <Col md={6} className="mt-4">
              <Image src="./images/2.png" className="image-normal shadow-sm" />
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mt-4">
              <Image src="./images/3.png" className="image-normal shadow-sm" />
            </Col>
            <Col md={6} className="mt-4">
              <Image src="./images/4.png" className="image-normal shadow-sm" />
            </Col>
          </Row>
        </li>
        <li className="text-decor-none">
          <Row className="d-flex justify-content-center">
            <Button className="button-custom">
              <a
                href="https://garaauto.netlify.app/home"
                className="redirect-link-white"
              >
                Take me there
              </a>
            </Button>
          </Row>
        </li>
      </ul>
    </div>
  );
};
