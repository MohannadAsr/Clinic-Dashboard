import { Col, Row } from "react-bootstrap";
import { Button, Icon } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

const NavigatorBtns = [
  { name: "urgent", color: "danger", icon: "plus square", text: "Urgent" },
  { name: "direct", color: "warning", icon: "wait", text: "Waiting" },
  {
    name: "pre",
    color: "info",
    icon: "calendar alternate",
    text: "Pre-reservation",
  },
];

export default function Navigate({ resType }) {
  const navigate = useNavigate();
  return (
    <Row className="mx-3 my-5 text-center g-2 res-nav">
      {NavigatorBtns.map((button) => {
        return (
          <Col key={button.name}>
            <Button
              className={`bg-${button.color} px-lg-5 px-xs-0 py-lg-3 py-xs-0`}
              onClick={() => {
                // setResType(button.name);
                navigate(`?type=${button.name}`);
              }}
              active={resType === button.name ? true : false}
            >
              <Icon name={button.icon} /> {button.text}
            </Button>
          </Col>
        );
      })}
    </Row>
  );
}
