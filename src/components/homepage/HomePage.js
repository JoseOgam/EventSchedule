import {
  Link
} from "react-router-dom";
const HomePage = () => {
    return (
    <div>
    <section id="hero">
    <div className="hero-container" data-aos="zoom-in" data-aos-delay="100">
      <h1 className="mb-4 pb-0">The Annual<br /><span>Marketing</span> Conference</h1>
      <p className="mb-4 pb-0">10-12 December, Downtown Conference Center, New York</p>
      <Link href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox play-btn mb-4"></Link>
      <Link href="#about" className="about-btn scrollto">About The Event</Link>
    </div>
  </section>
</div>
    )
}

export default HomePage;