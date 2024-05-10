import ProfilePicture from "../atoms/profile-picture";
import Status from "./status";
import { Link } from "react-router-dom";

function FriendCard(props) {
  const buttonClasses = props.card_type + '__card-details';
  const containerClasses = props.isDetail ? "d-flex align-items-center bg-white " + props.card_type + "__card" : "d-flex flex-column " + props.card_type + "__card";
  const informationDivClasses = props.card_type + "__card-information";

    return (
      <div className={containerClasses}>
        <ProfilePicture imgUrl={props.imgUrl} imgAlt={props.name} card_type={props.card_type} available={props.available} photoSuccess={props.imgSuccess} classes="list__card-photo"/>
        <div className={informationDivClasses}>
          <h1 className="mb-0">{props.fullname}</h1>
          <Status content={props.status} card_type={props.card_type}/>
        </div>
        {props.isDetail && (
          <div className={buttonClasses}>
            <Link to="/friend-details">Details</Link>
          </div>
                
        )}
      </div>
    );
  }

export default FriendCard;