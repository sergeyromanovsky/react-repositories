import styled from 'styled-components';
import { colors } from 'utils/colors';
import { ROW_HEIGHT } from 'utils/constants';

export const Cell = styled.div`
  background-color: ${colors.lightGrey};
  text-transform: capitalize;
  display: flex;
  align-items: center;
  flex: 1;
  padding: 0 4rem;
  max-height: ${ROW_HEIGHT}px;
  font-size: 2.25rem;
  color: #000;

  a {
    color: #000;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
      opacity: 0.5;
    }
  }

  &:first-child {
    border-radius: 2rem 0px 0px 2rem;
  }
  &:last-child {
    border-radius: 0px 2rem 2rem 0px;
  }
  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;
