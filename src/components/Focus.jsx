import React, { Component } from "react"
import "../styles/Focus.css"
import Grid from "@material-ui/core/Grid"
import Me from "../images/me.jpg"
import Clip from "../images/twitch-clip.mp4"
import LightSpeed from "react-reveal/LightSpeed"
import Fade from "react-reveal/Fade"
export default class Focus extends Component {
  render() {
    return (
      <div className="focus-container">
        <Grid container spacing={3}>
          <Grid className="grid-item" item xs={12} sm={6}>
            <Fade>
              {/* <div className="video"> */}
              {/* <iframe
                  // src="https://clips.twitch.tv/embed?clip=SingleSparklingSaladKappaPride&parent=localhost"
                  src={Clip}
                  className="twitch-clip"
                  parent="matthughes.dev"
                  title={"Twitch Clip"}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  frameBorder="0"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  allowFullScreen
                  autoplay="true"
                  muted="true"
                  loop="true"
                /> */}
              {/* <video
                  src={Clip}
                  className="twitch-clip"
                  controls
                  autoPlay
                  loop
                  muted
                ></video>
              </div> */}
              <img src={Me} alt="Matt Hughes" className="me-image" />
            </Fade>
          </Grid>
          <Grid className="grid-item" item xs={12} sm={6}>
            <LightSpeed left cascade>
              <Grid container spacing={3}>
                <Grid className="grid-item" item xs={6} sm={6}>
                  <span className="material-icons focus-icon">
                    accessibility_new
                  </span>

                  <h1 className="focus-title">Easy to Use</h1>
                  <div className="focus-text">
                    The code I write is intuitive & reusable. Extra comments not
                    needed.
                  </div>
                </Grid>
                <Grid className="grid-item" item xs={6} sm={6}>
                  <span className="material-icons focus-icon">extension</span>
                  <h1 className="focus-title">Feature Rich</h1>
                  <div className="focus-text">
                    I innovate while I deliver. Improvements & features are
                    always on my mind.
                  </div>
                </Grid>
                <Grid className="grid-item" item xs={6} sm={6}>
                  <span className="material-icons focus-icon">
                    view_carousel
                  </span>
                  <h1 className="focus-title">Simplistic</h1>
                  <div className="focus-text">
                    My implementations are simple. Overcomplicating slows things
                    down.
                  </div>
                </Grid>
                <Grid className="grid-item" item xs={6} sm={6}>
                  <span className="material-icons focus-icon">access_time</span>
                  <h1 className="focus-title">Efficient</h1>
                  <div className="focus-text">
                    My development process is no-nonsense. Dilverables are
                    always completed on-time or earlier.
                  </div>
                </Grid>
              </Grid>
            </LightSpeed>
          </Grid>
        </Grid>
      </div>
    )
  }
}
