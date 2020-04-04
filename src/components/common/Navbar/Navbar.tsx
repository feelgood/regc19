import React from "react";
import { Navlink, NavContainer, NavTitle } from "./styled";

export const Navbar = () => {
  return (
    <NavContainer
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <NavTitle>regc19</NavTitle>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Navlink>Varför?</Navlink>
        <Navlink>Om</Navlink>
      </div>
    </NavContainer>
  );
};
