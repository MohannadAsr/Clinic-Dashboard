import {
  faCalendarDays,
  faClock,
  faDroplet,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CardInfo({ reservation }) {
  return (
    <>
      <div className="d-flex align-items-center gap-2 mt-4">
        <FontAwesomeIcon
          size="xl"
          icon={faUser}
          style={{ color: "var(--primary)" }}
        />
        <p className="fs-5 fw-bold text-capitalize">{reservation.name}</p>
      </div>
      <div className="d-flex align-items-center gap-2 mt-2">
        <FontAwesomeIcon
          size="xl"
          icon={faPhone}
          style={{ color: "#617fda" }}
        />
        <p className="fs-5">{reservation.phone_Num}</p>
      </div>
      <div className="d-flex align-items-center gap-2 mt-2">
        <FontAwesomeIcon
          size="xl"
          icon={faDroplet}
          style={{ color: "#f50a0a" }}
        />
        <p className="fs-5">{reservation.blood_Group.toUpperCase()}</p>
      </div>
      <div className="d-flex align-items-center justify-content-start gap-4 mt-2">
        <div className="d-flex align-items-center gap-2">
          <FontAwesomeIcon icon={faCalendarDays} size="xl" />
          <p className="fs-5">{reservation.date}</p>
        </div>
        <div className="d-flex align-items-center gap-2">
          <FontAwesomeIcon icon={faClock} size="xl" />
          <p className="fs-5">{reservation.time}</p>
        </div>
      </div>
      <hr />
    </>
  );
}
