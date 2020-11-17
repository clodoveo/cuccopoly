import React from "react";
import { motion } from "framer-motion";
export default function UsaJolly(props) {
  return (
    <motion.button
      animate={{ scale: 1.01, boxShadow: "3px 3px 5px 3px #999" }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.6
      }}
      style={{
        position: "fixed",
        top: "150px",
        left: "115px",
        height: "50px",
        width: "150px",
        backgroundColor: "#88123A",
        border: "2px solid #fff",
        color: "#fff",
        fontFamily: "Times",
        fontSize: "20px",
        boxShadow: "1px 1px 2px 1px #999",
        cursor: "pointer"
      }}
    >
      USA JOLLY
    </motion.button>
  );
}
