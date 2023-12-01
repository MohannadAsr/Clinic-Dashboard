import { useFormik } from "formik";
import React from "react";
import { Manager } from "../../../App/AppProvider";
import { Dropdown } from "semantic-ui-react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { nanoid } from "nanoid";
import useFilter from "../../../hooks/useFilter";
import { useLocation } from "react-router-dom";
import { ReservationSchema } from "../../../Schemas/ReservationSchema";
import { useNavigate } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function ResForExist() {
  const navigate = useNavigate();
  let query = useQuery();
  let queryId = query.get("id");
  const todayDate = new Date();
  const { reservations, reservationsDispatch, patients, generalDispatch } =
    React.useContext(Manager);
  // the patiend id for the seleceted patient
  const [patientId, setPatientId] = React.useState(queryId || "empty");
  // check patient other reservation
  const checkotherRes = useFilter(reservations, "patient_Id", patientId);
  // the initial form values
  const [initialValues, setInintialValues] = React.useState({
    name: "",
    phone_Num: "",
    blood_Group: "",
    type: "",
    date: `${todayDate.getFullYear()}-${String(
      todayDate.getMonth() + 1
    ).padStart(2, "0")}-${String(todayDate.getDate()).padStart(2, "0")}`,
    time: `${String(todayDate.getHours()).padStart(2, "0")}:${String(
      todayDate.getMinutes()
    ).padStart(2, "0")}`,
  });

  // Select all the patients in the database
  const patientsOptions = React.useMemo(() => {
    return patients?.map((item, index) => {
      return {
        value: item.id,
        key: index + 1,
        text: `${item.name}`,
      };
    });
  }, [patients]);

  // auto update formik values based on the selected patient
  React.useEffect(() => {
    if (patientId) {
      let finder = patients.find((item) => item.id === patientId);
      finder
        ? setInintialValues((init) => {
            return {
              ...init,
              name: finder.name,
              phone_Num: finder.phone_Num,
              blood_Group: finder.blood_Group,
              patient_Id: finder.id,
            };
          })
        : null;
    }
  }, [patientId, patients]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: ReservationSchema,
    onSubmit: (values, { resetForm }) => {
      reservationsDispatch({
        type: "CREATE",
        reservation: Object.assign({ id: nanoid() }, { ...values }),
      });
      resetForm(formik.initialValues);
      navigate(`/reservations?type=${values.type}`);

      // Handling the alert msg after checking for duplicated reservations only for urgent or direct
      let find = reservations.find((item) => {
        return (
          item.patient_Id === values.patient_Id &&
          item.name.toLowerCase() === values.name.toLowerCase() &&
          (item.type === "urgent" || item.type == "direct") &&
          (values.type === "urgent" || values.type === "direct")
        );
      });

      if (find) {
        generalDispatch({
          type: "SHOWALERT",
          msg: `This patient already have ${
            values.type === "urgent" ? "an" : "a"
          } ${values.type} reservation`,
          alertType: "error",
        });
      } else {
        generalDispatch({
          type: "SHOWALERT",
          msg: `Reservation created successfuly ! `,
          alertType: "success",
        });
      }
    },
  });

  return (
    <div>
      {patients.length ? (
        <>
          {!queryId ? (
            <div className="d-flex align-items-center flex-wrap">
              <h5
                className={`fw-bold ${
                  patientId === "empty" ? "text-danger " : "text-light"
                }`}
              >
                Please Choose a patient
              </h5>
              <Dropdown
                options={patientsOptions}
                className="px-4 mx-lg-3 my-1 mx-xs-1 fw-bold w-25"
                selection
                onChange={(e, data) => {
                  setPatientId(data.value);
                }}
              />
            </div>
          ) : null}

          <Form onSubmit={formik.handleSubmit}>
            <Row className="g-4 fs-5 p-2 my-3">
              <Form.Group as={Col} className="col-12 col-lg-4 ">
                <Form.Label htmlFor="name">Patient name</Form.Label>
                <Form.Control
                  type="text"
                  id="name"
                  name="name"
                  disabled
                  value={formik.values.name}
                />
              </Form.Group>

              <Form.Group as={Col} className=" col-12 col-lg-4">
                <Form.Label htmlFor="number">Patient Number</Form.Label>
                <Form.Control
                  type="text"
                  id="phone_Num"
                  name="phone_Num"
                  disabled
                  value={formik.values.phone_Num}
                />
              </Form.Group>

              <Form.Group as={Col} className=" col-12 col-lg-4">
                <Form.Label htmlFor="blood ">Blood group</Form.Label>
                <Form.Control
                  id="blood_Group"
                  name="blood_Group"
                  type="text"
                  disabled
                  value={formik.values.blood_Group}
                ></Form.Control>
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
                      ).padStart(2, "0")}-${String(
                        todayDate.getDate()
                      ).padStart(2, "0")}`}
                      required
                    ></Form.Control>
                    {formik.touched.date && formik.errors.date ? (
                      <div className="validation-msg">
                        *{formik.errors.date}
                      </div>
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
                      <div className="validation-msg">
                        *{formik.errors.time}
                      </div>
                    ) : null}
                  </Form.Group>
                </>
              )}
              {checkotherRes.length !== 0 ? (
                <Col xs={12}>
                  <p className="text-warning">
                    Note : This patient Already have {checkotherRes.length}{" "}
                    Reservation(s)
                  </p>
                </Col>
              ) : null}
              <Col className="d-flex justify-content-end" xs={12}>
                <Button
                  type="submit"
                  className="bg-primary"
                  disabled={formik.isValid && patientId ? false : true}
                >
                  Create reservation
                </Button>
              </Col>
            </Row>
          </Form>
        </>
      ) : (
        <p className=" fs-xs-5 text-muted text-center">
          There are no patients in your database Please add a new patient or
          change to new patient option
        </p>
      )}
    </div>
  );
}
