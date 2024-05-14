import React from 'react';
import LoadingSpinner from '../atoms/spinner';
    
function Loading() {
  return (
    <div data-testid="loading" className="loading-container d-flex align-items-center justify-content-center">
      <LoadingSpinner />
    </div>
  );
}

export default Loading;