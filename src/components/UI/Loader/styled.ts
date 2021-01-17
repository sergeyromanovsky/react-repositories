import styled from 'styled-components';
import { colors } from 'utils/colors';

export const PreLoader = styled.div`
 
  &:after {
    content: ' ';
    display: block;
    width: 5rem;
    height: 5rem;
    margin: 1rem;
    border-radius: 50%;
    border: 6px solid ${colors.main};
    border-color: ${colors.main} transparent ${colors.main} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoaderWrapper = styled.div<{ height?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${({ height = '100px' }) => height};
`;
