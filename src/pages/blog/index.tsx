import React from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import Layout from '../../components/layout';
import SEO from '../../components/head/seo';

type GraphQLResult = {
    allMdx: {
        nodes: {
            id: string;
            slug: string;
            frontmatter: {
                title: string;
                date: string;
                description: string;
            };
        }[];
    }
};

const BlogPage = ({data}: PageProps<GraphQLResult>) => {
    return (
        <Layout>
            <ul>
                {
                    data.allMdx.nodes.map(node => (
                        <article key={node.id}>
                            <h2>
                                <Link to={`/blog/${node.slug}`}>
                                    {node.frontmatter.title}
                                </Link>
                            </h2>
                            <p>Posted: {node.frontmatter.date}</p>
                        </article>
                    ))
                }
            </ul>
        </Layout>
    )
};

export const query = graphql`
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    title
                }
                id
                slug
            }
        }
    }
`;

export const Head = () => (
    <SEO title='Blog'/>
);

export default BlogPage;