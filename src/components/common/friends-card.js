import ProfilePicture from "../atoms/profile-picture";
import Status from "./status";
import { Link } from "react-router-dom";

function FriendCard(props) {
  const buttonClasses = props.cardType + '__card-details';
  const containerClasses = props.isDetail ? "d-flex align-items-center bg-white " + props.cardType + "__card" : "d-flex flex-column " + props.cardType + "__card";
  const informationDivClasses = props.cardType + "__card-information";

    return (
      <div data-testid="friend-card" className={containerClasses}>
        <ProfilePicture imgUrl={props.imgUrl} imgAlt={props.name} cardType={props.cardType} available={props.available} photoSuccess={props.imgSuccess} classes="list__card-photo"/>
        <div className={informationDivClasses}>
          <h1 className="mb-0">{props.fullname}</h1>
          <Status content={props.status} cardType={props.cardType}/>
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