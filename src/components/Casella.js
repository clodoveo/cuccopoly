import React from "react";
import styled from "styled-components";

const StyledCasella = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

const StyledTitoloCasella = styled.div`
  font-size: 12px;
  text-align: center;
`;

const StyledTestoCasella = styled.div`
  font-size: 12px;
  text-align: center;
  flex: 4;
  display: flex;
  align-items: center;
`;

export default function Casella(props) {
  const { item } = props;

  return (
    <StyledCasella
      style={{
        position: "absolute",
        left: item.x,
        bottom: item.y,
        width: item.w,
        height: item.h,
        backgroundColor: item.special ? "#88123A" : "none",
        color: item.special ? "white" : "#666"
        // border: "1px solid red"
      }}
    >
      <StyledTitoloCasella>
        {/*<small>{item.id}</small>*/}
        {item.special ? "IMPREVISTO" : ""}
      </StyledTitoloCasella>

      <StyledTestoCasella>
        <div style={{ fontFamily: "Titillium Web" }}>{item.testo}</div>
      </StyledTestoCasella>
    </StyledCasella>
  );
}
