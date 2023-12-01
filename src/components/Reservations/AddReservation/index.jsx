import React from "react";
import { Card } from "react-bootstrap";
import { Dropdown } from "semantic-ui-react";
import ResForExist from "./ResForExist";
import NewRes from "./NewRes";
import MainHeader from "../../Custom/MainHeader";

const options = [
  { key: 1, text: "Existed Patient", value: "exist" },
  {
    key: 2,
    text: "New Patient",
    value: "new",
  },
];

export default function AddReservation() {
  const [resType, setResType] = React.useState("exist");

  //   const patientsOptions = console.log(patientsOptions);

  return (
    <div className="main-section  px-2 py-4">
      <MainHeader text="Create New Reservation" />

      <div className="my-4 mx-3">
        <div className="d-flex align-items-center flex-wrap">
          <h4 className="my-3">Create reservation for :</h4>
          <Dropdown
            options={options}
            className="px-4 mx-2 fw-bold"
            defaultValue={resType}
            selection
            onChange={(e, data) => {
              setResType(data.value);
            }}
          />
        </div>

        <Card className="my-3 py-5 px-4 ">
          {resType === "exist" ? <ResForExist /> : <NewRes />}
        </Card>
      </div>
    </div>
  );
}
