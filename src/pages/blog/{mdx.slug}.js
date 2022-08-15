import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout';
import SEO from '../../components/head/seo';
import { Container, Stack, Text, Title } from '@mantine/core';

const BlogPost = ({ data }) => {
    const image = getImage(data.mdx.frontmatter.hero_image)

    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
                <Stack align='center' mb={20}>
                    <Title order={2}>{data.mdx.frontmatter.title}</Title>
                    <Text color='dimmed'><small>Posted: {data.mdx.frontmatter.date}</small></Text>
                </Stack>
                <GatsbyImage
                    image={image}
                    alt={data.mdx.frontmatter.hero_image_alt}
                />
                <p>
                    Photo Credit:{" "}
                    <a href={data.mdx.frontmatter.hero_image_credit_link}>
                        {data.mdx.frontmatter.hero_image_credit_text}
                    </a>
                </p>
                <MDXRenderer>
                    {data.mdx.body}
                </MDXRenderer>
        </Layout>
    )
}

export const query = graphql`
    query($id: String) {
        mdx(id: {eq: $id}) {
            body
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                hero_image_alt
                hero_image_credit_link
                hero_image_credit_text
                hero_image {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`
export const Head = ({ data }) => (
    <SEO title={data.mdx.frontmatter.title}/>
);

export default BlogPost