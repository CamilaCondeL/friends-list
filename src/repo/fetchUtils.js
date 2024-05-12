import { FRIENDS_URL } from "./apiUrls";
import { DETAILS_URL } from "./apiUrls";
import { fetchFlickrImageUrls } from "./downloadFromFlickr";
import axios from 'axios';


export const fetchFriends = async () => {
  try {
    const response = await fetch(FRIENDS_URL);
    if (!response.ok) throw new Error(response.status);

    const data = await response.json();

    for (const friend of data) {
      friend.fullname = `${friend.first_name} ${friend.last_name}`;
      await axios.get(friend.img)
        .then(response => {
          console.log(response)
          data.imgSuccess = true;
        })
        .catch(error => {
          data.imgSuccess = false
        });
    }
    return data;
  } catch (error) {
    return null;
  }
};


export const fetchDetails = async (id) => {
  try {
    const response = await fetch(DETAILS_URL);
    if (!response.ok) throw new Error('Data Error');

    const data = await response.json();
    fetchFlickrImageUrls(data.photos)
      .then(response => {
        console.log(response)
        data.imgSuccess = true;
        data.updatedUrls = response;
      }).catch(error => {
        data.imgSuccess = false;
        console.error('Error:', error);
      });

    data.fullname = `${data.first_name} ${data.last_name}`;
    data.activeStatus = data.statuses[data.statuses.length - 1];

    return data;
  } catch (error) {
    console.log(error);
    throw 500;
  }
};
