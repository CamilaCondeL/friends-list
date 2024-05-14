import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react';
import FriendList from '.';
import mockData from '../../mockData.json';
import { fetchFriends  } from '../../repo/fetchUtils';
import { BrowserRouter as Router } from 'react-router-dom'; 

jest.mock('../../repo/fetchUtils');

beforeEach(() => {
  global.fetch = jest.fn();
});

describe('tests Friends List component', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
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
});