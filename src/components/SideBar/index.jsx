import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faGauge,
  faGear,
  faHospitalUser,
  faSuitcaseMedical,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import React from "react";
import { Manager } from "../../App/AppProvider";

const NavLinks = [
  { name: "Dashboard", url: "/dashboard", icon: faGauge },
  { name: "Patients", url: "/patients", icon: faHospitalUser },
  { name: "Reservations", url: "/reservations", icon: faCalendarCheck },
  { name: "Treatment", url: "/treatment", icon: faSuitcaseMedical },
  { name: "Settings", url: "/settings", icon: faGear },
];

export default function SideBar() {
  const { general } = React.useContext(Manager);
  return (
    <div
      className={`side-bar bg-${general.theme.name} d-flex flex-column align-items-center py-2 `}
    >
      {NavLinks.map((link, index) => {
        return (
          <NavLink to={link.url} className="side-link" key={index}>
            <FontAwesomeIcon icon={link.icon} size="2xl" />
            <p className={`text-${general.theme.text}`}>{link.name}</p>
          </NavLink>
        );
      })}
    </div>
  );
}
