/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import FilterForm from './FilterForm';

describe("FilterForm Compoent", () => {
    it('renders form with all input fields', () => {
        const { getByLabelText } = render(<FilterForm />);
        expect(getByLabelText('Organization')).toBeInTheDocument();
        expect(getByLabelText('username')).toBeInTheDocument();
        expect(getByLabelText('email')).toBeInTheDocument();
        expect(getByLabelText('date')).toBeInTheDocument();
        expect(getByLabelText('phone number')).toBeInTheDocument();
        expect(getByLabelText('status')).toBeInTheDocument();
      });

      // negative 
      it('renders form without input fields', () => {
        const { queryByLabelText } = render(<FilterForm />);
        expect(queryByLabelText('Organization')).not.toBeNull();
        expect(queryByLabelText('username')).not.toBeNull();
        expect(queryByLabelText('email')).not.toBeNull();
        expect(queryByLabelText('date')).not.toBeNull();
        expect(queryByLabelText('phone number')).not.toBeNull();
        expect(queryByLabelText('status')).not.toBeNull();
      });
})