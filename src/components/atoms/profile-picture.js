import AvailableIcon from "../../images/available.svg";
import NotAvailableIcon from "../../images/notAvailable.svg";

function ProfilePicture({imgUrl, imgAlt, available, classes, card_type}) {
  const containerClasses = card_type + "__card-photo";
  const availablePhotoClasses = card_type + "__card-photo--available"
    return (
      <div className={containerClasses}>
        <img alt={imgAlt} className={availablePhotoClasses} src={available ? AvailableIcon : NotAvailableIcon}></img>
        <img src={imgUrl} className={classes}></img>
      </div>
    );
}

export default ProfilePicture;