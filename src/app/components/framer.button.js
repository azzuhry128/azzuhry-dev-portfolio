import { motion } from "motion/react";

const FramerButton = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => console.log("hover started")}
    />
  );
};

export default FramerButton
