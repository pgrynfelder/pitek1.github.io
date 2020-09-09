import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Typography, Box, Button, ButtonGroup } from "@material-ui/core"
import StaszicSnackbar from "../components/staszicSnackbar"

function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <Box mb={4}>
        <Typography variant="h2">Hello there</Typography>
      </Box>
      <Box mb={4}>
        <Typography>
          My name's Piotr Grynfelder. I'm a final grade student at Staszic High
          School in Warsaw, which is considered to be one of the best in Poland.
          My major interests are Mathematics, Computer Science and Physics. This
          site is likely to become my blog in the future.
        </Typography>
      </Box>
      <Box mb={4}>
        <ButtonGroup
          color="primary"
          variant="contained"
          style={{ maxWidth: "100%" }}
        >
          <Button
            href="https://github.com/pitek1"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </Button>
          <Button
            href="https://fb.com/pgrynfelder"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </Button>
          <Button
            href="https://instagram.com/pgrynfelder"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </Button>
        </ButtonGroup>
      </Box>
      <StaszicSnackbar />
    </Layout>
  )
}

export default Home
