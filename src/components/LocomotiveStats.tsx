import React from 'react'
import { Locomotive } from '../Entities/locomotive.entity'

export default function LocomotiveStats(props: LocProps) {
    const { locomotive } = props
  return (
    <table
          style={{
            textAlign: "right",
            margin: "1rem",
            verticalAlign: "top",
            whiteSpace: "nowrap",
          }}
        >
          <tr>
            <td>
              <b>build year: </b>
            </td>
            <td>{locomotive.buildYear.getFullYear()} </td>
          </tr>
          <tr>
            <td>
              <b>amount made: </b>
            </td>
            <td>{locomotive.amountMade.toString()} </td>
          </tr>
          <tr>
            <td>
              <b>max speed: </b>
            </td>
            <td>{locomotive.maxSpeed.toString()} </td>
          </tr>
          <tr>
            <td>
              <b>horse power: </b>
            </td>
            <td>{locomotive.horsePower.toString()} </td>
          </tr>
          <tr>
            <td>
              <b>brake power: </b>
            </td>
            <td>{locomotive.brakePower.toString()} </td>
          </tr>
          <tr>
            <td>
              <b>weight: </b>
            </td>
            <td>{locomotive.weight.toString()} </td>
          </tr>
          <tr>
            <td>
              <b>length: </b>
            </td>
            <td>{locomotive.length.toString()} </td>
          </tr>
          <tr>
            <td>
              <b>width: </b>
            </td>
            <td>{locomotive.width.toString()} </td>
          </tr>
          <tr>
            <td>
              <b>height: </b>
            </td>
            <td>{locomotive.height.toString()} </td>
          </tr>
        </table>
  )
}

interface LocProps {
    locomotive: Locomotive
}

