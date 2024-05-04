import React, {useState} from "react";
import FriendCard from "../FriendsList/friends-card";
import Info from "./info";
import PhotosTab from "./photos-tab";
import Button from "../atoms/button";
import mockData from "../../detailsMockData.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const manPhoto = require('../../images/man-picture.jpg');

function FriendDetails() {
    const statusLength = mockData.statuses.length; //in order to show last status of statuses list 
    const [activeTab, setActiveTab] = useState('info');

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
  
  return (
    <div className="detail d-flex flex-column">
        <FriendCard key={mockData.id} name = {mockData.first_name + " " + mockData.last_name} status={mockData.statuses[statusLength - 1]} card_type="detail" imgUrl={manPhoto} isDetail={false}/>  

        <div className="d-flex">
            <Button content="Info" classes={'btn detail__tab ' + (activeTab === 'info' ? 'detail__tab-active' : '')} onClick={() => handleTabClick('info')}/>  
            <Button content="Photos" classes={'btn detail__tab ' + (activeTab === 'photos' ? 'detail__tab-active' : '')} onClick={() => handleTabClick('photos')}/>  
        </div>

        {activeTab === 'info' && <Info  {...mockData}/>}
        {activeTab === 'photos' && <PhotosTab photos={mockData.photos}/>}
    </div>
  );
}

export default FriendDetails;