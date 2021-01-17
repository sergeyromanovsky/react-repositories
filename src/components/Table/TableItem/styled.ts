import styled, { css } from 'styled-components';

interface IProps {
  style: any;
}
export const Row = styled.div`
  display: flex;
  flex: 1;

  ${({ style }: IProps) => css`
    ${style}
  `}
`;
