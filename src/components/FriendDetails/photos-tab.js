import React, {useState} from "react";
import ImageModal from "./photo-details";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PhotosTab({photos}) {
    const [selectedImage, setSelectedImage] = useState(null);


    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="detail__card-photosTab">
            <div className="detail__card-photosTab--modal__closeBtn d-flex align-items-center justify-content-center" onClick={handleCloseModal}><FontAwesomeIcon icon={faXmark} /></div>
            <div className="row">
               {
                    photos.map((photo, index) => (
                        <div key={index} className="col-md-4">
                            <img src={photo} alt={` ${index + 1}`} onClick={() => handleImageClick(photo)} />
                        </div>
                    ))
                }
            </div>

            {selectedImage && (
               <ImageModal imageUrl={selectedImage} onClose={handleCloseModal} />
            )}  
        </div>
    );
}

export default PhotosTab;