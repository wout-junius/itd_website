import { gql } from "@apollo/client";

const GET_ALL_WAGONS = gql`
  {
    wagons {
      wagonId
      modelName
      buildYear
      maxSpeed
      brakePower
      weight
      length
      width
      height
      nickNames
      description
      amountMade
      steatTypes
      steatAmount
    }
  }
`;

const GET_WAGON_BY_ID = gql`
  query GetWagonById($id: Int!) {
    wagon(id: $id) {
      wagonId
      modelName
      buildYear
      maxSpeed
      brakePower
      weight
      length
      width
      height
      nickNames
      description
      amountMade
      steatTypes
      steatAmount
    }
  }
`;

const CREATE_WAGON = gql`
  mutation CreateWagon($createWagonInput: CreateWagonInput!) {
    createWagon(createWagonInput: $createWagonInput) {
      wagonId
      modelName
      buildYear
      maxSpeed
      brakePower
      weight
      length
      width
      height
      nickNames
      description
      amountMade
      steatTypes
      steatAmount
    }
  }
`;

const UPDATE_WAGON = gql`
  mutation UpdateWagon($updateWagonInput: UpdateWagonInput!) {
    updateWagon(updateWagonInput: $updateWagonInput) {
      wagonId
      modelName
      buildYear
      maxSpeed
      brakePower
      weight
      length
      width
      height
      nickNames
      description
      amountMade
      steatTypes
      steatAmount
    }
  }
`;

export { GET_WAGON_BY_ID, GET_ALL_WAGONS, CREATE_WAGON, UPDATE_WAGON };
