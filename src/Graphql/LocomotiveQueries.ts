import { gql } from "@apollo/client";

const GET_ALL_LOCOMOTIVES = gql`
  {
    locomotives {
      locomotiveId
      buildYear
      maxSpeed
      horsePower
      modelName
      brakePower
      weight
      length
      width
      height
      nickNames
      description
      amountMade
      powerSource
    }
  }
`;

const GET_LOCOMOTIVE_BY_ID = gql`
  query GetLocomotiveById($id: Int!) {
    locomotive(id: $id) {
      locomotiveId
      buildYear
      maxSpeed
      horsePower
      modelName
      brakePower
      weight
      length
      width
      height
      nickNames
      description
      amountMade
      powerSource
    }
  }
`;

const CREATE_LOCOMOTIVES = gql`
  mutation CreateLocomotive($createLocomotiveInput: CreateLocomotiveInput!) {
    createLocomotive(createLocomotiveInput: $createLocomotiveInput) {
      locomotiveId
      buildYear
      maxSpeed
      horsePower
      modelName
      brakePower
      weight
      length
      width
      height
      nickNames
      description
      amountMade
      powerSource
    }
  }
`;

const UPDATE_LOCOMOTIVE = gql`
  mutation UpdateLocomotive($updateLocomotiveInput: UpdateLocomotiveInput!) {
    updateLocomotive(updateLocomotiveInput: $updateLocomotiveInput) {
      locomotiveId
      buildYear
      maxSpeed
      horsePower
      modelName
      brakePower
      weight
      length
      width
      height
      nickNames
      description
      amountMade
      powerSource
    }
  }
`;

export { GET_ALL_LOCOMOTIVES, CREATE_LOCOMOTIVES, UPDATE_LOCOMOTIVE, GET_LOCOMOTIVE_BY_ID };
