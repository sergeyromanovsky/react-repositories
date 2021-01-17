import React from 'react';
import TableCell from './TableCell';

import { Row } from './styled';
import {
  GetRepositories_search_edges,
  GetRepositories_search_edges_node,
  GetRepositories_search_edges_node_Repository,
} from 'gql/__generated__/GetRepositories';
import { ListChildComponentProps } from 'react-window';
import Loader from 'components/UI/Loader';

const isRepository = (
  node: GetRepositories_search_edges_node
): node is GetRepositories_search_edges_node_Repository => {
  return node.__typename === 'Repository';
};
function TableItem({ index, style, data }: ListChildComponentProps) {
  const item = data[index] as GetRepositories_search_edges | undefined;

  if (!item) {
    return (
      <div style={style}>
        <Loader />
      </div>
    );
  }

  const node = item.node!;

  return (
    <Row style={style}>
      {isRepository(node) && (
        <>
          <TableCell>
            <a
              href={node.homepageUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              {node.name}
            </a>
          </TableCell>
          <TableCell>
            {new Intl.NumberFormat().format(node.stargazers.totalCount || 0)}
          </TableCell>
          <TableCell>
            {new Intl.NumberFormat().format(node.forks.totalCount || 0)}
          </TableCell>
        </>
      )}
    </Row>
  );
}

export default TableItem;
