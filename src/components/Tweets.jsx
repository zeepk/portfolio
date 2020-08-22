import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Card from "@material-ui/core/Card"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListSubheader from "@material-ui/core/ListSubheader"
import TwitterIcon from "../images/twitter.png"

const Tweets = () => {
  // const { allTwitterStatusesUserTimelineNameofthequery: data } = useStaticQuery(
  //   graphql`
  //     query {
  //       allTwitterStatusesUserTimelineNameofthequery {
  //         edges {
  //           node {
  //             created_at
  //             id_str
  //             full_text
  //             user {
  //               screen_name
  //               name
  //               profile_image_url_https
  //               url
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `
  // )
  // const tweets = data.edges
  //   .map(({ node }) => node)
  //   .map(({ full_text, id_str, created_at }) => (
  //     // <TweetCard key={id_str} text={full_text} id={id_str} />
  //     <ListItem key={id_str}>
  //       <ListItemText
  //         primary={full_text}
  //         secondary={new Date(created_at).toDateString()}
  //       />
  //     </ListItem>
  //   ))
  return (
    <Card className="other-card-container">
      {/* <a href={`https://twitter.com/gatsbyjs`} target="_blank">
          Gatsby Tweets
        </a> */}
      <List className="list">
        <ListSubheader
          className="list-header"
          component="a"
          href="https://www.twitter.com/matthughes2112"
          target="_blank"
        >
          <img src={TwitterIcon} className="github-icon" alt="twitter" />
          <h3 className="github-title">Twitter & #100DaysOfCode</h3>
        </ListSubheader>
        {/* {tweets} */}
      </List>
    </Card>
  )
}

export default Tweets
