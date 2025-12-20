import footerlogo from "../assets/img/logo-skyvite.png";

export default function Footer() {
  return (
    <footer>
      <div className="container-fluid footer-container py-4 bg-light">
        <div className="row">
        <div className="col-md-4 mt-2">
          <img src={footerlogo} alt="SkyVite Logo" style={{ width: '150px', marginBottom: '10px' }} />
          <p>
            Skyvite is an AI-powered student management software designed to simplify academic operations, smart automation, and a completely paperless workflow.
          </p>
          <div className="d-flex">

          </div>
        </div>
        <div className="col-md-2 mt-2">
          <h5>COMPANY</h5>
          <ul>
            <li><a>About Us</a></li>
            <li><a>Contact</a></li>
            <li><a>Careers</a></li>
            <li><a>Partner</a></li>
          </ul>
        </div>
        <div className="col-md-2 mt-2">
          <h5>PLATFORM</h5>
          <ul>
            <li><a>Features</a></li>
            <li><a>Student Info</a></li>
            <li><a>Fee Mgmt</a></li>
            <li><a>Mobile App</a></li>
            <li><a>Integrations</a></li>
          </ul>
        </div>
        <div className="col-md-2 mt-2">
          <h5>RESOURCES</h5>
          <ul>
            <li><a>What's New</a></li>
            <li><a>Blog</a></li>
            <li><a>Case Studies</a></li>
            <li><a>Help</a></li>
            <li><a>Video Tutorials</a></li>
          </ul>
        </div>
        <div className="col-md-2 mt-2">
          <h5>LEGAL</h5>
          <ul>
            <li><a>Privary Policy</a></li>
            <li><a>Terms of Service</a></li>
            <li><a>Security</a></li>
            <li><a>Cookie Policy</a></li>
          </ul>
        </div>
     
        </div>
        
      </div>
      {/* <p className="mb-0 text-center mt-2 mb-2 w-100">
          © {new Date().getFullYear()} Skyvite. All rights reserved.
        </p> */}
    </footer>
  );
}
