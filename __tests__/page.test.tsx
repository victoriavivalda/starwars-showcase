import Page from '@/app/page';
import { render, screen } from '@testing-library/react';

describe('Home Page', () => {
  it('renders a heading', () => {
    render(<Page />);

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
