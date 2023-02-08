/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FilterDrawer from './FilterDrawer';

describe('FilterDrawer component', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(<FilterDrawer />);
    expect(getByTestId('filter-btn-sx')).toBeInTheDocument();
  });

  test('opens the drawer on click when it is closed', () => {
    const { getByTestId } = render(<FilterDrawer />);
    fireEvent.click(getByTestId('filter-btn-sx'));
    expect(getByTestId('form')).toBeInTheDocument();
  });

  test('show the form when drawer when is open', () => {
    const { getByTestId } = render(<FilterDrawer />);
    fireEvent.click(getByTestId('filter-btn-sx'));
    expect(getByTestId('form')).toBeInTheDocument();
    fireEvent.click(getByTestId('filter-btn-sx'));
    expect(getByTestId('form')).toBeInTheDocument();
  });

  test('renders form elements correctly', () => {
    const { getByPlaceholderText } = render(<FilterDrawer />);
    expect(getByPlaceholderText('select')).toBeInTheDocument();
    expect(getByPlaceholderText('user')).toBeInTheDocument();
    expect(getByPlaceholderText('date')).toBeInTheDocument();
    expect(getByPlaceholderText('status')).toBeInTheDocument();
  });

  // negative
 /** test('does not render the form when the drawer is closed', () => {
    const { queryByTestId } = render(<FilterDrawer />);
    expect(queryByTestId('form')).not.toBeInTheDocument();
  }); */
});
