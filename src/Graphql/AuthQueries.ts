import { gql } from "@apollo/client";

const LOGIN_USER = gql`
  mutation login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      access_token
    }
  }
`;
const REGISTER_USER = gql`
  mutation RegisterUser($createUserInput: CreateUserInput!) {
    registerUser(createUserInput: $createUserInput) {
      access_token
    }
  }
`;

export { LOGIN_USER, REGISTER_USER };
