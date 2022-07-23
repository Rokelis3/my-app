
const Header = () => {
    const header = (
    <header>
        <nav className="navigation">
            <img src="./logo192.png" className="react-logo" alt="logo"/>
            <ul className="header-tabs">
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
        </nav>
      </header>
    )
    return(
      <div>
        {header}
      </div>
    )
  }

  export default Header;