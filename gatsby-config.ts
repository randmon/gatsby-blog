import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
    siteMetadata: {
        title: 'Randmon',
    },
    graphqlTypegen: true,
    plugins: [
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        {
            resolve: "gatsby-source-filesystem",
            options: {
              name: `blog`,
              path: `${__dirname}/blog`,
            }
        },
        'gatsby-plugin-mantine',
        "gatsby-plugin-mdx",
        "gatsby-transformer-sharp",
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                'name': 'images',
                'path': './src/images/'
            },
            __key: 'images'
        },
    ],
};

export default config;