import React from "react";
import { Link } from 'gatsby';
import Head from "../components/head";
import Layout from '../components/layout';
const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h2>Hello.</h2>
      <p>I'm Engamo, a fullstack developer living in Lagos, Nigeria. I built this personal blog with Gatsby, React.js and GraphQL.</p>
    </Layout>
  );
};

export default IndexPage;
