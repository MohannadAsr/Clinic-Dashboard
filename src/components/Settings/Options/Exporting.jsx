import React from "react";
import { Card, Col } from "react-bootstrap";
import { Button, Icon } from "semantic-ui-react";
import { Manager } from "../../../App/AppProvider";
import Motion from "../../FramerMotion/MotionSettings";

export default function Exporting() {
  const { general, generalDispatch } = React.useContext(Manager);

  const save = () => {
    localStorage.setItem("general", JSON.stringify(general));
    generalDispatch({
      type: "SHOWALERT",
      msg: "Settings saved successfully",
      alertType: "success",
    });
  };

  return (
    <Col xs={12} md={6}>
      <Motion>
        <Card className="p-3 h-100">
          <h3 className={`text-${general.theme.text} my-2`}>
            <Icon name="save" />
            Exporting Settings
          </h3>
          <p>
            this option allow you to export your current settings by saving it
            in the local storage and it will be affected every time you visit
            your site
          </p>
          <div className="my-2">
            <p className="text-danger">
              Note: You must export your settings everytime you change your
              theme mode and auto-import and your extra settings to save your
              current settings .
            </p>
          </div>
          <Button className="me-auto my-3" onClick={save}>
            Export my settings
          </Button>
        </Card>
      </Motion>
    </Col>
  );
}
