import ProfilePicture from "../atoms/profile-picture";
import Status from "./status";
import Button from "../atoms/button";

function FriendCard(props) {
  const buttonClasses = 'text-light list__card-details';

    return (
      <div className="list__card d-flex align-items-center bg-white">
        <ProfilePicture imgUrl={props.imgUrl} imgAlt={props.name} available={props.available} classes="list__card-photo"/>
        <div className="list__card-information">
          <h1 className="mb-0">{props.name}</h1>
          <Status content={props.status}/>
        </div>
        <Button content={'Details'} classes={buttonClasses} isDetail={props.isDetail} id={props.id}/>  
      </div>
    );
  }

export default FriendCard;