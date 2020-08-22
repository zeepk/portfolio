import React, { Component } from "react"
import "../styles/About.css"
import Fab from "@material-ui/core/Fab"
class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-text-container">
          <h2>Hello! I'm Matt Hughes</h2>
          <p className="about-text">
            I'm an enthusiastic, customer-focused full stack developer.
          </p>
          <p className="about-text">
            I have experience planning, prototyping, testing, deploying, and
            maintaining apps and websites.
          </p>
          <p className="about-text">
            I use JavaScript, React, Python, Django, HTML/CSS, and many other
            tools to create the ideal user experience!
          </p>
        </div>
        <div className="buttons-container">
          <Fab
            className="button"
            variant="extended"
            onClick={this.props.projectScroll}
          >
            <div style={{ fontStyle: "italic" }}>Projects</div>
          </Fab>
          <Fab variant="extended" onClick={this.props.projectScroll}>
            <div style={{ fontStyle: "italic" }}>Contact</div>
          </Fab>
        </div>
      </div>
    )
  }
}

export default About
