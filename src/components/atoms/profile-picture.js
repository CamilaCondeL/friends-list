import AvailableIcon from "../../images/available.svg";
import NotAvailableIcon from "../../images/notAvailable.svg";
import GenericPhoto from "../../images/generic-photo.svg"

function ProfilePicture({imgUrl, imgAlt, available, classes, card_type, photoSuccess}) {
  const containerClasses = card_type + "__card-photo";
  const availablePhotoClasses = card_type + "__card-photo--available";
  const genericPhotoClasses = classes + " " + card_type + "__card-photo--generic" 

    return (
      <div className={containerClasses}>
        <img alt={imgAlt} className={availablePhotoClasses} src={available ? AvailableIcon : NotAvailableIcon}></img>
        {photoSuccess ? (
          <img className={classes} src={imgUrl} alt="Error" />
        ) : (
          <img className={genericPhotoClasses} src={GenericPhoto} alt={imgAlt}/>
        )}
      </div>
    );
}

export default ProfilePicture;