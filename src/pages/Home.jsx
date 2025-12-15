import aboutimg from "../assets/img/about-us.png";
export default function Home() {
  return (
    <div>
      <section className="home-section" >
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="threedots">
                <span className="red"></span>
                <span className="yellow"></span>
                <span className="green"></span>
              </div>
              <h1 className="mainline" >
                Student Management Software as Dynamic as Your Campus
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
            <div className="col-md-12 d-flex justify-content-center pt-4">
              <img className="img-fluid w-75" style={{ borderRadius: '50px' }} src={aboutimg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
