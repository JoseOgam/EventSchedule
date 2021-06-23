import { Link } from 'react-router-dom'
import speaker1 from '../../img/speakers/1.jpg'
import speaker2 from '../../img/speakers/2.jpg'
import speaker3 from '../../img/speakers/3.jpg'
import speaker4 from '../../img/speakers/4.jpg'
import speaker5 from '../../img/speakers/5.jpg'
import speaker6 from '../../img/speakers/6.jpg'
const Speakers = () => {
    return(
        <div>
            <section id="speakers">
                <div className="container" data-aos="fade-up">
                    <div className="section-header">
                    <h2>Event Speakers</h2>
                    <p>Here are some of our speakers</p>
                    </div>

                    <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="speaker" data-aos="fade-up" data-aos-delay="100">
                        <img src={speaker1} alt="Speaker 1" className="img-fluid" />
                        <div className="details">
                            <h3><Link to="speaker-details.html">Brenden Legros</Link></h3>
                            <p>Quas alias incidunt</p>
                            <div className="social">
                            <Link to=""><i className="bi bi-twitter"></i></Link>
                            <Link to=""><i className="bi bi-facebook"></i></Link>
                            <Link to=""><i className="bi bi-instagram"></i></Link>
                            <Link to=""><i className="bi bi-linkedin"></i></Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="speaker" data-aos="fade-up" data-aos-delay="200">
                        <img src={speaker2} alt="Speaker 2" className="img-fluid"/>
                        <div className="details">
                            <h3><Link to="speaker-details.html">Hubert Hirthe</Link></h3>
                            <p>Consequuntur odio aut</p>
                            <div className="social">
                            <Link to=""><i className="bi bi-twitter"></i></Link>
                            <Link to=""><i className="bi bi-facebook"></i></Link>
                            <Link to=""><i className="bi bi-instagram"></i></Link>
                            <Link to=""><i className="bi bi-linkedin"></i></Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="speaker" data-aos="fade-up" data-aos-delay="300">
                        <img src={speaker3} alt="Speaker 3" className="img-fluid"/>
                        <div className="details">
                            <h3><Link to="speaker-details.html">Cole Emmerich</Link></h3>
                            <p>Fugiat laborum et</p>
                            <div className="social">
                            <Link to=""><i className="bi bi-twitter"></i></Link>
                            <Link to=""><i className="bi bi-facebook"></i></Link>
                            <Link to=""><i className="bi bi-instagram"></i></Link>
                            <Link to=""><i className="bi bi-linkedin"></i></Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="speaker" data-aos="fade-up" data-aos-delay="100">
                        <img src={speaker4} alt="Speaker 4" className="img-fluid"/>
                        <div className="details">
                            <h3><Link to="speaker-details.html">Jack Christiansen</Link></h3>
                            <p>Debitis iure vero</p>
                            <div className="social">
                            <Link to=""><i className="bi bi-twitter"></i></Link>
                            <Link to=""><i className="bi bi-facebook"></i></Link>
                            <Link to=""><i className="bi bi-instagram"></i></Link>
                            <Link to=""><i className="bi bi-linkedin"></i></Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="speaker" data-aos="fade-up" data-aos-delay="200">
                        <img src={speaker5} alt="Speaker 5" className="img-fluid"/>
                        <div className="details">
                            <h3><Link to="speaker-details.html">Alejandrin Littel</Link></h3>
                            <p>Qui molestiae natus</p>
                            <div className="social">
                            <Link to=""><i className="bi bi-twitter"></i></Link>
                            <Link to=""><i className="bi bi-facebook"></i></Link>
                            <Link to=""><i className="bi bi-instagram"></i></Link>
                            <Link to=""><i className="bi bi-linkedin"></i></Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="speaker" data-aos="fade-up" data-aos-delay="300">
                        <img src={speaker6} alt="Speaker 6" className="img-fluid"/>
                        <div className="details">
                            <h3><Link to="speaker-details.html">Willow Trantow</Link></h3>
                            <p>Non autem dicta</p>
                            <div className="social">
                            <Link to=""><i className="bi bi-twitter"></i></Link>
                            <Link to=""><i className="bi bi-facebook"></i></Link>
                            <Link to=""><i className="bi bi-instagram"></i></Link>
                            <Link to=""><i className="bi bi-linkedin"></i></Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                </section>
        </div>
    )
}
export default Speakers;