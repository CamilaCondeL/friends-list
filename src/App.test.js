import { render, screen } from '@testing-library/react';
import App from './App';
import FriendCard from './components/FriendsList/friends-card';
import data from './mockData.json'

test('renders a friend card ', () => {
  render(<FriendCard />);
  const NameElement = screen.getByRole('button', { name: /details/i });
  expect(NameElement).toBeInTheDocument();
});

// Test suite
describe('Friend Card', () => {
  it('renders the data from the JSON file correctly', () => {
    // Render the component with mocked data
    render(<FriendCard data={data} />);

    // Assert that the component renders the name
    const nameElement = screen.getByText('Steph Walters');
    expect(nameElement).toBeInTheDocument();

    // Assert that the component renders the age
    const statusElement = screen.getByText('Developing something amazing');
    expect(statusElement).toBeInTheDocument();
  });
});
