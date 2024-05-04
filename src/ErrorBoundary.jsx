import React, { useState } from "react";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  return hasError ? (
    <div>Error occurred. Please try again later.</div>
  ) : (
    children
  );
};

export default ErrorBoundary;
