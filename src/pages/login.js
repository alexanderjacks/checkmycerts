import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Head from 'components/head';

const Login = ({ data }) => (
  <Layout>
    <Head pageTitle={data.aboutJson.title} />
    <Title as="h1" class="">{'Prove your skills to the world'}</Title>
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.aboutJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Login.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Login;

export const query = graphql`
  query LoginQuery {
    aboutJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
