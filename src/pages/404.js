import { Heading, Paragraph } from "grommet";
import * as React from "react";
import Layout from "../components/layout";
import Link from "../components/link";
import SEO from "../components/seo";

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="Page not found" />
      <Heading>Page not found</Heading>
      <Paragraph>
        Sorry 😔 The page you were looking for was not found.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go to homepage</Link>.
      </Paragraph>
    </Layout>
  );
};

export default NotFoundPage;
