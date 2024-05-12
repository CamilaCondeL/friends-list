import React, { useState, useEffect } from "react";
import FriendCard from "./friends-card";
import { fetchFriends } from "../../repo/fetchUtils";
import ErrorComponent from "../../Error";

function FriendList() {
  const [friends, setFriends] = useState([]);
  const [errors, setErrors] = useState({ itHappened: false, statusCode: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFriends();
        setFriends(data);

      } catch (error) {
        if (error.response) {
          setErrors({ itHappened: true, statusCode: error.response.status });
        } else {
          console.error('Error fetching data:', error);
          setErrors({ itHappened: true, statusCode: 500 });
        }
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      {errors.itHappened ? (
        <ErrorComponent statusCode={errors.statusCode} />
      ) : (
        <div className="list">
          <span className="list__heading">Friends</span>
          {friends.map(friend => (
            <FriendCard key={friend.id} card_type="list" isDetail={true} {...friend} />
          ))}

        </div>
      )}
    </div>

  );
}

export default FriendList;