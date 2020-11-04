import React from "react";
import { motion } from "framer-motion";

export default function DettagliUtente(props) {
  const { utente } = props;
  const { vediFish } = props;

  const varianti = {
    iniziale: {
      display: "none",
      opacity: 1,
      //clipPath: "circle(0px at 0px 0px)",
      //clipPath: "circle(1000px at 0px 0px)",
      flexDirection: "column",
      rotateY: -45,
      rotateX: 0,
      rotateZ: 45
    },
    finale: {
      display: "flex",
      flexDirection: "column",
      opacity: 1,
      //clipPath: "circle(1000px at 0px 0px)",

      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  const animazione = vediFish ? "iniziale" : "finale";
  return (
    <motion.div
      animate={animazione}
      variants={varianti}
      style={{
        color: "#666",
        width: "calc(100% + 2px)",
        backgroundColor: "#eee",
        padding: "50px",
        flexDirection: "column",
        justifyItems: "space-between",
        position: "relative"
        //marginLeft: "-50px"
        // left: "2px"
      }}
    >
      <div
        style={{
          fontSize: "30px",
          marginBottom: "25px",
          borderBottom: "1px dashed #666",
          textTransform: "capitalize",
          flex: 2
        }}
      >
        {utente.nome}
      </div>
      <div style={{ flex: 1 }}>Punti: {utente.punti}</div>
      <div style={{ flex: 1 }}>
        Numero Transazioni: {utente.NumeroTransazioni}
      </div>
      <div style={{ flex: 1 }}>
        Numero Acquisizioni: {utente.NumeroAcquisizioni}
      </div>
      <div style={{ flex: 1 }}>
        Numero Incarichi Home-Staging: {utente.NumeroIncarichiHomeStaging}
      </div>
      <div style={{ flex: 1 }}>
        Numero Jolly Persi Per Penalità:{utente.NumeroJollyPersiPerPenalita}{" "}
      </div>
    </motion.div>
  );
}
