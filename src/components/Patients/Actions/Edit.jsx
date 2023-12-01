import React from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";
import { Button, Icon } from "semantic-ui-react";
import { useFormik } from "formik";
import { Manager } from "../../../App/AppProvider";
import { PatientSchema } from "../../../Schemas/PatientSchema";

export default function Edit({ patient }) {
  const [open, setOpen] = React.useState(false);
  const { patientsDispatch, generalDispatch } = React.useContext(Manager);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      // id: "", auto passing on submiting
      name: patient.name,
      phone_Num: patient.phone_Num,
      blood_Group: patient.blood_Group,
    },
    validationSchema: PatientSchema,
    onSubmit: (values, { resetForm }) => {
      patientsDispatch({
        type: "EDIT",
        id: patient.id,
        values: { ...values },
      });
      resetForm(formik.initialValues);
      setOpen(false);
      generalDispatch({
        type: "SHOWALERT",
        msg: "patient informations edited successfully",
        alertType: "success",
      });
    },
  });

  return (
    <div>
      <Button
        animated="vertical"
        size="small"
        onClick={() => {
          setOpen(true);
        }}
      >
        <Button.Content hidden>Edit</Button.Content>
        <Button.Content visible>
          <Icon name="edit" />
        </Button.Content>
      </Button>

      <Modal
        size="lg"
        show={open}
        backdrop="static"
        onHide={() => setOpen(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Add new patient
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formik.handleSubmit}>
            <Row className="g-4 fs-5 p-2">
              <Form.Group as={Col} className="col-12">
                <Form.Label htmlFor="name">Patient name</Form.Label>
                <Form.Control
                  type="text"
                  id="name"
                  name="name"
                  placeholder="..."
                  className="w-75"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="validation-msg">*{formik.errors.name}</div>
                ) : null}
              </Form.Group>

              <Form.Group as={Col} className="col-6">
                <Form.Label htmlFor="number ">Patient Number</Form.Label>
                <Form.Control
                  type="text"
                  maxLength={15}
                  id="phone_Num"
                  name="phone_Num"
                  placeholder="09..."
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone_Num}
                />
                {formik.touched.phone_Num && formik.errors.phone_Num ? (
                  <div className="validation-msg">
                    *{formik.errors.phone_Num}
                  </div>
                ) : null}
              </Form.Group>

              <Form.Group as={Col} className="col-6">
                <Form.Label htmlFor="number ">Blood group</Form.Label>

                <Form.Control
                  id="blood_Group"
                  name="blood_Group"
                  type="text"
                  maxLength={3}
                  placeholder="O+, O-, A+ ... "
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.blood_Group}
                ></Form.Control>
                {formik.touched.blood_Group && formik.errors.blood_Group ? (
                  <div className="validation-msg">
                    *{formik.errors.blood_Group}
                  </div>
                ) : null}
              </Form.Group>
              <Col className="d-flex justify-content-end">
                <Button
                  type="submit"
                  className="bg-primary"
                  disabled={formik.isValid ? false : true}
                >
                  Save
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
