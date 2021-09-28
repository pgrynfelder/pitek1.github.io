import React from "react";
import {
  Box,
  Grid,
  WorldMap,
  ResponsiveContext,
  Heading,
  List,
  Anchor,
  Nav,
} from "grommet";

import SEO from "../components/seo";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { Book, FacebookOption, Github, LinkedinOption } from "grommet-icons";

const Paper = (props) => <Box elevation="large" pad="small" {...props} />;

const listData = [
  {
    icon: <Book />,
    text: "University of Oxford\nMathematics and Computer Science\n2021-2025",
  },
];

const socials = [
  {
    icon: <Github />,
    href: "https://github.com/pitek1",
  },
  {
    icon: <LinkedinOption />,
    href: "https://www.linkedin.com/in/piotrgrynfelder/",
  },
  {
    icon: <FacebookOption />,
    href: "https://facebook.com/pgrynfelder",
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
    small: "unset",
    medium: ["1.618fr", "1fr"],
    large: ["1.618fr", "1fr"],
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
            width="min(1300px, 100%)"
            margin="auto"
            gap="medium"
            pad="medium"
            style={{ aspectRatio: size === "small" ? "auto" : "1.618 / 1" }}
          >
            <Paper gridArea="profile" align="center">
              <Box
                round="full"
                overflow="hidden"
                margin={{ top: "large" }}
                height="small"
                style={{ aspectRatio: "1" }}
              >
                <StaticImage src="../images/me.jpg" alt="A photo of myself" />
              </Box>
              <Heading size="small" level="2">
                Piotr Grynfelder
              </Heading>
              <Nav direction="row">
                {socials.map(({ icon, href, title }, index) => (
                  <Anchor
                    icon={icon}
                    href={href}
                    key={index}
                    title={title}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                ))}
              </Nav>
              <List
                defaultItemProps={{ whiteSpace: "pre", background: "brand" }}
                primaryKey="icon"
                secondaryKey="text"
                data={listData}
                border={false}
              />
            </Paper>
            <Paper gridArea="map">
              <WorldMap
                color="brand"
                display="block"
                preserveAspectRatio={undefined}
                places={[
                  {
                    name: "University of Oxford",
                    location: [47.752022, -1.257677],
                    color: "accent-1",
                    onHover: (hovered) => console.log(hovered),
                  },
                ]}
              />
            </Paper>
            <Paper gridArea="cv"></Paper>
          </Grid>
        )}
      </ResponsiveContext.Consumer>
    </Layout>
  );
};

export default IndexPage;
