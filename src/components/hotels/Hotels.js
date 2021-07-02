import hotel1 from '../../img/hotels/1.jpg'
import hotel2 from '../../img/hotels/2.jpg'
import hotel3 from '../../img/hotels/3.jpg'
const Hotels = () => {
    return (<div>
        <section id="hotels" className="section-with-bg">

      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Hotels</h2>
          <p>Her are some nearby hotels</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">

          <div className="col-lg-4 col-md-6">
            <div className="hotel">
              <div className="hotel-img">
                <img src={hotel1} alt="Hotel 1" className="img-fluid"/>
              </div>
              <h3><a href="#">Hotel 1</a></h3>
              <div className="stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <p>0.4 Mile from the Venue</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="hotel">
              <div className="hotel-img">
                <img src={hotel2} alt="Hotel 2" className="img-fluid"/>
              </div>
              <h3><a href="#">Hotel 2</a></h3>
              <div className="stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill-half-full"></i>
              </div>
              <p>0.5 Mile from the Venue</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="hotel">
              <div className="hotel-img">
                <img src={hotel3} alt="Hotel 3" className="img-fluid"/>
              </div>
              <h3><a href="#">Hotel 3</a></h3>
              <div className="stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <p>0.6 Mile from the Venue</p>
            </div>
          </div>

        </div>
      </div>

    </section>
    </div>)
}
export default Hotels;