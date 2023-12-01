import React from "react";
import { Button } from "semantic-ui-react";
import { Manager } from "../../../App/AppProvider";

export default function MakeWait({ id }) {
  const { reservationsDispatch } = React.useContext(Manager);
  const change = (id) => {
    reservationsDispatch({ type: "EDIT", id: id, values: { type: "direct" } });
  };

  return (
    <div>
      <Button
        className="bg-warning fw-bold"
        size="medium"
        onClick={() => {
          change(id);
        }}
      >
        Mark as waiting
      </Button>
    </div>
  );
}
