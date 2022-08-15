import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// types
import type { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
    title?: string;
    description?: string
    lang?: string
};

const SEO = ({ title = '' , description = '', lang = 'nl', children }: Props) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `
    );

    return (
        <>
            <title>{title ? `${title} | ${site.siteMetadata.title}` : site.siteMetadata.title}</title>
            <meta name='description' content={description || site.siteMetadata.description} />
            {/* TODO - add other meta tags */}
            {/* TODO - where does the html lang attribute go? */}

            {children}
        </>
    );
};

export default SEO;