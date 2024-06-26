import {React , act} from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import FriendList from './components/FriendsList';
import FriendDetails from './components/FriendDetails';
import { fetchFriends, fetchDetails } from './repo/fetchUtils';
import detailMockData from './mocks/detailsMockData.json';
import listMockData from './mocks/mockData.json';

jest.mock('./repo/fetchUtils');

describe('FriendDetailsFlow', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  beforeEach(() => {
    fetchFriends.mockResolvedValue(listMockData);
    fetchDetails.mockResolvedValue(detailMockData);
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.clearAllMocks();
  });

  test('navigates to friend details on link click and fetches data', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<FriendList />} />
            <Route path="/friend-details" element={<FriendDetails />} />
          </Routes>
        </MemoryRouter>
      );
    });

    act(() => {
      jest.runOnlyPendingTimers();
    });

    await waitFor(() => {
      const friendElements = screen.getAllByTestId('friend-card');
      expect(friendElements.length).toBe(listMockData.length);
    });

    const detailsLink = screen.getAllByRole('link', { name: /details/i })[0];
    await act(async () => {
      fireEvent.click(detailsLink);
    });

    act(() => {
      jest.runOnlyPendingTimers();
    });

    await waitFor(() => {
      expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
    });

    expect(screen.getByText(detailMockData.fullname)).toBeInTheDocument();
  });
});
