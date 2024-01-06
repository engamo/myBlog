import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as footerStyles from './footer.module.scss';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={footerStyles.footer}>
      <p>Created by {data.site.siteMetadata.author}, &copy; 2023</p>
    </footer>
  );
};

export default Footer;