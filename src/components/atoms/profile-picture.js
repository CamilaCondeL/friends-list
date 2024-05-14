import AvailableIcon from "../../images/available.svg";
import NotAvailableIcon from "../../images/notAvailable.svg";
import GenericPhoto from "../../images/generic-photo.svg"

function ProfilePicture({imgUrl, imgAlt, available, classes, cardType, photoSuccess}) {
  const containerClasses = cardType + "__card-photo";
  const availablePhotoClasses = cardType + "__card-photo--available";
  const genericPhotoClasses = classes + " " + cardType + "__card-photo--generic" 

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