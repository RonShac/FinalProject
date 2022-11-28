const Navbar = () => {
  return (
    <nav className="nav">
      <a href="/" className="logo-style">
        logo
      </a>
      <div className="navigation">
        <ul>
          <li className="active">
            <a href="/events">Events</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/artists">Artists</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
