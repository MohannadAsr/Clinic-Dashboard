import React from "react";
import { Col, Row } from "react-bootstrap";
import NavBar from "./components/NavBar/index";
import SideBar from "./components/SideBar/index";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import Patients from "./components/Patients";
import Reservations from "./components/Reservations";
import AddReservation from "./components/Reservations/AddReservation";
import Treatment from "./components/Treatment";
import AlertMsg from "./components/Custom/AlertMsg";
import Settings from "./components/Settings";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="app">
      <NavBar open={open} setOpen={setOpen} />
      <Row className="g-0">
        <Col xs={open ? 2 : 0}>{open && <SideBar />}</Col>
        <Col xs={open ? 10 : 12}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="patients" element={<Patients />} />
            <Route path="reservations" element={<Reservations />} />
            <Route
              path="reservations/addreservation"
              element={<AddReservation />}
            />
            <Route path="treatment" element={<Treatment />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Col>
      </Row>

      <AlertMsg />
    </div>
  );
}

export default App;
