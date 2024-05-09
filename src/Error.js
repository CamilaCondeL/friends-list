import React from 'react';

const ForbiddenError = () => {
  return (
    <div>
      <h1>403 Forbidden</h1>
      <p>Sorry, you don't have permission to access this resource.</p>
    </div>
  );
};

const NotFoundError = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>Sorry, the requested resource could not be found.</p>
    </div>
  );
};

const ServerError = ({ statusCode }) => {
  return (
    <div>
      <h1>{statusCode} Error</h1>
      <p>Sorry, an error occurred while processing your request.</p>
    </div>
  );
};

const ErrorComponent = ({ statusCode }) => {
  switch (statusCode) {
    case 403:
      return <ForbiddenError />;
    case 404:
      return <NotFoundError />;
    default:
      return <ServerError statusCode={statusCode} />;
  }
};

export default ErrorComponent;