import React from "react";
import { Manager } from "../../App/AppProvider";
import { Card, Col, Row } from "react-bootstrap";
import CardInfo from "./CardInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";
import MainHeader from "../Custom/MainHeader";
import MotionSign from "../FramerMotion/MotionSign";

export default function Treatment() {
  const { treatment, general } = React.useContext(Manager);

  return (
    <section className="main-section px-2 py-3">
      <MainHeader text="Clinic Treatment" />
      {treatment.length !== 0 ? (
        <Row className="my-5 mx-2">
          {treatment?.slice(0, general.treatment_Capacity).map((item) => {
            return (
              <Col xs={12} md={6} lg={4} className="my-4" key={item.id}>
                <Card className="p-3 ">
                  <div className="treat">
                    <FontAwesomeIcon icon={faTooth} className="icon" />
                  </div>
                  <CardInfo treatment={item} />
                </Card>
              </Col>
            );
          })}
          {treatment.length > general.treatment_Capacity && (
            <Col
              xs={12}
              md={6}
              lg={4}
              className="my-4 text-muted d-flex align-items-center justify-content-center fs-4"
            >
              More Patients in the treatment Ready to start , complete this
              current treatment(s) to recieve the next patient ..
            </Col>
          )}
        </Row>
      ) : (
        <div className="h-75 d-flex align-items-center justify-content-center text-center flex-column ">
          <MotionSign className="w-100">
            <p className="text-muted fs-3 my-3 w-75 mx-auto">
              There is no patient in the treatment right now , you can choose
              the next one from the reservations section
            </p>
          </MotionSign>
        </div>
      )}
    </section>
  );
}
