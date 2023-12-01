import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Manager } from "../../App/AppProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function CompleteBtn({ id }) {
  const [show, setShow] = React.useState(false);
  const { treatmentDispatch, generalDispatch } = React.useContext(Manager);

  const deleteById = (id) => {
    treatmentDispatch({ type: "DELETE", id: id });
    setShow(false);
    generalDispatch({
      type: "SHOWALERT",
      alertType: "success",
      msg: `Your treatment done successfuly .`,
    });
  };

  return (
    <div>
      <Button onClick={() => setShow(true)}>
        Mark as complete
        <FontAwesomeIcon icon={faCheck} className="mx-2" size="xl" />
      </Button>

      <Modal
        show={show}
        onHide={() => {
          setShow(false);
        }}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Mark as complete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to mark this reservation as completed ?
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="light"
            onClick={() => {
              setShow(false);
            }}
          >
            No
          </Button>
          <Button
            // variant="primary"

            onClick={() => {
              deleteById(id);
            }}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
