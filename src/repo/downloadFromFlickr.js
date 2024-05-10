import axios from 'axios';
import { FLICKR_API_KEY } from './apiUrls';

// Function to fetch static image URLs from Flickr
 export async function fetchFlickrImageUrls(photos) {
    const updatedUrls = [];

    try {
        for (const photoUrl of photos) {
            const response = await axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${FLICKR_API_KEY}&photo_id=${getPhotoIdFromUrl(photoUrl)}&format=json&nojsoncallback=1`);
            updatedUrls.push(response.data.sizes.size[11].source);
        }
        return updatedUrls;
    } catch (error) {
        console.error('Error fetching image URLs:', error);
        throw error;
    }
}


const getPhotoIdFromUrl = (photoUrl) => {
    const parts = photoUrl.split('/');
    return parts[parts.length - 1];
  };
