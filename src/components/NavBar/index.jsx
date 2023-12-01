import { Col, Navbar, Row } from 'react-bootstrap';
import teeth from '/Teeth.png';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function NavBar({ open, setOpen }) {
  return (
    <Navbar as={Row} bg={'dark'} className="py-1 g-0 ">
      <Col
        xs={open ? 2 : 1}
        className={`d-flex align-items-center justify-content-center mx-${
          open ? 0 : 2
        }`}
      >
        <FontAwesomeIcon
          icon={faBars}
          size="2xl"
          className={`mx-2  text-${open ? 'primary' : 'light'} `}
          onClick={() => {
            setOpen((state) => !state);
          }}
          role="button"
        />
      </Col>
      <Col
        xs={10}
        className={`d-flex align-items-center justify-content-center `}
      >
        <Navbar.Brand className="fs-4 fw-bold  ">
          <NavLink to="/" className="text-primary d-flex align-items-center">
            <img
              alt="teeth-image"
              src={teeth}
              width="50"
              height="50"
              className=" d-inline-block align-top"
            />
            CLINIC DASHBOARD
          </NavLink>
        </Navbar.Brand>
      </Col>
    </Navbar>
  );
}
