import React from "react";
import { SubtitleWrapper } from "./styles/subtitle";

const Subtitle = ({ title, id }) => (
  // received title and datatestid from parent component (Greyhound, Harness, Thoroughbred)
  <SubtitleWrapper id={id}>
    {title}
  </SubtitleWrapper>
);

export default Subtitle;
