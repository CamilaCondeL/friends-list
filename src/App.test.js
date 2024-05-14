import {React, act} from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import FriendList from './components/FriendsList';
import FriendDetails from './components/FriendDetails';
import { fetchFriends, fetchDetails } from './repo/fetchUtils';
import detailMockData from './detailsMockData.json';
import listMockData from './mockData.json';

jest.mock('./repo/fetchUtils');
fetchFriends.mockResolvedValue(listMockData);
fetchDetails.mockResolvedValue(detailMockData);

describe('FriendDetailsFlow', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('navigates to friend details on link click and fetches data', async () => {
    fetchDetails.mockResolvedValueOnce(detailMockData);
    fetchFriends.mockResolvedValueOnce(listMockData);

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

    // Wait for the friend list to render
    await waitFor(() => {
      const friendElements = screen.getAllByTestId('friend-card');
      expect(friendElements.length).toBe(listMockData.length);
    });

    // Simulate click on the first friend's details link
    const detailsLink = screen.getAllByRole('link', { name: /details/i })[0];
    await act(async () => {
      fireEvent.click(detailsLink);
    });

    act(() => {
      jest.runOnlyPendingTimers();
    });

    // Wait for the loading spinner to disappear and the details to render
    await waitFor(() => {
      expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
    });

    // Assert the friend details are rendered
    const friendDetailsElements = screen.getAllByTestId('friend-card');
    expect(friendDetailsElements.length).toBe(1);
    expect(screen.getByText("Steph Walters")).toBeInTheDocument();
  });
});
