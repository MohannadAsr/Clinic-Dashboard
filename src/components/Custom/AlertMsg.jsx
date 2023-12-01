import React from "react";
import { Alert } from "react-bootstrap";
import { Manager } from "../../App/AppProvider";

export default function AlertMsg() {
  const { general, generalDispatch } = React.useContext(Manager);
  const { alert } = general;
  const show = React.useMemo(() => {
    return alert.show;
  }, [alert]);

  React.useEffect(() => {
    if (alert?.show) {
      setTimeout(() => {
        generalDispatch({ type: "HIDEALERT" });
      }, 5000);
    }
  }, [alert]);

  return (
    <Alert
      variant={
        alert?.type === "success"
          ? "primary"
          : alert?.type === "error"
          ? "danger"
          : null
      }
      show={show}
      className="alert-msg mx-3 px-4 "
      onClose={() => {
        generalDispatch({ type: "HIDEALERT" });
      }}
    >
      <Alert.Heading className="text-capitalize pb-2">
        {alert?.type || null}
      </Alert.Heading>
      <p>{alert?.msg}</p>
    </Alert>
  );
}
