import React from "react"
import PropTypes from "prop-types"
import { Container, Paper, Box } from "@material-ui/core"

const Layout = ({ children }) => {
  return (
    <>
      <Container maxWidth="md">
        <Box my={4}>
          <Paper>
            <Box p={4}>{children}</Box>
          </Paper>
        </Box>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
