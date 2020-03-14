import { Link, routes } from '@redwoodjs/router'

const BlogLayout = (props) => {
  return (
    <>
      <header>
        <h1>Redwood</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{props.children}</main>
    </>
  )
}

export default BlogLayout
