import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import ResumeImage1 from "../assets/resume-image.png";
import ResumeImage2 from "../assets/office-bg.jpg";

function Landingpage() {
  return (
    <>
      <style>
        {`
        .hero-section{
          background: linear-gradient(rgba(10,10,10,0.75), rgba(10,10,10,0.75)),
          url('https://www.bbvapivot.com/wp-content/uploads/2021/05/portada-reporting.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          min-height: 90vh;
        }

        .glass-card{
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.15);
          color: white;
        }

        .dark-section{
          background: #0f172a;
          color: #f8fafc;
        }

        .feature-card{
          background: #1e293b;
          padding: 20px;
          border-radius: 15px;
          margin-bottom: 20px;
          transition: 0.3s;
          border: 1px solid #334155;
        }

        .feature-card:hover{
          transform: translateY(-5px);
          box-shadow: 0px 10px 25px rgba(59,130,246,0.25);
        }

        .cta-btn{
          background: #3b82f6;
          border: none;
          color: white;
          padding: 10px 25px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
        }

        .cta-btn:hover{
          background: #2563eb;
          color: white;
        }

        .parallax-section{
          background: linear-gradient(rgba(0,0,0,.75), rgba(0,0,0,.75)),
          url(${ResumeImage2});
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          min-height: 70vh;
        }

        .testimony-section{
          background: #020617;
          color: white;
        }

        .section-title{
          color: #60a5fa;
          font-weight: bold;
        }

        .highlight{
          color: #3b82f6;
        }

        img{
          border-radius: 15px;
        }
        `}
      </style>

      {/* Hero Section */}
      <div className="container-fluid hero-section d-flex justify-content-center align-items-center">
        <div className="glass-card shadow-lg rounded p-5 text-center w-50">
          <h1 className="fw-bold">
            Build Your <span className="highlight">Resume</span>
          </h1>
          <p className="lead my-3">
            Your Skills, Your Story, Your Next Job — All in One Place.
          </p>

          <Link to={"/instructions"} className="cta-btn">
            Create Resume
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="container-fluid dark-section py-5 px-5">
        <h2 className="text-center section-title mb-5">
          Powerful Career Tools
        </h2>

        <Row className="align-items-center">
          <Col sm={12} md={6}>
            <div className="feature-card">
              <h4>📄 Resume Builder</h4>
              <p>
                Create professional ATS-friendly resumes with customizable
                templates and modern designs.
              </p>
            </div>

            <div className="feature-card">
              <h4>✉️ Cover Letters</h4>
              <p>
                Generate compelling cover letters tailored to specific job
                opportunities.
              </p>
            </div>

            <div className="feature-card">
              <h4>💼 Job Search</h4>
              <p>
                Discover relevant opportunities and track applications from a
                single dashboard.
              </p>
            </div>

            <div className="feature-card">
              <h4>📊 Application Tracking</h4>
              <p>
                Organize interviews, offers, and application statuses
                efficiently.
              </p>
            </div>
          </Col>

          <Col
            sm={12}
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <img
              src={ResumeImage1}
              alt="Resume"
              className="img-fluid shadow-lg"
              style={{ maxWidth: "85%" }}
            />
          </Col>
        </Row>
      </div>

      {/* Parallax Banner */}
      <div className="container-fluid parallax-section d-flex justify-content-center align-items-center">
        <div className="text-center text-light">
          <h1 className="fw-bold">Land Your Dream Job Faster</h1>
          <p className="lead">
            Join thousands of professionals building winning resumes.
          </p>
        </div>
      </div>

      {/* Testimonial */}
      <div className="container-fluid testimony-section py-5 px-5">
        <h2 className="text-center section-title mb-5">
          Trusted by Professionals Worldwide
        </h2>

        <Row className="align-items-center">
          <Col sm={12} md={6}>
            <h3 className="mb-4">
              Accelerate Your Career With Confidence
              
            </h3>

            <p>
              Our platform helps job seekers create polished resumes, write
              impactful cover letters, and manage applications with ease.
            </p>

            <p>
              Thousands of candidates have successfully secured interviews and
              job offers using our modern career-building tools.
            </p>

            <p>
              Whether you're a student, fresher, or experienced professional,
              we provide everything needed to stand out in today's competitive
              job market.
            </p>
          </Col>

          <Col
            sm={12}
            md={6}
            className="d-flex justify-content-center"
          >
            <img
              src="https://st2.depositphotos.com/1017986/7171/i/450/depositphotos_71716095-stock-photo-group-of-smiling-businessmen-showing.jpg"
              alt="Professionals"
              className="img-fluid shadow-lg"
              style={{ maxWidth: "85%" }}
            />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Landingpage;