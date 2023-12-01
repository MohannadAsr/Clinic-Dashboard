import { faDroplet, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";
import { Button, Icon } from "semantic-ui-react";
import ReservationState from "./ReservationState";
import { Link } from "react-router-dom";
import Edit from "./Actions/Edit";
import Delete from "./Actions/Delete";

export default function PatientCard({ patient }) {
  return (
    <Card className=" text-capitalize py-3 position-relative px-4  ">
      <div className="photo">{patient.name[0].toUpperCase()}</div>

      <ReservationState id={patient.id} />

      <div className="d-flex align-items-center gap-2 mt-3">
        <FontAwesomeIcon
          size="xl"
          icon={faUser}
          style={{ color: "var(--primary)" }}
        />
        <p className="fs-5">{patient.name}</p>
      </div>
      <div className="d-flex align-items-center gap-2 mt-2">
        <FontAwesomeIcon
          size="xl"
          icon={faPhone}
          style={{ color: "#617fda" }}
        />
        <p className="fs-5">{patient.phone_Num}</p>
      </div>
      <div className="d-flex align-items-center gap-2 mt-2">
        <FontAwesomeIcon
          size="xl"
          icon={faDroplet}
          style={{ color: "#f50a0a" }}
        />
        <p className="fs-5">{patient.blood_Group.toUpperCase()}</p>
      </div>
      <hr />

      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <Link
            to={`/reservations/addreservation?id=${patient.id}`}
            replace={true}
          >
            <Button
              className="bg-primary fw-bold"
              animated="vertical"
              size="small"
            >
              <Button.Content hidden>Add</Button.Content>
              <Button.Content visible>
                <Icon name="book" />
              </Button.Content>
            </Button>
          </Link>

          <Edit patient={patient} />
        </div>
        <div>
          <Delete id={patient.id} />
        </div>
      </div>
    </Card>
  );
}
