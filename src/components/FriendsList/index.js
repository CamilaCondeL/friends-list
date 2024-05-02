import FriendCard from "./friends-card";
import data from '../../mockData.json';

const womanPhoto = require('../../images/woman-picture.jpg');
const manPhoto = require('../../images/man-picture.jpg');

data[0].img = womanPhoto;
data[1].img = manPhoto;

function FriendList() {
    return (
      <div className="list">
        <span className="list__heading">Friends</span>
        {data.map(item => (
            <FriendCard name = {item.first_name + " " + item.last_name} status={item.status} available={item.available} imgUrl={item.img} id={item.id}/>
        ))}
        

      </div>
    );
}

export default FriendList;