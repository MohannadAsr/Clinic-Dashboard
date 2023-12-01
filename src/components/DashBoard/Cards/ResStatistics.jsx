import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card, Col } from "react-bootstrap";
import { Manager } from "../../../App/AppProvider";
import useFilter from "../../../hooks/useFilter";
import { motion } from "framer-motion";

let options = {
  chart: {
    width: 480,
    type: "pie",
    border: false,
  },
  stroke: {
    show: false,
  },

  colors: ["#ec1313", "#279cce", "#30b291"],
  labels: ["Urgent Reservaions", "Direct Reservations", "Pre-Reservations"],
  responsive: [
    {
      breakpoint: 450,
      options: {
        chart: {
          width: 350,
        },
      },
      legend: {
        fontSize: "5px",
      },
    },
  ],
  legend: {
    show: true,
    showForNullSeries: true,
    showForZeroSeries: true,
    position: "bottom",
    horizontalAlign: "center",
    floating: false,
    fontSize: "12px",
    labels: {
      colors: "#fff",
      useSeriesColors: false,
    },
    markers: {
      width: 10,
      height: 10,
      strokeWidth: 0,
      strokeColor: "#fff",
      fillColors: undefined,
      radius: 10,
      customHTML: undefined,
      onClick: undefined,
      offsetX: 0,
      offsetY: 0,
    },
    itemMargin: {
      horizontal: 5,
      vertical: 0,
    },
    onItemClick: {
      toggleDataSeries: true,
    },
    onItemHover: {
      highlightDataSeries: true,
    },
  },
};

export default function ResStatistics() {
  const { reservations, general } = React.useContext(Manager);
  const urgent = useFilter(reservations, "type", "urgent");
  const direct = useFilter(reservations, "type", "direct");
  const pre = useFilter(reservations, "type", "pre");

  options.legend.labels.colors =
    general.theme.name === "dark" ? "#fff" : "#333";
  return (
    <Col xs={12} md={6} lg={4}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, stiffness: 50, type: "spring" }}
        className="h-100"
      >
        <Card className="d-flex align-items-center justify-content-center p-3 overflow-hidden h-100">
          <h3>Reservations statistics</h3>
          {urgent.length == 0 && direct.length == 0 && pre.length == 0 ? (
            <div className={`text-${general.theme.text}`}>
              <h3 className="d-flex align-items-center">No Reservations</h3>
            </div>
          ) : (
            <ReactApexChart
              className="text-light"
              options={options}
              series={[urgent?.length, direct?.length, pre?.length]}
              type="donut"
              width={400}
            />
          )}
        </Card>
      </motion.div>
    </Col>
  );
}
