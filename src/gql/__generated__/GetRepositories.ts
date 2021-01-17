/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetRepositories
// ====================================================

export interface GetRepositories_search_edges_node_App {
  __typename: "App" | "Issue" | "MarketplaceListing" | "Organization" | "PullRequest" | "User";
}

export interface GetRepositories_search_edges_node_Repository_stargazers {
  __typename: "StargazerConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface GetRepositories_search_edges_node_Repository_forks {
  __typename: "RepositoryConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface GetRepositories_search_edges_node_Repository {
  __typename: "Repository";
  /**
   * The name of the repository.
   */
  name: string;
  id: string;
  /**
   * A list of users who have starred this starrable.
   */
  stargazers: GetRepositories_search_edges_node_Repository_stargazers;
  /**
   * A list of direct forked repositories.
   */
  forks: GetRepositories_search_edges_node_Repository_forks;
  /**
   * The repository's URL.
   */
  homepageUrl: any | null;
}

export type GetRepositories_search_edges_node = GetRepositories_search_edges_node_App | GetRepositories_search_edges_node_Repository;

export interface GetRepositories_search_edges {
  __typename: "SearchResultItemEdge";
  /**
   * The item at the end of the edge.
   */
  node: GetRepositories_search_edges_node | null;
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
}

export interface GetRepositories_search {
  __typename: "SearchResultItemConnection";
  /**
   * The number of repositories that matched the search query.
   */
  repositoryCount: number;
  /**
   * A list of edges.
   */
  edges: (GetRepositories_search_edges | null)[] | null;
}

export interface GetRepositories {
  /**
   * Perform a search across resources.
   */
  search: GetRepositories_search;
}

export interface GetRepositoriesVariables {
  cursor?: string | null;
}
