import { Row } from "react-bootstrap";
import MainHeader from "../Custom/MainHeader";
import TotalPatients from "./Cards/TotalPatients";
import TotalReservations from "./Cards/TotalReservations";
import TotalTreatment from "./Cards/TotalTreatment";
import ResStatistics from "./Cards/ResStatistics";
import GeneralStatistics from "./Cards/GeneralStatistics";

export default function DashBoard() {
  return (
    <section className="main-section px-2 py-3">
      <MainHeader text="Clinic Dashboard" />

      <Row className="my-5 g-2">
        <TotalPatients />

        <TotalReservations />
        <TotalTreatment />
        <ResStatistics />
        <GeneralStatistics />
      </Row>
    </section>
  );
}
