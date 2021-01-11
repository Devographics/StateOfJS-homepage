import React from "react"
import Logo from "../components/Logo"
import Layout from "../layouts/layout.js"
import StreamContents from "../contents/stream.mdx"
import styled from "styled-components"

const StreamPage = () => (
  <Layout>
    <Logo />
    <Stream className="Content Content--Home Home layout-narrow">
      <StreamContents />
    </Stream>
  </Layout>
)

const Stream = styled.div`
  h1 {
    font-size: 2rem;
    text-align: center;
  }
  h2 {
    font-size: 1.6rem;
    text-align: center;
  }
  h3 {
    font-size: 1.3rem;
    text-align: center;
  }
`

export default StreamPage
