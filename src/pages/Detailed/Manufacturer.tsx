import React from "react";
import { useParams } from "react-router-dom";

export default function Manufacturer() {
  const { id } = useParams();
  return <div>Manufacturer {id} </div>;
}
