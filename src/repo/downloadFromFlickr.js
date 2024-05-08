import axios from 'axios';
import { FLICKR_API_KEY } from './apiUrls';

const friend = { 
    "id": 6, 
    "img": "https://s3.amazonaws.com/uifaces/faces/twitter/walterstephanie/128.jpg", 
    "first_name": "Steph",
    "last_name": "Walters",
    "phone": "(820) 289-1818",
    "address_1": "5190 Center Court Drive",
    "city": "Spring",
    "state": "TX",
    "zipcode": "77370",
    "bio": "I'm very choosy. I'm also very suspicious, very irrational and I have a very short temper. I'm also extremely jealous and slow to forgive. Just so you know.",
    "photos":[
        "https://flic.kr/p/mxHVJu",
        "https://flic.kr/p/nCJyXN",
        "https://flic.kr/p/mxwwsv"
    ],
    "statuses": [
        "Developing something amazing",
        "This could be interesting....",
        "Man, life is so good",
        "There is nothing quite like a good friend",
        "Take a look around you, everything is awesome",
        "What is the point of all of this"
    ],
    "available": true
};


// Function to fetch static image URLs from Flickr
 export async function fetchFlickrImageUrls(photos) {
    const updatedUrls = [];
    try {
        for (const photoUrl of photos) {
            const response = await axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${FLICKR_API_KEY}&photo_id=${getPhotoIdFromUrl(photoUrl)}&format=json&nojsoncallback=1`);
            updatedUrls.push(response.data.sizes.size[1].source);
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
