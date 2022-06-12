import { gql } from "@apollo/client";

const CREATE_API_KEY = gql`
  mutation ApiKeyTest($createApikeyInput: CreateApikeyInput!) {
    createApiKey(createApiKeyInput: $createApikeyInput) {
      name
      key
      active
      usage
    }
  }
`;
const UPDATE_API_KEY = gql`
  mutation EditApiKey($updateApiKeyInput: UpdateApikeyInput!) {
    updateApiKey(updateApiKeyInput: $updateApiKeyInput) {
      name
      key
    }
  }
`;

const DELETE_API_KEY = gql`
  mutation DeleteApiKey($id: String!) {
    removeApiKey(id: $id) {
      name
    }
  }
`;

const GET_USER_KEYS = gql`
  {
    apiKey {
      name
      key
      active
      usage
    }
  }
`;

export { DELETE_API_KEY, UPDATE_API_KEY, CREATE_API_KEY, GET_USER_KEYS };
