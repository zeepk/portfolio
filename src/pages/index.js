import React from "react"
import "../styles/layout.css"
import Container from "../components/Container.jsx"
import ReactGA from "react-ga"

function initializeReactGA() {
  ReactGA.initialize("UA-160538981-1")
  ReactGA.pageview("/homepage")
}
initializeReactGA()
const IndexPage = () => <Container />

export default IndexPage
