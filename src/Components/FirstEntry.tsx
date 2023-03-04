import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

export const FirstEntry = () => {
  return (
    <Row className="first-entry-container ">
      <Col
        lg={12}
        xl={3}
        className="d-flex justify-content-center align-items-center avatar-container pt-4"
      >
        <Image src="./images/avatar.jpg" roundedCircle className="avatar" />
      </Col>
      <Col
        lg={12}
        xl={9}
        className="d-flex justify-content-center flex-column first-entry-text-wrapper "
      >
        <div className="text-entry-wrapper ">
          <div className="static-txt">Hi, I'm</div>
          <ul className="dynamic-txts">
            <li>
              <span>Quang</span>
            </li>
            <li>
              <span>A Designer</span>
            </li>
            <li>
              <span>A Developer</span>
            </li>
          </ul>
        </div>

        <h4 className="text-headline">
          This is a website to introduce about myself. All of this given
          information is true. You can contact with me through the information
          below. Thanks for seeing this. Hope you have a wonderful time.
        </h4>

        <Button
          className="first-entry-button"
          onClick={() =>
            window.open(
              "https://www.topcv.vn/xem-cv/DVwMUF8NCVsCVl0PXARWBlZTAQZdDQVWV1MIVwdeb9"
            )
          }
        >
          Discover more
        </Button>
      </Col>
    </Row>
  );
};
