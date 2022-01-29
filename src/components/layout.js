import React from "react";
import PropTypes from "prop-types";

import "./layout.css";
import { Grommet } from "grommet";
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";
import { css } from "styled-components";

const theme = deepMerge(grommet, {
  list: {
    item: {
      extend: {
        whiteSpace: "pre-wrap",
        justifyContent: "left",
      },
    },
  },
  worldMap: {
    place: {
      base: "10px",
      active: "20px",
    },
    extend: css`
      path {
        transition: stroke-width 0.1s ease-in-out;
      }
    `,
  },
});

const Layout = ({ children }) => {
  return (
    <Grommet
      theme={theme}
      style={{
        height: "100%",
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
