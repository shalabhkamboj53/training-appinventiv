import React from "react";
import SizeSelector from "./sizeselector";
import PlanterSelector from "./planterselector";
import ColorSelector from "./colorselector";

const Feature: React.FC = () => {
  return (
    <>
        <SizeSelector />
        <PlanterSelector />
        <ColorSelector />
    </>
  );
};

export default Feature;
