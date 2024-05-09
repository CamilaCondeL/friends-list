import React, { useState, useEffect } from "react";
import FriendCard from "./friends-card";
import { fetchFriends, fetchPhoto } from "../../repo/fetchUtils";
import { fetchFlickrImageUrls } from "../../repo/downloadFromFlickr";
import ErrorComponent from "../../Error";

function FriendList() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFriends();
        setFriends(data);

      } catch (error) {
        <ErrorComponent statusCode={error} />
      }
    };

    fetchData();
  }, []);


  return (
    <div className="list">
      <span className="list__heading">Friends</span>
      {friends.map(friend => (
        <FriendCard key={friend.id} card_type="list" isDetail={true} {...friend} />
      ))}

    </div>
  );
}

export default FriendList;