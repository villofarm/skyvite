import aboutimg from "../assets/img/about-dashboard.png";
import aboutmtnimg from "../assets/img/ai-powered.png";

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
      <section className="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7 d-flex justify-content-center pt-4 position-relative">
              <img className="img-fluid w-100" src={aboutimg} alt="" />
              <img className="aboutmotionimg" src={aboutmtnimg} alt="" />
            </div>
            <div className="col-md-5  d-flex justify-content-center pt-4">
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
