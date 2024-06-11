import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LeftSidbar from './LeftSidbar';

describe('LeftSidebar Component', () => {
  it('should render Profile menu item', () => {
    render(<LeftSidbar />);
    const profile = screen.getByText('Profile');
    expect(profile).toBeInTheDocument();
  });

  it('should render Orders menu item', () => {
    render(<LeftSidbar />);
    const orders = screen.getByText('Orders');
    expect(orders).toBeInTheDocument();
  });

  it('should render Your Items menu item', () => {
    render(<LeftSidbar />);
    const yourItems = screen.getByText('Your Items');
    expect(yourItems).toBeInTheDocument();
  });

  it('should render Groups menu item', () => {
    render(<LeftSidbar />);
    const groups = screen.getByText('Groups');
    expect(groups).toBeInTheDocument();
  });
});
