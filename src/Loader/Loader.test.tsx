import React from 'react';

import { render, screen } from '@testing-library/react';

import Loader from './Loader';

it('show overlay while loading', () => {
  render(<Loader loading>Content</Loader>);
  expect(screen.queryByTestId('overlay')).toBeVisible();
});

it('hide overlay while not loading', () => {
  render(<Loader loading={false}>Content</Loader>);
  expect(screen.queryByTestId('overlay')).not.toBeInTheDocument();
});

it('show the children', () => {
  render(<Loader loading={false}>Content</Loader>);
  expect(screen.getByText('Content')).toBeInTheDocument();
});
