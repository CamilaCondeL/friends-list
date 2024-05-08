import React, {useState} from "react";
import { useEffect } from "react";
import FriendCard from "../FriendsList/friends-card";
import Info from "./info";
import PhotosTab from "./photos-tab";
import Button from "../atoms/button";
import mockData from "../../detailsMockData.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fetchDetails } from "../../repo/fetchUtils";
import { DETAILS_URL } from "../../repo/apiUrls";

const manPhoto = require('../../images/man-picture.jpg');

function FriendDetails(id = 'id') {
    const [activeTab, setActiveTab] = useState('info');
    const [friend, setFriend] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await fetchDetails();
          setFriend(data);  
        } catch (error) {
          console.error('Error fetching friends data:', error);
        }
      };
  
      fetchData();
    }, []);

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    }; 
  
  return (
    <div className="detail d-flex flex-column">
        <FriendCard name={friend.fullname} key={friend.id} status={friend.activeStatus} card_type="detail" imgUrl={manPhoto} isDetail={false}/>  

        <div className="d-flex">
            <Button content="Info" classes={'btn detail__tab ' + (activeTab === 'info' ? 'detail__tab-active' : '')} onClick={() => handleTabClick('info')}/>  
            <Button content="Photos" classes={'btn detail__tab ' + (activeTab === 'photos' ? 'detail__tab-active' : '')} onClick={() => handleTabClick('photos')}/>  
        </div>

        {activeTab === 'info' && <Info  {...friend}/>}
        {activeTab === 'photos' && <PhotosTab photos={friend.updatedPhotosUrls}/>}
    </div>
  );
}

export default FriendDetails;