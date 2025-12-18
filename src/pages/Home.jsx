import aboutimg from "../assets/img/about-dashboard.webp";
import firstcard from "../assets/img/school.png";
export default function Home() {
  return (
    <div>
      <section className="home-section">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="threedots">
                <span className="red"></span>
                <span className="yellow"></span>
                <span className="green"></span>
              </div>
              {/* <h1 className="mainline" >
                Student Management Software as Dynamic as Your Campus
              </h1> */}
              <h1 className="mainline">
                Educational ERP Software with Bank-level{" "}
                <span className="circleheading">Security</span>
              </h1>
              <p className="mainpara">
                Manage your school with ease using our smart student management
                software. From student records to attendance and performance
                tracking, everything stays organized in one place.
              </p>
              <div className="btnhomegroup d-flex gap-3">
                <a href="/contact" className="startedbtn">
                  Get Started For Free
                </a>
                <a href="/about" className="learn-more">
                  Learn More
                </a>
              </div>
            </div>

            <div className="col-md-5"></div>
          </div>
        </div>
      </section>
      <section className="fourcardsec py-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-6">
              <div className="fourcard">
                <img src={firstcard} />
                <div>
                  <h2>300+</h2>
                  <p>Institutes</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="fourcard">
                <img src={firstcard} />
                <div>
                  <h2>1M+</h2>
                  <p>Students</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="fourcard">
                <img src={firstcard} />
                <div>
                  <h2>99.9%</h2>
                  <p>Uptime Guarantee</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="fourcard">
                <img src={firstcard} />
                <div>
                  <h2>24/7</h2>
                  <p>Customer Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section position-relative">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <span className="badge">Seamless Experience</span>
              <h2>
                Manage Your Institution <br></br>
                <span>On the Go</span>
              </h2>
              <p>
                Skyvite is a modern, AI-powered student management software
                designed to help schools operate smarter and faster.{" "}
              </p>
            </div>
            <div className="col-md-6 position-relative">
              <img className="img-fluid dshboard w-100" src={aboutimg} alt="" />
            </div>
            {/* <div className="col-12 p-0 gradientbg">
                <img decoding="auto" width="1400" height="513" sizes="1500px" srcset="https://framerusercontent.com/images/AwrbWiEWUy4IouNnstLMWwwifU.webp?scale-down-to=512&amp;width=1400&amp;height=513 512w,https://framerusercontent.com/images/AwrbWiEWUy4IouNnstLMWwwifU.webp?scale-down-to=1024&amp;width=1400&amp;height=513 1024w,https://framerusercontent.com/images/AwrbWiEWUy4IouNnstLMWwwifU.webp?width=1400&amp;height=513 1400w" src="https://framerusercontent.com/images/AwrbWiEWUy4IouNnstLMWwwifU.webp?width=1400&amp;height=513" alt="" />
              </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
