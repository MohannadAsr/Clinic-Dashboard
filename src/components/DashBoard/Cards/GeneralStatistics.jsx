import { faLightbulb, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Col, Row } from "react-bootstrap";
import { Manager } from "../../../App/AppProvider";
import React from "react";
import { motion } from "framer-motion";

export default function GeneralStatistics() {
  const { general } = React.useContext(Manager);
  return (
    <Col xs={12} md={6} lg={8}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, stiffness: 50, type: "spring" }}
        className="h-100"
      >
        <Card className="p-3 py-4 h-100">
          <Row className="g-3 ">
            <Col xs={12} className="d-flex flex-column text-center">
              <h3>Current Theme Color</h3>
              <div className="d-flex justify-content-center align-items-center gap-2 my-2">
                <div
                  style={{ width: "50px", height: "50px" }}
                  className="bg-primary rounded-pill "
                ></div>
                <h3 className="text-primary ">#20c997</h3>
              </div>
            </Col>
            <Col xs={12} className="d-flex flex-column text-center">
              <h3>Current Theme Mode</h3>
              <div className="d-flex justify-content-center align-items-center gap-2 my-2">
                <h3 className={`text-${general.theme.text} text-capitalize`}>
                  {general.theme.name}
                </h3>
                {general.theme.name === "dark" ? (
                  <FontAwesomeIcon
                    icon={faMoon}
                    size="2x"
                    className={`text-${general.theme.text}`}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    size="2x"
                    className={`text-${general.theme.text}`}
                  />
                )}
              </div>
            </Col>
            <Col xs={12} className="d-flex flex-column text-center">
              <h3>Current Treatment Capacity </h3>
              <div className="d-flex justify-content-center align-items-center gap-2 my-3">
                <h3 className="text-primary ">{general.treatment_Capacity}</h3>
              </div>
            </Col>
          </Row>
        </Card>
      </motion.div>
    </Col>
  );
}
