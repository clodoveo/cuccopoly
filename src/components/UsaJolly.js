import React, { useState } from "react";
import { motion } from "framer-motion";
import UsaJollyForm from "./UsaJollyForm";
export default function UsaJolly(props) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked((old) => !old);
  }
  return (
    <>
      <button
        animate={{ scale: 1.01, boxShadow: "3px 3px 5px 3px #999" }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.6
        }}
        style={{
          position: "absolute",
          top: "135px",
          left: "115px",
          height: "50px",
          width: "150px",
          backgroundColor: "#88123A",
          border: "2px solid #fff",
          color: "#fff",
          fontFamily: "Times",
          fontSize: "15px",
          boxShadow: "1px 1px 2px 1px #999",
          cursor: "pointer"
        }}
        onClick={handleClick}
      >
        USA JOLLY
      </button>
      {clicked && <UsaJollyForm toggle={handleClick} />}
    </>
  );
}
