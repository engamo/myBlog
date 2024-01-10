import React from "react";
import Head from "../components/head";
import Layout from "../components/layout";
import { Link, graphql, useStaticQuery } from "gatsby";
import * as blogStyles from './blog.module.scss'
const BlogPage = () => {
  
  const data = useStaticQuery(
    graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Blog" />
      <h2>Blog.</h2>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge) => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h3>{edge.node.title}</h3>
                <p>Published on {edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
      <hr />
    </Layout>
  );
};

export default BlogPage;
