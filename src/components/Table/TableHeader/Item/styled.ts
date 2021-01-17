import { colors } from 'utils/colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${colors.darkBlue};
  color: #fff;
  text-transform: capitalize;
  font-size: 2.25rem;
  flex: 1;
  padding: 2.5rem 4rem;
  margin-bottom: 1rem;
  &:not(:last-child) {
    margin-right: 0.5rem;
  }
  &:first-child {
    border-radius: 2rem 0px 0px 15px;
  }
  &:last-child {
    border-radius: 0px 2rem 2rem 0px;
  }
`;
