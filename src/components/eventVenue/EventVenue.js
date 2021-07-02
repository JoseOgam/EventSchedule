import venue1 from '../../img/venue-gallery/1.jpg'
import venue2 from '../../img/venue-gallery/2.jpg'
import venue3 from '../../img/venue-gallery/3.jpg'
import venue4 from '../../img/venue-gallery/4.jpg'
import venue5 from '../../img/venue-gallery/5.jpg'
import venue6 from '../../img/venue-gallery/6.jpg'
import venue7 from '../../img/venue-gallery/7.jpg'
import venue8 from '../../img/venue-gallery/8.jpg'
const EventVenue = () => {
    return (
        <div>
 <section id="venue">

      <div className="container-fluid" data-aos="fade-up">

        <div className="section-header">
          <h2>Event Venue</h2>
          <p>Event venue location info and gallery</p>
        </div>

        <div className="row g-0">
          <div className="col-lg-6 venue-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style={{border:0}} title="title" allowfullscreen></iframe>
          </div>

          <div className="col-lg-6 venue-info">
            <div className="row justify-content-center">
              <div className="col-11 col-lg-8 position-relative">
                <h3>Downtown Conference Center, New York</h3>
                <p>Iste nobis eum sapiente sunt enim dolores labore accusantium autem. Cumque beatae ipsam. Est quae sit qui voluptatem corporis velit. Qui maxime accusamus possimus. Consequatur sequi et ea suscipit enim nesciunt quia velit.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="container-fluid venue-gallery-container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-0">

          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a href="assets/img/venue-gallery/1.jpg" className="glightbox" data-gall="venue-gallery">
                <img src={venue1} alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a href="assets/img/venue-gallery/2.jpg" className="glightbox" data-gall="venue-gallery">
                <img src={venue2} alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a href="assets/img/venue-gallery/3.jpg" className="glightbox" data-gall="venue-gallery">
                <img src={venue3} alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a href="assets/img/venue-gallery/4.jpg" className="glightbox" data-gall="venue-gallery">
                <img src={venue4} alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a href="assets/img/venue-gallery/5.jpg" className="glightbox" data-gall="venue-gallery">
                <img src={venue5} alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a href="assets/img/venue-gallery/6.jpg" className="glightbox" data-gall="venue-gallery">
                <img src={venue6} alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a href="assets/img/venue-gallery/7.jpg" className="glightbox" data-gall="venue-gallery">
                <img src={venue7} alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a href="assets/img/venue-gallery/8.jpg" className="glightbox" data-gall="venue-gallery">
                <img src={venue8} alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

        </div>
      </div>

    </section>
        </div>
    )
}
export default EventVenue;