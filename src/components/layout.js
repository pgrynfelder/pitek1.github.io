import React, { useContext } from "react";
import PropTypes from "prop-types";

import "./layout.css";
import { Grommet, Box, Footer, Text, Main, ResponsiveContext } from "grommet";
import { grommet } from "grommet/themes";

const Layout = ({ children }) => {
  const size = useContext(ResponsiveContext);

  return (
    <Grommet
      theme={grommet}
      full
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </Grommet>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
