import React from "react";
import { Modal } from "react-bootstrap";
import { Button, Icon } from "semantic-ui-react";
import { Manager } from "../../../App/AppProvider";

export default function Delete({ id }) {
  const [show, setShow] = React.useState(false);
  const { patientsDispatch, generalDispatch } = React.useContext(Manager);

  const deleteById = (id) => {
    patientsDispatch({ type: "DELETE", id: id });
    setShow(false);
    generalDispatch({
      type: "SHOWALERT",
      msg: "Patient deleted successfully",
      alertType: "success",
    });
  };

  return (
    <div>
      <Button
        animated="vertical"
        size="small"
        color="red"
        onClick={() => setShow(true)}
      >
        <Button.Content hidden>Delete</Button.Content>
        <Button.Content visible>
          <Icon name="delete" />
        </Button.Content>
      </Button>

      <Modal
        show={show}
        onHide={() => {
          setShow(false);
        }}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Remove Patient</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this patient ?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setShow(false);
            }}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              deleteById(id);
            }}
            color="red"
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
