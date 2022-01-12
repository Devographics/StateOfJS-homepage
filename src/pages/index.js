import React from "react"
// import ResultsComingSoon from "../components/ResultsComingSoon"
import Share from "../components/Share"
import Newsletter from "../components/Newsletter"
import TakeSurvey from "../components/TakeSurvey"
import About from "../components/About"
import Footer from "../components/Footer"
import Intro from "../components/Intro"
import Languages from "../components/Languages"
import Translators from "../components/Translators"
import Logo from "../components/Logo"
// import ViewResults from "../components/ViewResults"
// import ReactGA from 'react-ga'
import Layout from "../layouts/layout.js"

const Index = () => (
  <Layout>
    <Languages />
    <Logo />
    <div className="Content Content--Home Home layout-narrow">
      <Intro />
      {/* <ResultsComingSoon /> */}
      <div className="Block Actions Block--Actions">
        <TakeSurvey />
        {/* <ViewResults /> */}
      </div>
      <Share />
      <Newsletter />
      {/* <About /> */}
      {/* <Translators /> */}
      <Footer />
    </div>
  </Layout>
)

export default Index

