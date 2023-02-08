/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import UserCard from './UserCard';
import { USER } from 'components/types/user';

const user: USER = {
    id: "1",
  profile: {
    firstName: 'John',
    lastName: 'Doe',
    avatar: 'avatar.jpg',
    bvn: '12345678901'
  },
  accountNumber: '1234567890',
  accountBalance: '1000000',
  createdAt: new Date()
};

const onButtonClick = jest.fn();

describe('UserCard component', () => {
  afterEach(cleanup);

  it('renders correctly', () => {
    const { asFragment } = render(<UserCard user={user} active={1} onButtonClick={onButtonClick} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the user name and account number correctly', () => {
    const { getByText } = render(
      <UserCard
        active={1}
        user={user}
        onButtonClick={onButtonClick}
      />
    );
    const name = getByText(`${user.profile.firstName} ${user.profile.lastName}`);
    const accountNumber = getByText(`${user.accountNumber}`);
    expect(name).toBeInTheDocument();
    expect(accountNumber).toBeInTheDocument();
  });
});
