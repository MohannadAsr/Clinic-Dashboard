import React from "react";
import { Button } from "semantic-ui-react";
import { Manager } from "../../../App/AppProvider";

export default function MakeTreat({ reservation }) {
  const { treatmentDispatch, reservationsDispatch } = React.useContext(Manager);
  const treat = (res) => {
    treatmentDispatch({ type: "ADD", treatment: res });
    reservationsDispatch({ type: "DELETE", id: res.id });
  };
  return (
    <div>
      <Button
        size="medium"
        onClick={() => {
          treat(reservation);
        }}
      >
        Move to treatment
      </Button>
    </div>
  );
}
