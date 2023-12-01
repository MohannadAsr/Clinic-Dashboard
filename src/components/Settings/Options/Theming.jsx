import React from "react";
import { Card, Col } from "react-bootstrap";
import { Manager } from "../../../App/AppProvider";
import { Button, Icon } from "semantic-ui-react";
import Motion from "../../FramerMotion/MotionSettings";

export default function Themeing() {
  const { general, generalDispatch } = React.useContext(Manager);

  return (
    <Col xs={12} md={6}>
      <Motion>
        <Card className="p-3 h-100">
          <h3 className={`text-${general.theme.text} my-2`}>
            <Icon name="modx" />
            Theming
          </h3>
          <p>
            this dashboard come with two modes light and dark you can switch
            between these modes in this section .
          </p>

          <Button.Group size="large" className=" m-auto my-2 ">
            <Button
              active={general.theme.name === "dark" ? true : false}
              className={`${general.theme.name === "dark" ? "bg-primary" : ""}`}
              onClick={() => {
                generalDispatch({ type: "SWITCHMODE", mode: "dark" });
              }}
            >
              <Icon name="moon" />
              Dark
            </Button>
            <Button.Or />
            <Button
              active={general.theme.name === "light" ? true : false}
              className={`${
                general.theme.name === "light" ? "bg-primary" : ""
              }`}
              onClick={() => {
                generalDispatch({ type: "SWITCHMODE", mode: "light" });
              }}
            >
              <Icon name="lightbulb" />
              Light
            </Button>
          </Button.Group>
        </Card>
      </Motion>
    </Col>
  );
}
