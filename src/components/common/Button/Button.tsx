import React, { FunctionComponent } from "react";
import { StyledButton } from "./styled";

type OwnProps = {
  title: string;
};

type Props = OwnProps;

const Button: FunctionComponent<Props> = ({ title }) => {
  return <StyledButton>{title}</StyledButton>;
};

export default Button;
