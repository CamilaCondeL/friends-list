import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import FriendCard from './components/FriendsList/friends-card';
import FriendList from './components/FriendsList';

beforeEach(() => {
  global.fetch = jest.fn();
});


describe('tests Friends List component', () => {

	it("renders a friend card", () => {
    render(<FriendCard name="John Carter" status="At Home" available={true} id={1} imgUrl="test-mock-url.com"/>);
    const nameElement = screen.getByText('John Carter');
    expect(nameElement).toBeInTheDocument();
	});

	it("renders a list of friends", async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve([{ id: 1, first_name: 'John', last_name: 'Carter', status: 'At Home', available: true, imgUrl: 'test-mock-url.com' }, { id: 2, first_name: 'Patri', last_name: 'Conde', status: 'At Work', available: false, imgUrl: 'test-mock2-url.com' }]),
    });
  
    render(<FriendList />);
    await waitFor(() => expect(screen.getByText('John Carter')).toBeInTheDocument());
    expect(screen.getByText('Patri Conde')).toBeInTheDocument();
	});


  //Write test for fetch error
});