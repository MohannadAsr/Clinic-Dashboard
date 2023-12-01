import React from "react";
import { Manager } from "../../App/AppProvider";
import useFilter from "../../hooks/useFilter";
import { Popup } from "semantic-ui-react";

export default function ReservationState({ id }) {
  const { reservations } = React.useContext(Manager);
  const PatientRes = useFilter(reservations, "patient_Id", id);

  return (
    <div className="d-flex justify-content-end">
      <Popup
        trigger={
          <div
            className={` p-2 rounded-pill ${
              PatientRes?.length ? "bg-primary" : "bg-danger"
            }`}
            style={{
              width: "30px",
              height: "30px",
            }}
            role="button"
          ></div>
        }
        content={`${
          PatientRes?.length
            ? "This patient have a reservation "
            : "This patient Do not have a reservation"
        }`}
        inverted
        on={["hover", "click"]}
      />
    </div>
  );
}
