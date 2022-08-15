import React from 'react';
import SEO from '../components/head/seo';
import Layout from '../components/layout';

const AboutPage = () => {
    return (
        <Layout>
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </Layout>
    );
};

export const Head = () => (
    <SEO title='About'/>
);

export default AboutPage;