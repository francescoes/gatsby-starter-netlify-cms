import React from 'react';
// import Helmet from "react-helmet";
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Post from '../components/Post/Post';

export default function BlogPost({ data }) {
  const { markdownRemark: post } = data;
  const { html, frontmatter } = post;
  return (
    <Layout>
      <Post content={html} title={frontmatter.title} description={frontmatter.description} tags={frontmatter.tags} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
