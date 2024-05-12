import React from 'react';

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
