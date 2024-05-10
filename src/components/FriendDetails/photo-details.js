import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ImageModal = ({ imageUrl, onClose }) => {

  return (
    <div className="detail__card-photosTab--modal d-flex align-items-center justify-content-center">
      <div className="detail__card-photosTab--modal__background"></div>
      <img
        src={imageUrl}
        alt="Zoomed"
        className="detail__card-photosTab--modal__zoomedImage"
      />
    </div>
  );
};

export default ImageModal;
