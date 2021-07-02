import gallary1 from '../../img/gallery/1.jpg'
import gallary2 from '../../img/gallery/2.jpg'
import gallary3 from '../../img/gallery/3.jpg'
import gallary4 from '../../img/gallery/4.jpg'
import gallary5 from '../../img/gallery/5.jpg'
import gallary6 from '../../img/gallery/6.jpg'
import gallary7 from '../../img/gallery/7.jpg'
import gallary8 from '../../img/gallery/8.jpg'
import {
//   BrowserRouter as Router,
//   // Switch,
//   // Route,
  Link
} from "react-router-dom";
const Gallery = () => {
    return (<div>
        <section id="gallery">

      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Gallery</h2>
          <p>Check our gallery from the recent events</p>
        </div>
      </div>

      <div className="gallery-slider swiper-container">
        <div className="swiper-wrapper align-items-center">
          <div className="swiper-slide"><Link to="assets/img/gallery/1.jpg" className="gallery-lightbox"><img src={gallary1} className="img-fluid" alt=""/></Link></div>
          <div className="swiper-slide"><Link to="assets/img/gallery/2.jpg" className="gallery-lightbox"><img src={gallary2} className="img-fluid" alt=""/></Link></div>
          <div className="swiper-slide"><Link to="assets/img/gallery/3.jpg" className="gallery-lightbox"><img src={gallary3} className="img-fluid" alt=""/></Link></div>
          <div className="swiper-slide"><Link to="assets/img/gallery/4.jpg" className="gallery-lightbox"><img src={gallary4} className="img-fluid" alt=""/></Link></div>
          <div className="swiper-slide"><Link to="assets/img/gallery/5.jpg" className="gallery-lightbox"><img src={gallary5} className="img-fluid" alt=""/></Link></div>
          <div className="swiper-slide"><Link to="assets/img/gallery/6.jpg" className="gallery-lightbox"><img src={gallary6} className="img-fluid" alt=""/></Link></div>
          <div className="swiper-slide"><Link to="assets/img/gallery/7.jpg" className="gallery-lightbox"><img src={gallary7} className="img-fluid" alt=""/></Link></div>
          <div className="swiper-slide"><Link to="assets/img/gallery/8.jpg" className="gallery-lightbox"><img src={gallary8} className="img-fluid" alt=""/></Link></div>
        </div>
        <div className="swiper-pagination"></div>
      </div>

    </section>
    </div>)
}
export default Gallery;