import React from "react";
import { MotorCoach } from "../../Entities/motor-coach.entity";

export default function MotorCoachStats(props: MCoachProps) {
  const { motorCoach } = props;
  return (
    <table
      style={{
        textAlign: "right",
        margin: "1rem",
        verticalAlign: "top",
        whiteSpace: "nowrap",
      }}
    >
      <tbody>
        <tr>
          <td>
            <b>build year: </b>
          </td>
          <td>{motorCoach.buildYear.getFullYear()} </td>
        </tr>
        <tr>
          <td>
            <b>amount made: </b>
          </td>
          <td>{motorCoach.amountMade.toString()} </td>
        </tr>
        <tr>
          <td>
            <b>max speed: </b>
          </td>
          <td>{motorCoach.maxSpeed.toString()} </td>
        </tr>
        <tr>
          <td>
            <b>horse power: </b>
          </td>
          <td>{motorCoach.horsePower.toString()} </td>
        </tr>
        <tr>
          <td>
            <b>brake power: </b>
          </td>
          <td>{motorCoach.brakePower.toString()} </td>
        </tr>
        <tr>
          <td>
            <b>weight: </b>
          </td>
          <td>{motorCoach.weight.toString()} </td>
        </tr>
        <tr>
          <td>
            <b>length: </b>
          </td>
          <td>{motorCoach.length.toString()} </td>
        </tr>
        <tr>
          <td>
            <b>width: </b>
          </td>
          <td>{motorCoach.width.toString()} </td>
        </tr>
        <tr>
          <td>
            <b>height: </b>
          </td>
          <td>{motorCoach.height.toString()} </td>
        </tr>
        {loadSeatings(motorCoach.steatTypes, motorCoach.steatAmount)}
      </tbody>
    </table>
  );
}

interface MCoachProps {
  motorCoach: MotorCoach;
}

function loadSeatings(steatTypes: String[], steatAmount: number[]) {
  let seats: JSX.Element[] = [];
  steatTypes.forEach((steatType, index) => {
    seats.push(
      <tr key={index}>
        <td>
          <b>{steatType}</b>
        </td>
        <td>{steatAmount[index]}</td>
      </tr>
    );
  });
  return seats;
}
