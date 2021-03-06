import speaker1 from '../../img/speakers/1.jpg'
import speaker2 from '../../img/speakers/2.jpg'
import speaker3 from '../../img/speakers/3.jpg'
import speaker4 from '../../img/speakers/4.jpg'
import speaker5 from '../../img/speakers/5.jpg'
import speaker6 from '../../img/speakers/6.jpg'
const Schedule = () => {
    return (
        <div>
          <section id="schedule" className="section-with-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Event Schedule</h2>
          <p>Here is our event schedule</p>
        </div>

        <ul className="nav nav-tabs" role="tablist" data-aos="fade-up" data-aos-delay="100">
          <li className="nav-item">
            <a className="nav-link active" href="#day-1" role="tab" data-bs-toggle="tab">Day 1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#day-2" role="tab" data-bs-toggle="tab">Day 2</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#day-3" role="tab" data-bs-toggle="tab">Day 3</a>
          </li>
        </ul>

        <h3 className="sub-heading">Voluptatem nulla veniam soluta et corrupti consequatur neque eveniet officia. Eius
          necessitatibus voluptatem quis labore perspiciatis quia.</h3>

        <div className="tab-content row justify-content-center" data-aos="fade-up" data-aos-delay="200">

          <div role="tabpanel" className="col-lg-9 tab-pane fade show active" id="#day-1">

            <div className="row schedule-item">
              <div className="col-md-2"><time>09:30 AM</time></div>
              <div className="col-md-10">
                <h4>Registration</h4>
                <p>Fugit voluptas iusto maiores temporibus autem numquam magnam.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>10:00 AM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src={speaker1} alt="Brenden Legros"/>
                </div>
                <h4>Keynote <span>Brenden Legros</span></h4>
                <p>Facere provident incidunt quos voluptas.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>11:00 AM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src={speaker2} alt="Hubert Hirthe"/>
                </div>
                <h4>Et voluptatem iusto dicta nobis. <span>Hubert Hirthe</span></h4>
                <p>Maiores dignissimos neque qui cum accusantium ut sit sint inventore.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>12:00 AM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src={speaker3} alt="Cole Emmerich"/>
                </div>
                <h4>Explicabo et rerum quis et ut ea. <span>Cole Emmerich</span></h4>
                <p>Veniam accusantium laborum nihil eos eaque accusantium aspernatur.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>02:00 PM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src={speaker4} alt="Jack Christiansen"/>
                </div>
                <h4>Qui non qui vel amet culpa sequi. <span>Jack Christiansen</span></h4>
                <p>Nam ex distinctio voluptatem doloremque suscipit iusto.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>03:00 PM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src={speaker5} alt="Alejandrin Littel"/>
                </div>
                <h4>Quos ratione neque expedita asperiores. <span>Alejandrin Littel</span></h4>
                <p>Eligendi quo eveniet est nobis et ad temporibus odio quo.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>04:00 PM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src={speaker6} alt="Willow Trantow"/>
                </div>
                <h4>Quo qui praesentium nesciunt <span>Willow Trantow</span></h4>
                <p>Voluptatem et alias dolorum est aut sit enim neque veritatis.</p>
              </div>
            </div>

          </div>
       
          <div role="tabpanel" className="col-lg-9  tab-pane fade" id="#day-2">

            <div className="row schedule-item">
              <div className="col-md-2"><time>10:00 AM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src={speaker1} alt="Brenden Legros"/>
                </div>
                <h4>Libero corrupti explicabo itaque. <span>Brenden Legros</span></h4>
                <p>Facere provident incidunt quos voluptas.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>11:00 AM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src={speaker1} alt="Hubert Hirthe"/>
                </div>
                <h4>Et voluptatem iusto dicta nobis. <span>Hubert Hirthe</span></h4>
                <p>Maiores dignissimos neque qui cum accusantium ut sit sint inventore.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>12:00 AM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src={speaker1} alt="Cole Emmerich"/>
                </div>
                <h4>Explicabo et rerum quis et ut ea. <span>Cole Emmerich</span></h4>
                <p>Veniam accusantium laborum nihil eos eaque accusantium aspernatur.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>02:00 PM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src={speaker1} alt="Jack Christiansen"/>
                </div>
                <h4>Qui non qui vel amet culpa sequi. <span>Jack Christiansen</span></h4>
                <p>Nam ex distinctio voluptatem doloremque suscipit iusto.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>03:00 PM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src={speaker1} alt="Alejandrin Littel"/>
                </div>
                <h4>Quos ratione neque expedita asperiores. <span>Alejandrin Littel</span></h4>
                <p>Eligendi quo eveniet est nobis et ad temporibus odio quo.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>04:00 PM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src={speaker1} alt="Willow Trantow"/>
                </div>
                <h4>Quo qui praesentium nesciunt <span>Willow Trantow</span></h4>
                <p>Voluptatem et alias dolorum est aut sit enim neque veritatis.</p>
              </div>
            </div>

          </div>
        
          <div role="tabpanel" className="col-lg-9  tab-pane fade" id="day-3">

            <div className="row schedule-item">
              <div className="col-md-2"><time>10:00 AM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src={speaker1} alt="Hubert Hirthe"/>
                </div>
                <h4>Et voluptatem iusto dicta nobis. <span>Hubert Hirthe</span></h4>
                <p>Maiores dignissimos neque qui cum accusantium ut sit sint inventore.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>11:00 AM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src={speaker1} alt="Cole Emmerich"/>
                </div>
                <h4>Explicabo et rerum quis et ut ea. <span>Cole Emmerich</span></h4>
                <p>Veniam accusantium laborum nihil eos eaque accusantium aspernatur.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>12:00 AM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src={speaker1} alt="Brenden Legros"/>
                </div>
                <h4>Libero corrupti explicabo itaque. <span>Brenden Legros</span></h4>
                <p>Facere provident incidunt quos voluptas.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>02:00 PM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src={speaker1} alt="Jack Christiansen"/>
                </div>
                <h4>Qui non qui vel amet culpa sequi. <span>Jack Christiansen</span></h4>
                <p>Nam ex distinctio voluptatem doloremque suscipit iusto.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>03:00 PM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src={speaker1} alt="Alejandrin Littel"/>
                </div>
                <h4>Quos ratione neque expedita asperiores. <span>Alejandrin Littel</span></h4>
                <p>Eligendi quo eveniet est nobis et ad temporibus odio quo.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>04:00 PM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src={speaker1} alt="Willow Trantow"/>
                </div>
                <h4>Quo qui praesentium nesciunt <span>Willow Trantow</span></h4>
                <p>Voluptatem et alias dolorum est aut sit enim neque veritatis.</p>
              </div>
            </div>

          </div>


        </div>

      </div>

    </section>
    </div>)
}

export default Schedule;