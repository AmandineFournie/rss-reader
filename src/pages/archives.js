import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import {useStaticQuery, graphql } from 'gatsby';
import * as styles from '../components/layout.module.css'; // Import the CSS module




const ArchivePage = () => {
    return (
        <Layout pageTitle="Archives">
        <div>
            <h1>Welcome to the archives</h1>
        </div>
        </Layout>
    );
};
export const Head = () => <Seo title="Archives" />


export default ArchivePage
  