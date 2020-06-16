import React from "react"
import "../styles/layout.css"
import Container from "../components/Container.jsx"
import ReactGA from "react-ga"
import { Helmet } from "react-helmet"
import Me from "../images/me.jpg"

function initializeReactGA() {
  ReactGA.initialize("UA-160538981-1")
  ReactGA.pageview("/homepage")
}
initializeReactGA()
const IndexPage = () => (
  <div>
    <Helmet>
      <link rel="icon" href={Me} />
      <meta charSet="utf-8" />
      <title>Matt Hughes</title>
    </Helmet>
    <Container />
  </div>
)

export default IndexPage
