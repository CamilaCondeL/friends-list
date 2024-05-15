import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import detailMockData from '../../mocks/detailsMockData.json';
import PhotosTab from './photos-tab';

jest.mock('../../repo/fetchUtils');

beforeEach(() => {
  global.fetch = jest.fn();
});

describe('tests photo details modal component', () => {

  it('renders the image modal opening', async () => {
    const photos = detailMockData.updatedUrls;
  
    render(
        <Router>
            <PhotosTab photos={photos} name={detailMockData.fullname} />
        </Router>
    );

    const firstImg = screen.getAllByAltText(detailMockData.fullname)[0];
    fireEvent.click(firstImg);

    await waitFor(() => {
        const modalImg = screen.getByAltText('Zoomed');
        expect(modalImg).toBeInTheDocument();
        expect(modalImg).toHaveAttribute('src', photos[0]);
    });

    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);

    await waitFor(() => {
        const modalImg = screen.queryByAltText('Zoomed');
        expect(modalImg).not.toBeInTheDocument();
    });

  }); 
});