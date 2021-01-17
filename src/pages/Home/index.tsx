import React, { useCallback } from 'react';
import Loader from 'components/UI/Loader/';
import Table from 'components/Table';
import { useQuery } from '@apollo/client';
import {
  GetRepositories,
  GetRepositoriesVariables,
} from 'gql/__generated__/GetRepositories';
import { GET_REPOSITORIES } from 'gql/GetRepositories';
import { Heading, Wrapper } from './styled';

function Home() {
  const { data, fetchMore } = useQuery<
    GetRepositories,
    GetRepositoriesVariables
  >(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  const loadMore = useCallback(() => {
    const list = data!.search.edges;

    return fetchMore({
      variables: {
        cursor: list![list!.length - 1]?.cursor,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }
        return {
          ...prev,
          search: {
            ...fetchMoreResult.search,
            edges: [...prev.search.edges!, ...fetchMoreResult.search.edges!],
          },
        };
      },
    });
  }, [data, fetchMore]);

  if (!data) {
    return <Loader height='100vh' />;
  }

  const total = data.search.repositoryCount;
  const list = data.search.edges!;

  return (
    <Wrapper>
      <Heading>Test Task</Heading>
      <Table
        list={list}
        hasNextPage={list.length < total}
        loadMoreItems={loadMore}
      />
    </Wrapper>
  );
}

export default Home;
