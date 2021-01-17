import React from 'react';
import { LoaderWrapper, PreLoader } from './styled';

export const LOADER_TEST_ID = 'loader';

interface IProps {
  height?: string;
}
function Loader({ height }: IProps) {
  return (
    <LoaderWrapper data-testid={LOADER_TEST_ID} height={height}>
      <PreLoader />
    </LoaderWrapper>
  );
}

export default Loader;
