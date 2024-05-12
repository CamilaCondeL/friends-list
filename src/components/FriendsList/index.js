import React, { useState, useEffect } from "react";
import FriendCard from "./friends-card";
import { fetchFriends } from "../../repo/fetchUtils";
import ErrorComponent from "../../Error";
import Loading from "../common/loading";

function FriendList() {
  const [friends, setFriends] = useState([]);
  const [errors, setErrors] = useState({ itHappened: false, statusCode: 0 });
  const [isLoading, setIsLoading] = useState(true);

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
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if(errors.itHappened) {
    return  <ErrorComponent statusCode={errors.statusCode} />;
  }

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