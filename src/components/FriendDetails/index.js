import React, { useState, useEffect } from "react";
import FriendCard from "../FriendsList/friends-card";
import Info from "./info";
import PhotosTab from "./photos-tab";
import Button from "../atoms/button";
import { fetchDetails } from "../../repo/fetchUtils";
import ErrorComponent from "../../Error";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";



function FriendDetails() {
  const [activeTab, setActiveTab] = useState('info');
  const [friend, setFriend] = useState([]);
  const [errors, setErrors] = useState({ itHappened: false, statusCode: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDetails();
        setFriend(data);  
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

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  }; 

  return (
    <div>
      
      {errors.itHappened ? (
        <ErrorComponent statusCode={errors.statusCode}/>
      ) : (
          <div className="detail d-flex">
            <div className="detail__backBtn d-flex align-items-center justify-content-center">
              <Link to="/"><FontAwesomeIcon icon={faArrowLeft} /></Link>
            </div>
            <div className="d-flex flex-column detail__box">
              <FriendCard fullname={friend.fullname} key={friend.id} status={friend.activeStatus} card_type="detail" imgUrl={friend.img} photoSuccess={friend.imgSuccess} isDetail={false} />
              <div className="d-flex">
                <Button content="Info" classes={'btn detail__tab ' + (activeTab === 'info' ? 'detail__tab-active' : '')} onClick={() => handleTabClick('info')} />
                <Button content="Photos" classes={'btn detail__tab ' + (activeTab === 'photos' ? 'detail__tab-active' : '')} onClick={() => handleTabClick('photos')} />
              </div>

              {activeTab === 'info' && <Info  {...friend} />}
              {activeTab === 'photos' && <PhotosTab photos={friend.updatedUrls} />}
            </div>
          </div>
      )}
    </div>
  );
}

export default FriendDetails;
