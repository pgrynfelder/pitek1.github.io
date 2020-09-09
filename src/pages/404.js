import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Typography, Box } from "@material-ui/core"
import { Link } from "gatsby-theme-material-ui"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Box mb={4}>
      <Typography variant="h2">404: Not found</Typography>
    </Box>
    <Box mb={4}>
      <Typography>
        You just hit a route that doesn&#39;t exist...{" "}
        <Link to="/">Return to homepage.</Link>
      </Typography>
    </Box>
  </Layout>
)

export default NotFoundPage
