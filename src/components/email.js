import React, { useEffect, useState } from "react";

const Email = ({ children }) => {
  const [email, setEmail] = useState(
    "Enable JavaScript to see the email address."
  );
  useEffect(() => {
    setEmail(children);
  }, [children]);

  return <>{email}</>;
};

export default Email;
