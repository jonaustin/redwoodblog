import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostCell from 'src/components/BlogPostCell'

const BlogPostPage = ({ id }) => {
  return (
    <BlogLayout>
      <h1>BlogPostPage</h1>
      <BlogPostCell id={id} />
    </BlogLayout>
  )
}

export default BlogPostPage
