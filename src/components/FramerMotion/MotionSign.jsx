import { motion } from "framer-motion";

export default function MotionSign({ children, pos }) {
  return (
    <motion.div
      initial={{ x: pos === "left" ? "-50px" : "50px" }}
      animate={{ x: "0px" }}
      transition={{ duration: 3, stiffness: 400, type: "spring" }}
    >
      {children}
    </motion.div>
  );
}
