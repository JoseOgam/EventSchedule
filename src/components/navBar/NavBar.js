const NavBar = () => {
    return (
        <div>
           <header id="header" className="d-flex align-items-center ">
    <div className="container-fluid container-xxl d-flex align-items-center">

      <div id="logo" className="me-auto">
       
        <h1><a to="index.html">The<span>Event</span></a></h1>
        <a to="index.html" className="scrollto"><img src="assets/img/logo.png" alt="" title=""/></a>
      </div>

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><a className="nav-link scrollto active" to="#hero">Home</a></li>
          <li><a className="nav-link scrollto" to="#about">About</a></li>
          <li><a className="nav-link scrollto" to="#speakers">Speakers</a></li>
          <li><a className="nav-link scrollto" to="#schedule">Schedule</a></li>
          <li><a className="nav-link scrollto" to="#venue">Venue</a></li>
          <li><a className="nav-link scrollto" to="#hotels">Hotels</a></li>
          <li><a className="nav-link scrollto" to="#gallery">Gallery</a></li>
          <li><a className="nav-link scrollto" to="#supporters">Sponsors</a></li>
          <li className="dropdown"><a to="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
          <ul>
            <li><a to="#">Drop Down 1</a></li>
            <li className="dropdown"><a to="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
              <ul>
                <li><a to="#">Deep Drop Down 1</a></li>
                <li><a to="#">Deep Drop Down 2</a></li>
                <li><a to="#">Deep Drop Down 3</a></li>
                <li><a to="#">Deep Drop Down 4</a></li>
                <li><a to="#">Deep Drop Down 5</a></li>
              </ul>
            </li>
            <li><a to="#">Drop Down 2</a></li>
            <li><a to="#">Drop Down 3</a></li>
            <li><a to="#">Drop Down 4</a></li>
          </ul>
        </li> 
          <li><a className="nav-link scrollto" to="#contact">Contact</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <a className="buy-tickets scrollto" to="#buy-tickets">Buy Tickets</a>

    </div>
  </header>
        </div>
    )
}

export default NavBar