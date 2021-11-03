import React from "react";
import PropTypes from "prop-types";
import { Anchor } from "grommet";
import { navigate, Link as GatsbyLink } from "gatsby";

const Link = (props) => (
  <Anchor
    as={GatsbyLink}
    // to={to}
    // onClick={(ev) => {
    //   navigate(to);
    //   ev.preventDefault();
    // }}
    // {...rest}
    {...props}
  />
);

Link.propTypes = {
  to: PropTypes.string,
};
export default Link;
