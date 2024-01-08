import React from "react";
import Head from "../components/head";
import Layout from "../components/layout";

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact Page</h1>
      <p>
        Contact me through my Linkedin link{" "}
        <a
          href="https://www.linkedin.com/in/mustapha-anthonio/"
          target="_blank"
        >
          here
        </a>
      </p>
    </Layout>
  );
};

export default ContactPage;
