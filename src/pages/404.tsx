import React from 'react';
// components
import Layout from '../components/layout';
import SEO from '../components/head/seo';

const title = 'Page not found';

const NotFoundPage = () => {
    return (
        <Layout>
            <h1>{title}</h1>
            <p>Sadly, this page doesn't exist.</p>
        </Layout>
    );
};

export const Head = () => (
    <SEO title={title}/>
);

export default NotFoundPage;