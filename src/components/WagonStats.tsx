import React from "react";
import { Wagon } from "../Entities/wagon.entity";

export default function WagonStats(props: WagonProps) {
  const { wagon } = props;
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
          <td>{wagon.buildYear.getFullYear()} </td>
        </tr>
        <tr>
          <td>
            <b>amount made: </b>
          </td>
          <td>{wagon.amountMade.toString()} </td>
        </tr>
        <tr>
          <td>
            <b>max speed: </b>
          </td>
          <td>{wagon.maxSpeed.toString()} </td>
        </tr>
        <tr>
          <td>
            <b>brake power: </b>
          </td>
          <td>{wagon.brakePower.toString()} </td>
        </tr>
        <tr>
          <td>
            <b>weight: </b>
          </td>
          <td>{wagon.weight.toString()} </td>
        </tr>
        <tr>
          <td>
            <b>length: </b>
          </td>
          <td>{wagon.length.toString()} </td>
        </tr>
        <tr>
          <td>
            <b>width: </b>
          </td>
          <td>{wagon.width.toString()} </td>
        </tr>
        <tr>
          <td>
            <b>height: </b>
          </td>
          <td>{wagon.height.toString()} </td>
        </tr>
        {loadSeatings(wagon.steatTypes, wagon.steatAmount)}
      </tbody>
    </table>
  );
}

interface WagonProps {
  wagon: Wagon;
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
