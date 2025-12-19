import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import aboutimg from "../assets/img/about-dashboard.webp";
import firstcard from "../assets/img/school.png";

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
          <div className="stickycard cardone">1</div>
          <div className="stickycard cardtwo">2</div>
          <div className="stickycard cardthree">3</div>
          <div className="stickycard cardfour">4</div>
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
    </div>
  );
}
