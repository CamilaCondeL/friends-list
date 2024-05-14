import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { act } from 'react';
import FriendDetails from '.';
import detailMockData from '../../detailsMockData.json';
import { fetchDetails  } from '../../repo/fetchUtils';
import { BrowserRouter as Router } from 'react-router-dom'; 

jest.mock('../../repo/fetchUtils');

beforeEach(() => {
  global.fetch = jest.fn();
});

describe('tests Friends Details component', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('fetches and displays a friends details after 2 seconds', async () => {
    fetchDetails.mockResolvedValueOnce(detailMockData);
  
    await act(async () => {
      render(
        <Router>
          <FriendDetails />
        </Router>
      );
    });

    act(() => {
      jest.runOnlyPendingTimers();
    });

    await waitFor(() => {
        const friendElements = screen.getAllByTestId('friend-card');
        expect(friendElements.length).toBe(1);
        expect(screen.getByText("Steph Walters")).toBeInTheDocument();
        expect(screen.getByText("What is the point of all of this")).toBeInTheDocument();

        act(() => {
            fireEvent.click(screen.getByText('Photos'));
        });

        const imgElements = screen.getAllByAltText(detailMockData.fullname);
        expect(imgElements.length).toBeGreaterThan(0);
        imgElements.forEach((imgElement, index) => {
            expect(imgElement).toHaveAttribute('src', detailMockData.updatedUrls[index]); 
        });
    });
  }); 
});