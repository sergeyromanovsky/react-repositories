import React, { useCallback } from 'react';
import TableHeader from './TableHeader';
import TableItem from './TableItem';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';
import { ROW_HEIGHT } from 'utils/constants';
import { ApolloQueryResult } from '@apollo/client';

interface IProps<T> {
  list: T[];
  loadMoreItems: () => Promise<ApolloQueryResult<unknown>>;
  hasNextPage: boolean;
}

function Table<T>({ list, hasNextPage, loadMoreItems }: IProps<T>) {
  const itemCount = hasNextPage ? list.length + 1 : list.length;

  const isItemLoaded = useCallback(
    (index: number) => !hasNextPage || index < list.length,
    [hasNextPage, list.length]
  );

  return (
    <>
      <TableHeader />
      <div style={{ height: '100%', width: '100%' }}>
        <AutoSizer>
          {({ height, width }) => {
            return (
              <InfiniteLoader
                isItemLoaded={isItemLoaded}
                itemCount={itemCount}
                loadMoreItems={loadMoreItems}
              >
                {({ onItemsRendered, ref }) => (
                  <List
                    height={height}
                    itemSize={ROW_HEIGHT + 8}
                    width={width}
                    itemData={list}
                    itemCount={itemCount}
                    onItemsRendered={onItemsRendered}
                    ref={ref}
                  >
                    {TableItem}
                  </List>
                )}
              </InfiniteLoader>
            );
          }}
        </AutoSizer>
      </div>
    </>
  );
}

export default Table;
