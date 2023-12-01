import { motion } from "framer-motion";
export default function MainHeader({ text }) {
  return (
    <motion.div
      initial={{ y: "-50px" }}
      animate={{ y: "0" }}
      transition={{ duration: 0.4, stiffness: 50, type: "spring" }}
      className="main-head px-3 text-center"
    >
      <h1>{text}</h1>
    </motion.div>
  );
}
