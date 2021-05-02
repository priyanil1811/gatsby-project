import * as React from "react"
import { Link } from "gatsby"
import Bio from '../components/bio'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath


  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        <h1 className="main-heading">
          <Link to="/">{title}</Link>
        </h1>
        <nav>
          <ul className="menu">
            <li><Link to="/">Blog</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <Bio />
        © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout