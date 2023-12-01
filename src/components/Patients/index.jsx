import React from "react";
import { Manager } from "../../App/AppProvider";
import { Col, Row } from "react-bootstrap";
import PatientCard from "./PatientCard";
import useSearch from "../../hooks/useSearch";
import Paginations from "./Paginations";
import Search from "./Actions/Search";
import Add from "./Actions/Add";
import MainHeader from "../Custom/MainHeader";
import { AnimatePresence, motion } from "framer-motion";
import MotionCard from "../FramerMotion/MotionCard";
import MotionSign from "../FramerMotion/MotionSign";

export default function Patients() {
  const { patients } = React.useContext(Manager);
  const [search, setSearch] = React.useState("");
  const selected = useSearch(patients, "name", search); // matched patients with searching
  const [page, setPage] = React.useState(1); // pagination page

  return (
    <section className="main-section px-2 py-3">
      <MainHeader text="Clinic Patients" />

      {/* Checking if there are a patients or not to show different style */}
      {patients?.length === 0 ? (
        <div className="h-75 d-flex align-items-center justify-content-center text-center flex-column">
          <MotionSign>
            <p className="text-muted fs-3 my-3">
              There are no patients in your database
            </p>
          </MotionSign>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.4,
              type: "spring",
              stiffness: 300,
              delay: 1,
            }}
          >
            <Add />
          </motion.div>
        </div>
      ) : (
        <>
          <Row className="my-4 g-0">
            <Col lg={6} xs={12}>
              <Search setSearch={setSearch} />
            </Col>
            <Col className="d-flex justify-content-end align-items-center px-3">
              <Add />
            </Col>
          </Row>

          {/* Checking if the search show any results or not */}
          {selected.length !== 0 ? (
            <Row className="gx-2 gy-5 ">
              <AnimatePresence layout>
                {selected
                  ?.slice(page * 8 - 8, page * 8)
                  .map((patient, index) => {
                    return (
                      <Col xl={3} md={6} xs={12} key={index}>
                        <MotionCard>
                          <PatientCard patient={patient} />
                        </MotionCard>
                      </Col>
                    );
                  })}
                <Paginations
                  page={page}
                  setPage={setPage}
                  length={patients.length}
                />
              </AnimatePresence>
            </Row>
          ) : (
            <div className="text-muted fs-2 d-flex justify-content-center text-center">
              Sorry ! nothing matched your search.
            </div>
          )}
        </>
      )}
    </section>
  );
}
