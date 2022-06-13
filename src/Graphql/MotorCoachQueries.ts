import { gql } from "@apollo/client";

const GET_ALL_MOTOR_COACHES = gql`
  {
    motorCoaches {
      motoCoachId
      modelName
      buildYear
      maxSpeed
      horsePower
      brakePower
      weight
      length
      width
      height
      nickNames
      description
      amountMade
      powerSource
      steatTypes
      steatAmount
    }
  }
`;

const GET_MOTOR_COACH_BY_ID = gql`
  query GetMotorCoachById($id: Int!) {
    motorCoach(id: $id) {
      motoCoachId
      modelName
      buildYear
      maxSpeed
      horsePower
      brakePower
      weight
      length
      width
      height
      nickNames
      description
      amountMade
      powerSource
      steatTypes
      steatAmount
    }
  }
`;

const CREATE_MOTOR_COACH = gql`
  mutation CreateMotorCoach($createMotorCoachInput: CreateMotorCoachInput!) {
    createMotorCoach(createMotorCoachInput: $createMotorCoachInput) {
      motoCoachId
      modelName
      buildYear
      maxSpeed
      horsePower
      brakePower
      weight
      length
      width
      height
      nickNames
      description
      amountMade
      powerSource
      steatTypes
      steatAmount
    }
  }
`;

const UPDATE_MOTOR_COACH = gql`
  mutation UpdateMotorCoach($updateMotorCoachInput: UpdateMotorCoachInput!) {
    updateMotorCoach(updateMotorCoachInput: $updateMotorCoachInput) {
      motoCoachId
      modelName
      buildYear
      maxSpeed
      horsePower
      brakePower
      weight
      length
      width
      height
      nickNames
      description
      amountMade
      powerSource
      steatTypes
      steatAmount
    }
  }
`;

export {
  GET_MOTOR_COACH_BY_ID,
  GET_ALL_MOTOR_COACHES,
  CREATE_MOTOR_COACH,
  UPDATE_MOTOR_COACH,
};
