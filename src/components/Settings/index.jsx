import React from "react";
import MainHeader from "../Custom/MainHeader";
import { Row } from "react-bootstrap";
import Themeing from "./Options/Theming";
import Exporting from "./Options/Exporting";
import Extra from "./Options/Extra";
import AutoImport from "./Options/AutoImport";
import ExportingData from "./Options/ExportingData";
import { Manager } from "../../App/AppProvider";
import { Icon } from "semantic-ui-react";
import MotionSign from "../FramerMotion/MotionSign";

export default function Settings() {
  const { general } = React.useContext(Manager);

  // Check if the saved settings in the local is equal to the current settings to alert user to save them
  const equal = React.useMemo(() => {
    let currentGeneral = { ...general };
    let saved = JSON.parse(localStorage.getItem("general")) || null;
    // deleting the alert key so donot affect on the comparasion result when showing alert
    delete currentGeneral.alert;
    if (saved) {
      delete saved.alert;
    }

    if (currentGeneral && saved) {
      return JSON.stringify(currentGeneral) == JSON.stringify(saved)
        ? true
        : false;
    }
  }, [general]);

  return (
    <section className="main-section px-2 py-3">
      <MainHeader text={"Settings"} />

      <Row className="my-5 g-2">
        {!equal && (
          <div>
            <MotionSign pos="left">
              <p className="text-danger  my-3 px-3 fw-bold">
                <Icon name="attention" />
                Some of your settings have been changed or unsaved , export them
                from Exporting Settings section if you want to use the same
                settings in the next time !
              </p>
            </MotionSign>
          </div>
        )}

        <Extra />
        <ExportingData />
        <Themeing />
        <AutoImport />
        <Exporting />
      </Row>
    </section>
  );
}
