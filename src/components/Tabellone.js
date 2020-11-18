import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Casella from "./Casella";
import UsaJolly from "./UsaJolly";
import Regolamento from "./Regolamento";

const StyledTabellone = styled.div`
  width: 1091px;
  height: 761px;
  position: relative;
`;

export default function Tabellone(props) {
  const { caselle } = props;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function verifica() {
      const caricata = () => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = "https://dev-hl.terotero.it/img/original/test-min.png";
          img.onload = resolve();
        });
      };
      await caricata();
      setLoading(false);
    }
    verifica();
  }, []);

  if (loading) {
    return <>loading</>;
  } else {
    return (
      <StyledTabellone
      // style={{
      //   backgroundImage:
      //     "url(https://dev-hl.terotero.it/img/original/cuccopoly.png)"
      // }}
      >
        <img
          src="https://dev-hl.terotero.it/img/original/test-min.png"
          style={{ position: "absolute", top: 0, left: 0 }}
          alt="tab"
        />
        {caselle.map((c) => (
          <Casella item={c} key={c.id} />
        ))}
        {props.children}
        <UsaJolly></UsaJolly>
        <Regolamento></Regolamento>
      </StyledTabellone>
    );
  }
}
