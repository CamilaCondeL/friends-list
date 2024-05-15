import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react';
import FriendList from '.';
import mockData from '../../mocks/mockData.json';
import { fetchFriends  } from '../../repo/fetchUtils';
import { BrowserRouter as Router } from 'react-router-dom'; 

jest.mock('../../repo/fetchUtils');



describe('tests Friends List component', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
    fetchFriends.mockReset();
  });

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('renders loading initially', async () => {
    await act(async () => {
      render(
        <Router>
          <FriendList />
        </Router>
      );
    });
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  it('fetches and displays friends after 2 seconds', async () => {
    fetchFriends.mockResolvedValueOnce(mockData);
  
    await act(async () => {
      render(
        <Router>
          <FriendList />
        </Router>
      );
    });

    act(() => {
      jest.runOnlyPendingTimers();
    });

    await waitFor(() => {
      const friendElements = screen.getAllByTestId('friend-card');
      expect(friendElements.length).toBe(mockData.length);

      mockData.forEach((friend) => {
        expect(screen.getByText(friend.fullname)).toBeInTheDocument();
      });
    });
  }); 

  it('handles API error correctly', async () => {
    fetchFriends.mockRejectedValueOnce({ response: { status: 404 } });

    await act(async () => {
      render(
        <Router>
          <FriendList />
        </Router>
      );
    });

    act(() => {
      jest.runOnlyPendingTimers();
    });

    await waitFor(async () => {
      const errorComponent = await screen.findByText(/Not Found/i);
      expect(errorComponent).toBeInTheDocument();
    });
  });
});