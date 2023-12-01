import React from "react";
import Navigate from "./Navigate";
import { Manager } from "../../App/AppProvider";
import useFilter from "../../hooks/useFilter";
import UrgentList from "./UrgentList";
import WaitingList from "./WaitingList";
import PreList from "./PreList";
import { Link, useLocation } from "react-router-dom";
import MainHeader from "../Custom/MainHeader";
import { Button } from "semantic-ui-react";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function Reservations() {
  let query = useQuery();
  let queryType = query.get("type");
  const resType = React.useMemo(() => {
    return queryType || "urgent";
  }, [queryType]);
  const { reservations } = React.useContext(Manager);
  const filteredRes = useFilter(reservations, "type", resType);

  return (
    <section className="main-section px-2 py-3">
      <MainHeader text="Clinic Reservations" />

      <div className="my-4 py-4 text-center">
        <Link to="/reservations/addreservation">
          <Button className="bg-primary" size="large">
            Create new reservation
          </Button>
        </Link>
      </div>

      <Navigate resType={resType} />

      {resType === "urgent" && <UrgentList reservations={filteredRes} />}
      {resType === "direct" && <WaitingList reservations={filteredRes} />}
      {resType === "pre" && <PreList reservations={filteredRes} />}
    </section>
  );
}
