import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div>
    <SEO title="Home" />
      <h1>Morgan T Shaw</h1>
      <p>Passionate software developer with a knack for problem solving. I enjoy the outdoors, trying new things, and spending time with my dog Hachi!</p>

    <Link to="/counter/">Go to Counter</Link>
        </div>
  </Layout>
)

export default IndexPage
