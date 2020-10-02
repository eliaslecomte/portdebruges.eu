const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    actions.createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
}

exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              type
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { type } = node.frontmatter;
    const { slug } = node.fields;

    actions.createPage({
      path: createUrl(type, slug),
      component: getComponent(type),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug,
      },
    })
  })
}

function getComponent(postType) {
  switch (postType) {
    case 'bruges':
      return path.resolve(`./src/templates/kite-spots-post.js`);
    case 'kite-spots':
      return path.resolve(`./src/templates/in-bruges-post.js`)
    case 'blog':
    default:
      return path.resolve(`./src/templates/blog-post.js`);
  }
}

function createUrl(type, slug) {
  return `/${type}${slug}`;
}
