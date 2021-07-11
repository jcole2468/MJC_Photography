import Nav from './Nav'

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <div>
        <container>
          {children}
        </container>
      </div>
    </div>
  )
}

export default Layout