import React from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { Button, Icon } from "semantic-ui-react";
import { Manager } from "../../../App/AppProvider";
import Motion from "../../FramerMotion/MotionSettings";

export default function Extra() {
  const { general, generalDispatch } = React.useContext(Manager);
  const [formData, setFormData] = React.useState({
    dr_Name: "",
    treatment_Capacity: "",
  });

  const save = (e) => {
    e.preventDefault();
    generalDispatch({ type: "EDIT", values: formData });
    generalDispatch({
      type: "SHOWALERT",
      msg: "New settings applied",
      alertType: "success",
    });
  };
  return (
    <Col xs={12} md={6}>
      <Motion>
        <Card className="p-3 h-100">
          <h3 className={`text-${general.theme.text} my-2`}>
            <Icon name="setting" />
            Extra Settings
          </h3>
          <p>
            You can change your name and the maximum capacity for treatment
            assuming there are more than one doctor treating the patients
          </p>
          <div className="my-2">
            <Form
              onSubmit={(e) => {
                save(e);
              }}
            >
              <Row>
                <Form.Group as={Col} className="mb-3">
                  <Form.Label htmlFor="dr_Name">Doctor name</Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      setFormData((state) => {
                        return { ...state, dr_Name: e.target.value };
                      });
                    }}
                    type="text"
                    name="dr_Name"
                    id="dr_Name"
                    placeholder={general.dr_Name}
                    required
                  />
                </Form.Group>
                <Form.Group as={Col} className="mb-3">
                  <Form.Label htmlFor="treatment_Capacity">
                    Treatment capacity
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="treatment_Capacity"
                    id="treatment_Capacity"
                    required
                    placeholder={general.treatment_Capacity}
                    onChange={(e) => {
                      setFormData((state) => {
                        return { ...state, treatment_Capacity: e.target.value };
                      });
                    }}
                    max={5}
                    min={1}
                  />
                </Form.Group>
                <div>
                  <Button className="m-auto bg-primary " type="submit">
                    Change
                  </Button>
                </div>
              </Row>
            </Form>
          </div>
        </Card>
      </Motion>
    </Col>
  );
}
