import React, {useState, useEffect} from "react";

function PhotosTab({photos}) {

    return (
        <div className="detail__card-photosTab">
            <div className="row">
               {
                    photos.map((photo, index) => (
                        <div key={index} className="col-md-4">
                            <img src={photo} alt={`Photo ${index + 1}`} />
                        </div>
                    ))
                }
            </div>
            
        </div>
    );
}

export default PhotosTab;