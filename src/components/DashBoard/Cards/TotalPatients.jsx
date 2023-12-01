import React from "react";
import { Manager } from "../../../App/AppProvider";
import { Card, Col } from "react-bootstrap";
import { Icon } from "semantic-ui-react";
import { motion } from "framer-motion";

export default function TotalPatients() {
  const { patients } = React.useContext(Manager);
  return (
    <Col xs={12} md={6} lg={4}>
      <motion.div
        initial={{ rotate: 30, scale: 0, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1, stiffness: 50, type: "spring" }}
      >
        <Card className="p-3 text-center h-100">
          <Icon name="users" className="m-auto" size="big" />
          <h3>Total Patients Records</h3>
          <p>All patients records in your database</p>
          <h1 className="my-3 text-primary">{patients.length}</h1>
        </Card>
      </motion.div>
    </Col>
  );
}
