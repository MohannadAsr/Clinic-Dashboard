import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Col, Row } from "react-bootstrap";
import CardInfo from "./CardInfo";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import Cancel from "./Actions/Cancel";
import MakeWait from "./Actions/MakeWait";
import MotionSign from "../FramerMotion/MotionSign";
import MotionCard from "../FramerMotion/MotionCard";

export default function PreList({ reservations }) {
  return (
    <div className="py-4 px-2">
      <Row className="gy-5">
        {reservations.length !== 0 ? (
          reservations.map((res) => {
            return (
              <Col xs={12} lg={4} xl={3} key={res.id}>
                <MotionCard>
                  <Card className="p-3 postition-relative">
                    <div className="logo pre">
                      <FontAwesomeIcon icon={faCalendarDays} className="icon" />
                    </div>
                    <CardInfo reservation={res} />
                    <div className="d-flex justify-content-between">
                      <MakeWait id={res.id} />
                      <Cancel id={res.id} />
                    </div>
                  </Card>
                </MotionCard>
              </Col>
            );
          })
        ) : (
          <div className="d-flex align-items-center justify-content-center text-center">
            <h2 className="text-muted">
              <MotionSign>
                There are no reservations for the upcoming days !
              </MotionSign>
            </h2>
          </div>
        )}
      </Row>
    </div>
  );
}
