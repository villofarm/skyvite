import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import aboutimg from "../assets/img/about-dashboard.webp";
import firstcard from "../assets/img/school.png";
import topschoolerp from "../assets/img/top10schoolerp.png";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const paragraphRef = useRef(null);

  useEffect(() => {
    if (!paragraphRef.current) return;

    gsap.fromTo(
      paragraphRef.current,
      { "--fill": "0%" },
      {
        "--fill": "100%",
        ease: "none",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 75%",
          end: "bottom 40%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div>
      {/* HERO SECTION */}
      <section className="home-section">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="threedots">
                <span className="red"></span>
                <span className="yellow"></span>
                <span className="green"></span>
              </div>

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

      {/* FOUR CARDS */}
      <section className="fourcardsec py-3">
        <div className="container">
          <div className="row">
            {[
              ["300+", "Institutes"],
              ["1M+", "Students"],
              ["99.9%", "Uptime Guarantee"],
              ["24/7", "Customer Support"],
            ].map(([value, label], i) => (
              <div key={i} className="col-lg-3 col-md-6 col-6">
                <div className="fourcard">
                  <img src={firstcard} alt="" />
                  <div>
                    <h2>{value}</h2>
                    <p>{label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section position-relative">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <span className="badge">Seamless Experience</span>
              <h2>
                Manage Your Institution <br />
                <span>On the Go</span>
              </h2>
              <p>
                Skyvite is a modern, AI-powered student management software
                designed to help schools operate smarter and faster.
              </p>
            </div>

            <div className="col-md-6 position-relative">
              <img className="img-fluid dshboard w-100" src={aboutimg} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="stickycardssection">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Complete Digital Solutions for Schools</h2>
              <p>
                Discover how Skyvite can transform your institution with its
                innovative features and user-friendly interface.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 d-flex flex-column justify-content-center align-items-center gap-4">
              <div className="stickycard cardone">
                <div className="cardcontent">
                  <div className="row">
                    <div className="col-md-6">
                      <h3>All-in-One Platform</h3>
                    </div>
                    <div className="col-md-6">
                      <img className="img-fluid" src={aboutimg} alt="All-in-One Platform" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="stickycard cardtwo">
                <div className="cardcontent">
                  <div className="row">
                    <div className="col-md-6">
                      <h3>All-in-One Platform</h3>
                    </div>
                    <div className="col-md-6">
                      <img className="img-fluid" src="https://jupsoft.netlify.app/images/admission.png" alt="All-in-One Platform" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="stickycard cardthree">
                                <div className="cardcontent">
                  <div className="row">
                    <div className="col-md-6">
                      <h3>All-in-One Platform</h3>
                    </div>
                    <div className="col-md-6">
                      <img className="img-fluid" src="https://jupsoft.netlify.app/images/admission.png" alt="All-in-One Platform" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="stickycard cardfour">
                <div className="cardcontent">
                  <div className="row">
                    <div className="col-md-6">
                      <h3>All-in-One Platform</h3>
                    </div>
                    <div className="col-md-6">
                      <img className="img-fluid" src="https://jupsoft.netlify.app/images/admission.png" alt="All-in-One Platform" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CINEMATIC SCROLL FILL TEXT */}
      <section className="about-text py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 ref={paragraphRef} className="cinematic-fill">
                Why Choose Skyvite ?
              </h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Impedit incidunt, harum officia pariatur velit vitae eaque optio
                adipisci quasi mollitia corporis inventore minus reiciendis
                culpa cum natus fugit, excepturi non!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="blogsection">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <h2>From Our Blog</h2>
        <p className="blogsubheading">
          Ideas and inspiration for better education management every day.
        </p>
      </div>
    </div>

    <div className="row px-5">
      <div className="col-md-6">
        <div className="blogmaincard">
          <a>
            <img src={topschoolerp} alt="Top 10 School ERP Software" />
          </a>
          <div className="blogcontent">
            <a>
              <h3>Top 10 School ERP Software in India</h3>
            </a>
            <div className="blogby">
              <span>By Vishant Kamboj</span>
              <span>Friday, Dec 19 2025</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="blogmaincard">
          <a>
            <img src={topschoolerp} alt="Top 10 School ERP Software" />
          </a>
          <div className="blogcontent">
            <a>
              <h3>Top 10 School ERP Software in India</h3>
            </a>
            <div className="blogby">
              <span>By Vishant Kamboj</span>
              <span>Friday, Dec 19 2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}
