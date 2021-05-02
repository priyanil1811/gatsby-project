import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About me" />
      <h1>About</h1>
      <p>Hello world. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis quo minus labore? Itaque totam impedit qui alias unde deleniti consequuntur, atque in corrupti suscipit sed, error odit, mollitia nihil aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptates, magnam expedita accusantium numquam quas iure nisi consequatur harum dolorem unde et ducimus quasi! Voluptate recusandae ullam quae consequuntur aperiam.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti aliquam et, itaque amet maiores in veniam iure reprehenderit impedit obcaecati id fugiat unde, sit ullam possimus beatae tempore soluta? Vero?</p>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
 ` 