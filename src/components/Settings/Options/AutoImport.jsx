import React from "react";
import { Card, Col } from "react-bootstrap";
import { Button, Icon } from "semantic-ui-react";
import { Manager } from "../../../App/AppProvider";
import Motion from "../../FramerMotion/MotionSettings";

export default function AutoImport() {
  const { general, generalDispatch } = React.useContext(Manager);
  return (
    <Col xs={12} md={6}>
      <Motion pos="right">
        <Card className="p-3 h-100">
          <h3 className={`text-${general.theme.text} my-2`}>
            <Icon name="refresh" />
            Auto-import data
          </h3>
          <p>
            this option allow you to automatically import your database like
            (patients , reservations , treatment) every time you logging in
          </p>
          <div className="my-3">
            <Button
              className={`me-auto my-3 bg-${
                general.auto_Import ? "primary" : "danger"
              } `}
              onClick={() => {
                generalDispatch({ type: "SWITCHIMPORT" });
              }}
            >
              <Icon name={general.auto_Import ? "checkmark" : "x"} />
              {general.auto_Import ? " Enabled" : " Disabled"}
            </Button>
          </div>
        </Card>
      </Motion>
    </Col>
  );
}
