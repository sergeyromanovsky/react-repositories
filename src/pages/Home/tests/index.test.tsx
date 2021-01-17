import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';
import { wait, waitForDomChange } from '@testing-library/dom';
import Home from '..';
import { LOADER_TEST_ID } from 'components/UI/Loader';
import { GET_REPOSITORIES } from 'gql/GetRepositories';
import { ReactRepositoriesMock } from 'utils/mocks';
import { act } from 'react-dom/test-utils';

describe('Home page', () => {
  beforeAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
      configurable: true,
      value: 1000,
    });
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
      configurable: true,
      value: 1000,
    });
  });
  it('Should show loader if data is not provided', async () => {
    const { getByTestId } = render(
      <MockedProvider>
        <Home />
      </MockedProvider>
    );

    expect(getByTestId(LOADER_TEST_ID)).toBeInTheDocument();
    await wait();
  });

  it('Should fetch data and match snapshot', async () => {
    const mocks = [
      {
        request: {
          query: GET_REPOSITORIES,
        },
        result: {
          data: ReactRepositoriesMock,
        },
      },
      {
        request: {
          query: GET_REPOSITORIES,
          variables: { cursor: 'Y3Vyc29yOjI1' },
        },
        result: {
          data: ReactRepositoriesMock,
        },
      },
    ];

    const { getByText, baseElement } = render(
      <MockedProvider mocks={mocks}>
        <Home />
      </MockedProvider>
    );

    await act(async () => {
      await waitForDomChange();
      expect(getByText('react')).toBeInTheDocument();
      expect(baseElement).toMatchSnapshot();
    });
  });
});
