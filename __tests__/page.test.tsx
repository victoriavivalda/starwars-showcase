import Page from '@/app/page';
import { render, waitFor } from '@testing-library/react';

describe('Most Visited Views Page', () => {
  it('renders a heading with the page title', () => {
    const headingPageText = 'Most Visited Views';

    render(<Page />);

    const container = document.querySelector('h2');

    waitFor(() => expect(container).toEqual(headingPageText));
  });

  it('renders navigation', () => {
    const navLinks = [
      'People',
      'Films',
      'Planets',
      'Species',
      'Starships',
      'Vehicles',
    ];

    render(<Page />);

    const anchorLinks = document.querySelectorAll('nav a');
    const anchorLinksText = Array.from(anchorLinks).map((a) => a.innerHTML);
    expect(anchorLinksText).toEqual(navLinks);
  });

  it('renders the text to navigate home', () => {
    const homeLink = 'Star Wars Showcase';

    render(<Page />);

    const anchorLink = document.querySelector('header a h1')?.innerHTML;
    expect(anchorLink).toEqual(homeLink);
  });

  it('renders the table', () => {
    render(<Page />);

    const table = document.querySelector('table');

    expect(table).toBeInTheDocument();
  });
});
