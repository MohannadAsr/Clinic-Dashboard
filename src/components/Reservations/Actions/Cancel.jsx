import React from "react";
import { Modal } from "react-bootstrap";
import { Button, Icon } from "semantic-ui-react";
import { Manager } from "../../../App/AppProvider";

export default function Cancel({ id }) {
  const [show, setShow] = React.useState(false);
  const { reservationsDispatch } = React.useContext(Manager);

  const deleteById = (id) => {
    reservationsDispatch({ type: "DELETE", id: id });
    setShow(false);
  };

  return (
    <div>
      <Button
        animated="vertical"
        size="medium"
        color="red"
        onClick={() => {
          setShow(true);
        }}
      >
        <Button.Content hidden>Cancel</Button.Content>
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
          <Modal.Title>Cancel Reservation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to cancel this reservation ?
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setShow(false);
            }}
          >
            No
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              deleteById(id);
            }}
            color="red"
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
