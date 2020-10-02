import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby"

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  return (
  <header id="header">
    <div class="logo"><Link to="/">{data.site.siteMetadata.title}</Link> <span>{data.site.siteMetadata.description}</span></div>
    {/* <img style={styles.heroImage} src={happyToon} alt="Portdebruges.eu header" />*/}
  </header>
  )
}
