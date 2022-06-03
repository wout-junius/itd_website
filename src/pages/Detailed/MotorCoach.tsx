import React from "react";
import { useParams } from "react-router-dom";

export default function MotorCoach() {
  const { id } = useParams();
  return <div>MotorCoach {id} </div>;
}
