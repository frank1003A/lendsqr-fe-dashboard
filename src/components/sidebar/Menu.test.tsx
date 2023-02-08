/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter, BrowserRouter as Router } from 'react-router-dom';
import Menu from './Menu';
import { SideBarData } from 'components/types/sidebar';

const testMenuProps: SideBarData = {
    title: 'Test Menu',
    path: "/testmenu",
    subNav: [{ path: '/test1', title: 'Test 1' }, { path: '/test2', title: 'Test 2' }]
}

it('renders the menu title', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Menu menu={testMenuProps} />
    </MemoryRouter>
  );

  expect(getByText(testMenuProps.title)).toBeInTheDocument();
});

it('opens the subnav when the menu title is clicked', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Menu menu={testMenuProps} />
    </MemoryRouter>
  );

  fireEvent.click(getByText(testMenuProps.title));
  expect(getByText(testMenuProps.subNav[0].title)).toBeInTheDocument();
  expect(getByText(testMenuProps.subNav[1].title)).toBeInTheDocument();
});

// Negative Test
it('does not render submenu component when show state is false', () => {
  const { queryByText } = render(
    <Router>
      <Menu menu={testMenuProps} />
    </Router>
  );
  expect(queryByText('Label 1')).toBeNull();
  expect(queryByText('Label 2')).toBeNull();
});
