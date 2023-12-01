import { Col, Row } from "react-bootstrap";
import CompleteBtn from "./CompleteBtn";

export default function CardInfo({ treatment }) {
  return (
    <Row className="mt-3  text-capitalize text-center">
      <Col className="fs-4 text-capitalize d-flex flex-column" xs={12}>
        <b>Patient</b> <span className="fs-6">{treatment.name}</span>
        <hr />
      </Col>
      <Col className="fs-4 text-capitalize d-flex flex-column" xs={12}>
        <b>Blood Group</b>
        <span className="fs-6 text-uppercase">{treatment.blood_Group}</span>
        <hr />
      </Col>
      <Col className="fs-4 d-flex flex-column" xs={12}>
        <b>Reservation Time</b> <span className="fs-6">{treatment.time}</span>
        <hr />
      </Col>
      <Col className=" d-flex justify-content-center" xs={12}>
        <CompleteBtn id={treatment.id} />
      </Col>
    </Row>
  );
}
