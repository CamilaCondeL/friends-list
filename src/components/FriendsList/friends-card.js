import ProfilePicture from "../atoms/profile-picture";
import Status from "./status";
import Button from "../atoms/button";

function FriendCard({name, status, available, id, imgUrl}) {
  const buttonClasses = 'text-light list__card-details';

    return (
      <div className="list__card d-flex align-items-center bg-white">
        <ProfilePicture imgUrl={imgUrl} available={available} classes="list__card-photo"/>
        <div className="list__card-information">
          <h1 className="mb-0">{name}</h1>
          <Status content={status}/>
        </div>
        <Button content={'Details'} classes={buttonClasses} isDetail='true' id={id}/>  
      </div>
    );
  }

export default FriendCard;