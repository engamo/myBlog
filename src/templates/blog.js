// import React from "react";
// import { graphql } from "gatsby";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";
// import Layout from "../components/layout";

// export const query = graphql`
//   query ($slug: String!) {
//     contentfulBlogPost(slug: { eq: $slug }) {
//       title
//       publishedDate(formatString: "MMMM DD, YYYY")
//       body {
//         raw
//       }
//     }
//   }
// `;

// const Blog = (props) => {
//   const options = {
//     renderNode: {
//       'embedded-asset-block': (node) => {
//         const title = node.data.target.fields.title;
//         const file = node.data.target.fields.file;

//         if (!title || !file) {
//           return null;
//         }

//         const alt = title['en-US'];
//         const image = getImage(file['en-US']);

//         return <GatsbyImage alt={alt} image={image} />;
//       },
//     },
//   };

//   const { title, publishedDate, body } = props.data.contentfulBlogPost;

//   return (
//     <Layout>
//       <h1>{title}</h1>
//       <p>{publishedDate}</p>
//       {documentToReactComponents(JSON.parse(body.raw), options)}
//     </Layout>
//   );
// };

// export default Blog;

import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Head from "../components/head";
import Layout from "../components/layout";

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM DD, YYYY")
      body {
        raw
      }
    }
  }
`;

const Blog = (props) => {
  const options = {
    renderNode: {
      'embedded-asset-block': (node) => {
        const target = node.data.target;

        if (!target || !target.fields) {
          console.error('Invalid embedded-asset-block node:', node);
          return null;
        }

        const title = target.fields.title;
        const file = target.fields.file;

        if (!title || !file) {
          console.error('Missing title or file details:', node);
          return null;
        }

        console.log('Alt:', title['en-US']);
        console.log('Image URL:', file['en-US'].url);

        const alt = title['en-US'];
        const image = getImage(file['en-US']);

        return <GatsbyImage alt={alt} image={image} />;
      },
    },
  };

  const { title, publishedDate, body } = props.data.contentfulBlogPost;

  console.log('Title:', title);
  console.log('Published Date:', publishedDate);

  return (
    <Layout>
      <Head title={title}/>
      <h1>{title}</h1>
      <p>{publishedDate}</p>
      {documentToReactComponents(JSON.parse(body.raw), options)}
    </Layout>
  );
};

export default Blog;