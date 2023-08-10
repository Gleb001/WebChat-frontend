// import
import type { FC } from "react";

// types
type deliverElementsType = FC[]
type deliverType = FC<{elements: deliverElementsType}>

// @ts-ignore: 
export const Deliver: deliverType = () => <></>;
export type {deliverType};