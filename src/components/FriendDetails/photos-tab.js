import React, {useState} from "react";
import ImageModal from "./photo-details";
import Button from "../atoms/button";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PhotosTab({photos, name}) {
    const [selectedImage, setSelectedImage] = useState(null);


    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="detail__card-photosTab">
            {selectedImage && (
                <Button isDetail={false} classes="detail__card-photosTab--modal__closeBtn d-flex align-items-center justify-content-center"onClick={handleCloseModal} content={<FontAwesomeIcon icon={faXmark} />}/>
            )}  
            <div className="row">
               {
                    photos.map((photo, index) => (
                        <div key={index} className="col-md-4">
                            <img src={photo} alt={name} onClick={() => handleImageClick(photo)} />
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