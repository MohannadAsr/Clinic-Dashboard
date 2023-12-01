import { motion } from "framer-motion";

export default function Motion({ children, pos }) {
  return (
    <motion.div
      initial={{ x: pos === "right" ? "+100vw" : "-100vw" }}
      animate={{ x: "0" }}
      transition={{ duration: 0.4, stiffness: 30, type: "spring" }}
      className="h-100"
    >
      {children}
    </motion.div>
  );
}
