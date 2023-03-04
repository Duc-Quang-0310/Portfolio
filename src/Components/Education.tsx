import { Card, Col, Row } from "react-bootstrap";
import { InfoCircleFill, HouseFill, Ethernet } from "react-bootstrap-icons";

export const Education = () => {
  return (
    <div>
      <h3 className="text-header">Details</h3>
      <Row>
        <Col lg={12} xl={4}>
          <Card className="p-4 shadow-sm mb-3">
            <InfoCircleFill color="#EC4747" fontSize={50} />
            <Card.Text className="text-card ">Basic Info</Card.Text>
            <Card.Title className="card-title">Nguyễn Đức Quang</Card.Title>
            <p className="card-block-info mt-2">
              Date of Birth <span>03-10-2000</span>
            </p>
            <p className="card-block-info">
              Province<span>Hà Nội </span>
            </p>
            <p className="card-block-info">
              District<span>Bắc Từ Liêm</span>
            </p>
            <p className="card-block-info">
              Ward<span>Liên Mạc</span>
            </p>
          </Card>
        </Col>
        <Col lg={12} xl={4}>
          <Card className="p-4 shadow-sm mb-3">
            <Ethernet color="#EC4747" fontSize={50} />
            <Card.Text className="text-card">Additional Info</Card.Text>
            <Card.Title className="card-title">Developer</Card.Title>
            <p className="card-block-info mt-2">
              VMO Global
              <span className="text-right">07/2021-now</span>
            </p>
            <p className="card-block-info ">
              Powergate Software
              <span className="text-right">07/2021-06/2021</span>
            </p>
            <p className="card-block-info ">
              Favorite JS Framework
              <span className="text-right font-weight-bold text-important">
                ReactJS
              </span>
            </p>
            <p className="card-block-info ">
              State Management
              <span className="text-right font-weight-bold text-important">
                Redux, Redux Toolkit, Redux Saga, Zustand
              </span>
            </p>
            <p className="card-block-info">
              CSS Framework
              <span className="text-right">
                MUI, Bootstrap, ChakraUI, TailWind CSS
              </span>
            </p>
            <p className="card-block-info">
              Programing Language
              <span className="text-right text-important">
                Javascript, Typescript
              </span>
            </p>
            <p className="card-block-info">
              Code control
              <span className="text-right">Github, Bitbucket</span>
            </p>
            <p className="card-block-info">
              Workflow control
              <span className="text-right">Jira</span>
            </p>
          </Card>
        </Col>
        <Col lg={12} xl={4}>
          <Card className="p-4 shadow-sm mb-3">
            <HouseFill color="#EC4747" fontSize={50} />
            <Card.Text className="text-card">Education</Card.Text>
            <Card.Title className="card-title">PTIT</Card.Title>
            <p className="card-block-info">
              Name
              <span style={{ textAlign: "right" }}>
                Post Telecommunications Institute Of Technology
              </span>
            </p>
            <p className="card-block-info">
              English Certification
              <span className="text-important">Toeic - 825</span>
            </p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
