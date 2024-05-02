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
      {friends.map(item => (
          <FriendCard key={item.id} name = {item.first_name + " " + item.last_name} status={item.status} available={item.available} imgUrl={item.img} id={item.id}/>
      ))}
        

    </div>
  );
}

export default FriendList;