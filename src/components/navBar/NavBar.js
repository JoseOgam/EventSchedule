import Logo from '../../img/logo.png'
import {
  Link
} from "react-router-dom";
const NavBar = () => {
    return (
        <div>
           <header id="header" className="d-flex align-items-center ">
        <div className="container-fluid container-xxl d-flex align-items-center">
      <div id="logo" class="me-auto">
        <Link  className="scrollto"><img src={Logo} alt="" title=""/></Link>
      </div>

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><Link className="nav-link scrollto active" to="#hero">Home</Link></li>
          <li><Link className="nav-link scrollto" to="#about">About</Link></li>
          <li><Link className="nav-link scrollto" to="#speakers">Speakers</Link></li>
          <li><Link className="nav-link scrollto" to="#schedule">Schedule</Link></li>
          <li><Link className="nav-link scrollto" to="#venue">Venue</Link></li>
          <li><Link className="nav-link scrollto" to="#hotels">Hotels</Link></li>
          <li><Link className="nav-link scrollto" to="#gallery">Gallery</Link></li>
          <li><Link className="nav-link scrollto" to="#supporters">Sponsors</Link></li>
          <li className="dropdown"><Link to="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></Link>
          <ul>
            <li><Link to="#">Drop Down 1</Link></li>
            <li className="dropdown"><Link to="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></Link>
              <ul>
                <li><Link to="#">Deep Drop Down 1</Link></li>
                <li><Link to="#">Deep Drop Down 2</Link></li>
                <li><Link to="#">Deep Drop Down 3</Link></li>
                <li><Link to="#">Deep Drop Down 4</Link></li>
                <li><Link to="#">Deep Drop Down 5</Link></li>
              </ul>
            </li>
            <li><Link to="#">Drop Down 2</Link></li>
            <li><Link to="#">Drop Down 3</Link></li>
            <li><Link to="#">Drop Down 4</Link></li>
          </ul>
        </li> 
          <li><Link className="nav-link scrollto" to="#contact">Contact</Link></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <Link className="buy-tickets scrollto" to="#buy-tickets">Buy Tickets</Link>

    </div>
  </header>
        </div>
    )
}

export default NavBar