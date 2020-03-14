import { Link, routes } from '@redwoodjs/router'
import BlogLayout from 'src/layouts/BlogLayout'

const AboutPage = () => {
  return (
    <>
      <BlogLayout>
        <main>
          <p>up dat tree ta freedom</p>
          <Link to={routes.home()}>Return home</Link>
        </main>
      </BlogLayout>
    </>
  )
}

export default AboutPage
