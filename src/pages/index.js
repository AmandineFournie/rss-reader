import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a yummy potatoe"
        src="https://blogdemaths.files.wordpress.com/2014/02/une-patate.jpg?w=300"      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage