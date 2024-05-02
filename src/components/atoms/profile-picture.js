import AvailableIcon from "../../images/available.svg";
import NotAvailableIcon from "../../images/notAvailable.svg";

function ProfilePicture({imgUrl, available, classes}) {
    return (
      <div className="list__card-photo">
        <img className="list__card-photo--available" src={available ? AvailableIcon : NotAvailableIcon}></img>
        <img src={imgUrl} className={classes}></img>
      </div>
    );
}

export default ProfilePicture;