import React from "react"
import { Link } from "gatsby"

const BlogPage = ({ data }) => (
  <div>
    {/* <SEO title="Home" /> */}
    <h1>Latest blog</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <small>
          Posted by {post.node.frontmatter.author} on{" "}
          {post.node.frontmatter.date}
        </small>
        <br />
        <br />
        <Link to={post.node.frontmatter.path}>Read More</Link>
        <br />
        <br />
      </div>
    ))}
  </div>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`

export default BlogPage
