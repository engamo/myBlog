import React from 'react';
import { Link } from "gatsby";
import Head from "../components/head";
import Layout from "../components/layout"

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <h2>Page Not Found.</h2>
      <p><Link to="/">Head home</Link></p>
    </Layout>
  )
}
export default NotFound