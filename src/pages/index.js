import React from 'react'
import { graphql, Link } from 'gatsby'

import DefaultLayout from '../components/defaultLayout';
import createUrl from '../util/routeUtils';


export default ({ data }) => {
return (
  <DefaultLayout>
    <h2>Recent posts</h2>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          
            <h3>
              {node.frontmatter.title}
              <span>
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
            <p>
              <Link
                to={createUrl(node.frontmatter.type, node.fields.slug)}>Read more</Link>
            </p>
        </div>
      ))}
  </DefaultLayout>
  );
}
export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            type
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
