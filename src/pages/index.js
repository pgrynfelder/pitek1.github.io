import React from "react";
import { Link } from "gatsby";
import { Box, Heading, Paragraph } from "grommet";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading>Hi people</Heading>
    <Paragraph>Welcome to your new Gatsby site.</Paragraph>
    <Paragraph>Now go build something great.</Paragraph>
  </Layout>
);

export default IndexPage;
