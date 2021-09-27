import React from "react";
import {
  Box,
  Grid,
  Text,
  WorldMap,
  ResponsiveContext,
  Heading,
  List,
  Anchor,
  Nav,
} from "grommet";

import SEO from "../components/seo";
import Layout from "../components/layout";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import {
  Book,
  Facebook,
  FacebookOption,
  Home,
  Instagram,
  Linkedin,
  LinkedinOption,
  MailOption,
} from "grommet-icons";

const GoldenGrid = styled(Grid)`
  aspect-ratio: 1.618 / 1;
`;

const listData = [
  {
    icon: <Book />,
    text: (
      <>
        University of Oxford
        <br />
        Mathematics and Computer Science
        <br />
        <small>2021-2025</small>
      </>
    ),
  },
];

const IndexPage = () => {
  const areas = {
    small: [["profile"], ["map"], ["cv"]],
    medium: [
      ["profile", "map"],
      ["profile", "cv"],
    ],
    large: [
      ["profile", "map"],
      ["profile", "cv"],
    ],
  };
  const columns = {
    small: ["1fr"],
    medium: ["1fr", "1.618fr"],
    large: ["1fr", "1.618fr"],
  };
  const rows = {
    small: ["min-content", "min-content", "min-content"],
    medium: ["1fr", "1.618fr"],
    large: ["1fr", "1.618fr"],
  };

  return (
    <Layout>
      <SEO title="Home" />
      <ResponsiveContext.Consumer>
        {(size) => (
          <Grid
            columns={columns[size]}
            rows={rows[size]}
            areas={areas[size]}
            width={"min(1300px, 100%)"}
            margin="auto"
            gap="medium"
            pad="medium"
            style={{ aspectRatio: (size == "small" ? "auto" : "1.618 / 1") }}
          >
            <Box
              gridArea="profile"
              elevation="medium"
              full
              pad="small"
              align="center"
            >
              <Box
                round="full"
                overflow="hidden"
                margin={{ top: "large"}}
                height="small"
                style={{ aspectRatio: "1" }}
              >
                <StaticImage src="../images/me.jpg" alt="Me" />
              </Box>
              <Heading size="small" level="2">
                Piotr Grynfelder
              </Heading>
              <Nav direction="row">
                <Anchor icon={<LinkedinOption />} />
                <Anchor icon={<FacebookOption />} />
                <Anchor icon={<Instagram />} />
                <Anchor icon={<MailOption />} />
              </Nav>
              <List
                defaultItemProps={{ whiteSpace: "pre", background: "brand" }}
                primaryKey="icon"
                secondaryKey="text"
                data={listData}
                border={false}
              />
            </Box>
            <Box gridArea="map" elevation="medium" full pad="small">
              <WorldMap
                color="brand"
                display="block"
                preserveAspectRatio={undefined}
                places={[
                  {
                    name: "University of Oxford",
                    location: [51.752022, -1.257677],
                    color: "accent-1",
                    onClick: (name) => {},
                  },
                ]}
              />
            </Box>
            <Box gridArea="cv" elevation="medium" full></Box>
          </Grid>
        )}
      </ResponsiveContext.Consumer>
    </Layout>
  );
};

export default IndexPage;
