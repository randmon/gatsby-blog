import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
    return (
        <Layout pageTitle='Home Page'>
            <p>I'm making this by following the Gatsby Tutorial.</p>
            <StaticImage
                alt='A red panda painting a piece of paper with a brush and blue paint'
                src='../images/red-panda-painting.jpg'
            />
        </Layout>
    )
}

export default IndexPage