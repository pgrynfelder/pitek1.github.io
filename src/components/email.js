import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Email = ({ children }) => {
  const [email, setEmail] = useState(
    "Enable JavaScript to see the email address."
  );
  useEffect(() => {
    setEmail(children);
  });

  return <>{email}</>;
};

export default Email;
