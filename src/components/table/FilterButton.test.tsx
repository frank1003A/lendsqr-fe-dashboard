/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FilterButton from './FilterButton';

describe('FilterButton component', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(
      <FilterButton open={false} handleOpen={() => {}} disabled={false} />
    );
    expect(getByTestId('filter-btn')).toBeInTheDocument();
  });

  test('opens the filter form on click when it is closed', () => {
    const handleOpen = jest.fn();
    const { getByTestId } = render(
      <FilterButton open={false} handleOpen={handleOpen} disabled={false} />
    );
    fireEvent.click(getByTestId('filter-btn'));
    expect(handleOpen).toHaveBeenCalled();
  });
  
  // negative test
  test('does not open the filter form when it is disabled', () => {
    const handleOpen = jest.fn();
    const { getByTestId } = render(
      <FilterButton open={false} handleOpen={handleOpen} disabled={true} />
    );
    fireEvent.click(getByTestId('filter-btn'));
    expect(handleOpen).not.toHaveBeenCalled();
  });

  test('does not render filter form when it is closed', () => {
    const { queryByTestId } = render(
      <FilterButton open={false} handleOpen={() => {}} disabled={false} />
    );
    expect(queryByTestId('filter-action')).toBeNull();
  });
});
