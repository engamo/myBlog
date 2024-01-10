import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Layout from "../components/layout";

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM DD, YYYY")
      body {
        raw
        references {
          title
          ... on ContentfulAsset {
            contentful_id
            __typename
            gatsbyImageData(layout: CONSTRAINED, width: 1600, formats: [AUTO, WEBP, JPG])
          }
        }
      }
    }
  }
`;

const Blog = (props) => {
  const options = {
    renderNode: {
      "embedded-asset-block": ({ data }) => {
        const { title, gatsbyImageData } = data.target;

        // Use GatsbyImage component with the `gatsbyImageData`
        const image = getImage(gatsbyImageData);

        return (  
            <GatsbyImage image={image} alt={title} />
        );
      },
    },
  };

  const { title, publishedDate, body } = props.data.contentfulBlogPost;

  return (
    <Layout>
      <h1>{title}</h1>
      <p>{publishedDate}</p>
      {body && renderRichText(body, options)}
    </Layout>
  );
};

export default Blog;

