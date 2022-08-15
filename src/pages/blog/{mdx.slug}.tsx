import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import Layout from '../../components/layout';
import SEO from '../../components/head/seo';
import { Stack, Text, Title } from '@mantine/core';

type GraphQLResult = {
    mdx: {
        frontmatter: {
            title: string;
            date: string;
            hero_image: {
                childImageSharp: {
                    gatsbyImageData: IGatsbyImageData;
                }
            };
            hero_image_alt: string;
            hero_image_credit_link: string;
            hero_image_credit_text: string;
        };
        body: string;
    };
};

const BlogPost = ({ data }: PageProps<GraphQLResult>) => {
    return (
        <Layout>
            <Stack align='center' mb={20}>
                <Title order={2}>{data.mdx.frontmatter.title}</Title>
                <Text color='dimmed'><small>Posted: {data.mdx.frontmatter.date}</small></Text>
            </Stack>
            <GatsbyImage
                image={data.mdx.frontmatter.hero_image.childImageSharp.gatsbyImageData}
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
export const Head = ({ data }: PageProps<GraphQLResult>) => (
    <SEO title={data.mdx.frontmatter.title}/>
);

export default BlogPost