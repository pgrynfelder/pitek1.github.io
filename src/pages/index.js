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
  Button,
  Text,
  Tag,
} from "grommet";

import SEO from "../components/seo";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import {
  Book,
  FacebookOption as Facebook,
  Github,
  LinkedinOption as Linkedin,
  MailOption as Mail,
} from "grommet-icons";
import Paper from "../components/paper";
import Email from "../components/email";

const listData = [
  {
    icon: <Mail />,
    text: <Email>piotr@grynfelder.dev</Email>,
  },
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
    icon: <Linkedin />,
    href: "https://www.linkedin.com/in/piotrgrynfelder/",
  },
  {
    icon: <Facebook />,
    href: "https://facebook.com/pgrynfelder",
  },
];

const projects = [
  {
    text: "DeepSat",
    tag: "ai, segmentation, object detection",
    href: "https://deepsat.github.io",
  },
  {
    text: "Maths Clinic",
    tag: "django, sql, backend, matching",
    href: "http://klinikamatmy.pl",
  },
  {
    text: "More projects",
    href: "https://github.com/pitek1",
    secondary: true,
  },
];

const IndexPage = () => {
  const areas = {
    small: [["profile"], ["cv"], ["map"]],
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
            width="100%"
            height={{ min: "100%" }}
            margin="auto"
            gap="medium"
            pad="medium"
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
                primaryKey="icon"
                secondaryKey="text"
                data={listData}
                border={false}
              />
            </Paper>
            <Paper gridArea="map" justify="center">
              <Box height={{ max: "45vh;" }}>
                <WorldMap
                  color="brand"
                  display="block"
                  preserveAspectRatio={undefined}
                  places={[
                    {
                      name: "University of Oxford",
                      // location: [47.752022, -1.257677],
                      location: [51.752, -1.2577],
                      color: "accent-1",
                      content: (
                        <Tag
                          name="Oxford"
                          style={{ borderBottomRightRadius: "0" }}
                        />
                      ),
                      dropProps: {
                        align: { right: "left", bottom: "top" },
                        background: "none",
                        elevation: "none",
                      },
                    },
                  ]}
                />
              </Box>
            </Paper>
            <Paper gridArea="cv" justify="center">
              <Nav
                direction="row"
                alignSelf="center"
                wrap={true}
                justify="center"
              >
                {projects.map(({ text, href, secondary, tag }, index) =>
                  secondary ? (
                    <Button
                      secondary
                      href={href}
                      label={text}
                      key={index}
                      margin={{ vertical: "medium" }}
                    />
                  ) : (
                    <Tag
                      as={Anchor}
                      href={href}
                      name={text}
                      value={tag}
                      key={index}
                      margin={{ vertical: "medium" }}
                    />
                  )
                )}
              </Nav>
            </Paper>
          </Grid>
        )}
      </ResponsiveContext.Consumer>
    </Layout>
  );
};

export default IndexPage;
