import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query GetRepositories($cursor: String) {
    search(
      query: "react stars:>10000"
      type: REPOSITORY
      first: 25
      after: $cursor
    ) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            name
            id
            stargazers {
              totalCount
            }
            forks {
              totalCount
            }
            homepageUrl
          }
        }
        cursor
      }
    }
  }
`;
