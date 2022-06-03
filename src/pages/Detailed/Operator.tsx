import React from "react";
import { useParams } from "react-router-dom";

export default function Operator() {
  const { id } = useParams();
  return <div>Operator {id} </div>;
}
