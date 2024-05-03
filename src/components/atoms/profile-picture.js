import AvailableIcon from "../../images/available.svg";
import NotAvailableIcon from "../../images/notAvailable.svg";

function ProfilePicture({imgUrl, imgAlt, available, classes}) {
    return (
      <div className="list__card-photo">
        <img alt={imgAlt} className="list__card-photo--available" src={available ? AvailableIcon : NotAvailableIcon}></img>
        <img src={imgUrl} className={classes}></img>
      </div>
    );
}

export default ProfilePicture;