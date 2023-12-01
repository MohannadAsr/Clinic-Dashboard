import { motion } from "framer-motion";

export default function MotionCard({ children }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{
        scale: 0,
        rotate: 90,
        transition: { duration: 1 },
      }}
      transition={{
        duration: 1,
        type: "spring",
        stiffness: 50,
      }}
    >
      {children}
    </motion.div>
  );
}
