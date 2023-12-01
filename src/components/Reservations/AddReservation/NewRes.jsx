import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Button } from "semantic-ui-react";
import { useFormik } from "formik";
import { Manager } from "../../../App/AppProvider";
import { nanoid } from "nanoid";
import { ReservationSchema } from "../../../Schemas/ReservationSchema";
import { useNavigate } from "react-router-dom";

const todayDate = new Date();

const initialValues = {
  name: "",
  phone_Num: "",
  blood_Group: "",
  type: "",
  date: `${todayDate.getFullYear()}-${String(todayDate.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(todayDate.getDate()).padStart(2, "0")}`,
  time: `${String(todayDate.getHours()).padStart(2, "0")}:${String(
    todayDate.getMinutes()
  ).padStart(2, "0")}`,
};

export default function NewRes() {
  const navigate = useNavigate();
  const { reservationsDispatch, patientsDispatch, generalDispatch } =
    React.useContext(Manager);
  const [makePatient, setMakePatient] = React.useState(false);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: ReservationSchema,
    onSubmit: (values, { resetForm }) => {
      const patientId = nanoid();

      if (makePatient) {
        patientsDispatch({
          type: "CREATE",
          patient: {
            id: patientId,
            name: values.name,
            phone_Num: values.phone_Num,
            blood_Group: values.blood_Group,
          },
        });
      }
      reservationsDispatch({
        type: "CREATE",
        reservation: Object.assign(
          { id: nanoid(), patient_Id: patientId },
          { ...values }
        ),
      });
      resetForm(formik.initialValues);
      navigate(`/reservations?type=${values.type}`);
      generalDispatch({
        type: "SHOWALERT",
        msg: `Reservation ${
          makePatient ? "& Patient" : ""
        } created successfuly !`,
        alertType: "success",
      });
    },
  });

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Row className="g-4 fs-5 p-2 my-1">
          <Form.Group as={Col} className="col-12 col-lg-4 ">
            <Form.Label htmlFor="name">Patient name</Form.Label>
            <Form.Control
              type="text"
              id="name"
              name="name"
              placeholder="..."
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="validation-msg">*{formik.errors.name}</div>
            ) : null}
          </Form.Group>

          <Form.Group as={Col} className=" col-12 col-lg-4">
            <Form.Label htmlFor="number">Patient Number</Form.Label>
            <Form.Control
              type="text"
              id="phone_Num"
              name="phone_Num"
              maxLength={10}
              placeholder="09..."
              value={formik.values.phone_Num}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phone_Num && formik.errors.phone_Num ? (
              <div className="validation-msg">*{formik.errors.phone_Num}</div>
            ) : null}
          </Form.Group>

          <Form.Group as={Col} className=" col-12 col-lg-4">
            <Form.Label htmlFor="blood ">Blood group</Form.Label>
            <Form.Control
              id="blood_Group"
              name="blood_Group"
              placeholder="O+, O-, A+ ... "
              type="text"
              value={formik.values.blood_Group}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.blood_Group && formik.errors.blood_Group ? (
              <div className="validation-msg">*{formik.errors.blood_Group}</div>
            ) : null}
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="number ">Reservation type</Form.Label>
            <Form.Select
              id="type"
              name="type"
              onChange={formik.handleChange}
              value={formik.values.type}
              onBlur={formik.handleBlur}
            >
              <option value="none">Choose type</option>
              <option value="urgent">Urgent</option>
              <option value="direct">Direct</option>
              <option value="pre">Pre</option>
            </Form.Select>
            {formik.touched.type && formik.errors.type ? (
              <div className="validation-msg">*{formik.errors.type}</div>
            ) : null}
          </Form.Group>
          {formik.values.type === "pre" && (
            <>
              <Form.Group as={Col} className=" col-12 col-lg-4">
                <Form.Label htmlFor="date">Date</Form.Label>
                <Form.Control
                  type="date"
                  id="date"
                  name="date"
                  value={formik.values.date}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  min={`${todayDate.getFullYear()}-${String(
                    todayDate.getMonth() + 1
                  ).padStart(2, "0")}-${String(todayDate.getDate()).padStart(
                    2,
                    "0"
                  )}`}
                  required
                />
                {formik.touched.date && formik.errors.date ? (
                  <div className="validation-msg">*{formik.errors.date}</div>
                ) : null}
              </Form.Group>
              <Form.Group as={Col} className=" col-12 col-lg-4">
                <Form.Label htmlFor="time">Time</Form.Label>
                <Form.Control
                  type="time"
                  id="time"
                  name="time"
                  value={formik.values.time}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  min="09:00"
                  max="18:00"
                  required
                />
                {formik.touched.time && formik.errors.time ? (
                  <div className="validation-msg">*{formik.errors.time}</div>
                ) : null}
              </Form.Group>
            </>
          )}
          <Form.Group as={Col} className="col-12 mx-3">
            <Form.Check
              type="checkbox"
              label="Make patient with the same information"
              onChange={(e) => setMakePatient(e.target.checked)}
            />
          </Form.Group>
          <Col className="d-flex justify-content-end" xs={12}>
            <Button
              type="submit"
              className="bg-primary"
              disabled={formik.isValid ? false : true}
            >
              Create reservation
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
