import React from "react";
import { Card, Col } from "react-bootstrap";
import { Button, Icon } from "semantic-ui-react";
import { Manager } from "../../../App/AppProvider";
import Motion from "../../FramerMotion/MotionSettings";

export default function ExportingData() {
  const {
    general,
    generalDispatch,
    patients,
    treatment,
    reservations,
    patientsDispatch,
    treatmentDispatch,
    reservationsDispatch,
  } = React.useContext(Manager);

  const exporting = () => {
    localStorage.setItem("patients", JSON.stringify(patients));
    localStorage.setItem("reservations", JSON.stringify(reservations));
    localStorage.setItem("treatment", JSON.stringify(treatment));

    generalDispatch({
      type: "SHOWALERT",
      msg: "All your data exported successfully",
      alertType: "success",
    });
  };

  const importing = () => {
    patientsDispatch({ type: "IMPORT" });
    reservationsDispatch({ type: "IMPORT" });
    treatmentDispatch({ type: "IMPORT" });
    generalDispatch({
      type: "SHOWALERT",
      msg: "All your data imported successfully",
      alertType: "success",
    });
  };

  return (
    <Col xs={12} md={6}>
      <Motion pos="right">
        <Card className="p-3 h-100">
          <h3 className={`text-${general.theme.text} my-2`}>
            <Icon name="database" />
            Export & Import Data
          </h3>
          <p>
            this option allow you to export all your data and save it then
            importing them manually when you need .
          </p>
          <div className="my-2">
            <p className="text-danger">
              Note: Every time you want to save your data you must export them
              so you dont lose them. you can enable the auto import to
              automatically import them when logging in.
            </p>
          </div>
          <div className="d-flex gap-1 my-3">
            <Button onClick={importing}>
              <Icon name="download" />
              Import
            </Button>
            <Button onClick={exporting}>
              <Icon name="upload" />
              Export
            </Button>
          </div>
        </Card>
      </Motion>
    </Col>
  );
}
