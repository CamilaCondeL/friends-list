import React, {useState, useEffect} from "react";
import FriendCard from "./friends-card";

function FriendList() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
          const response = await fetch('http://private-5bdb3-friendmock.apiary-mock.com/friends');
          if(!response.ok) throw new Error('Data Error');
  
          const data = await response.json();
          setFriends(data);
  
      } catch (error) {
          console.log(error);
      }
    };

    fetchFriends();
  }, []);
  
  return (
    <div className="list">
      <span className="list__heading">Friends</span>
      {friends.map(friend => (
          <FriendCard key={friend.id} name={friend.first_name + " " + friend.last_name} card_type="list" isDetail={true} {...friend}/>
      ))}

    </div>
  );
}

export default FriendList;