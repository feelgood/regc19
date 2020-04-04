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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: 100,
        }}
      >
        <Navlink>Varför?</Navlink>
        <Navlink>Om</Navlink>
      </div>
    </NavContainer>
  );
};
