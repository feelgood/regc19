import React from "react";
import { InformationParagraph, InformationContainer } from "./styled";
import { Link } from "react-router-dom";
import Button from "../common/Button";

export const FrontPageInformation = () => {
  return (
    <InformationContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <InformationParagraph>
          För att hjälpa oss i kampen mot Corona och bättre följa spridningen så
          vill vi gärna att du svarar på ett par frågor om din hälsostatus. Dina
          svar är anonyma och du bestämmer själv vilka frågor du vill svara på.
        </InformationParagraph>
      </div>
      <hr style={{ color: "#AFBBB9", width: "30vw" }} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Link to="/form">
          <Button title="Fortsätt" />
        </Link>
      </div>
    </InformationContainer>
  );
};

export default FrontPageInformation;
