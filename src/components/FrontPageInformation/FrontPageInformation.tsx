import React from "react";
import {
  InformationParagraph,
  ContinueButton,
  InformationContainer,
} from "./styled";

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
        <ContinueButton onClick={() => console.log("test")}>
          Fortsätt
        </ContinueButton>
      </div>
    </InformationContainer>
  );
};

export default FrontPageInformation;
