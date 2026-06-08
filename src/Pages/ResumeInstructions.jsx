import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { LuFiles } from "react-icons/lu";
import { IoMdDownload } from "react-icons/io";
import { Link } from "react-router-dom";

function ResumeInstructions() {
  return (
    <>
      <style>
        {`
        .instruction-page{
          min-height:85vh;
          background:#020617;
          color:white;
        }

        .instruction-title{
          color:#60a5fa;
          font-weight:700;
          margin-bottom:60px;
        }

        .instruction-card{
          background:rgba(15,23,42,0.9);
          border:1px solid rgba(255,255,255,0.08);
          border-radius:20px;
          color:white;
          transition:.3s;
          backdrop-filter:blur(10px);
        }

        .instruction-card:hover{
          transform:translateY(-10px);
          box-shadow:0 15px 30px rgba(59,130,246,.25);
        }

        .icon-box{
          font-size:60px;
          color:#3b82f6;
          margin-bottom:15px;
        }

        .step-badge{
          display:inline-block;
          margin-top:15px;
          padding:8px 20px;
          background:#3b82f6;
          border-radius:25px;
          font-weight:600;
        }

        .start-btn{
          background:#3b82f6;
          color:white;
          padding:12px 35px;
          border-radius:12px;
          text-decoration:none;
          font-size:18px;
          font-weight:600;
          transition:.3s;
          border:none;
        }

        .start-btn:hover{
          background:#2563eb;
          color:white;
          transform:translateY(-3px);
          box-shadow:0 10px 25px rgba(59,130,246,.35);
        }

        .subtitle{
          color:#cbd5e1;
          max-width:700px;
          margin:auto;
        }
        `}
      </style>

      <div className="container-fluid instruction-page py-5">

        <div className="text-center">
          <h1 className="instruction-title">
            Create a Job-Winning Resume in Minutes
          </h1>

          <p className="subtitle">
            Follow these simple steps to build a professional resume,
            download it instantly, and start applying for your dream job.
          </p>
        </div>

        <Row className="mt-5 justify-content-center g-4">

          {/* Step 1 */}
          <Col sm={12} md={5} lg={4}>
            <Card
              className="instruction-card text-center p-4 shadow-lg"
              style={{ minHeight: "320px" }}
            >
              <Card.Body>
                <LuFiles className="icon-box" />

                <h3 className="mb-3">
                  Add Your Information
                </h3>

                <p>
                  Fill in your personal details, education,
                  experience, projects, and skills using
                  our guided resume builder.
                </p>

                <div className="step-badge">
                  Step 1
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Step 2 */}
          <Col sm={12} md={5} lg={4}>
            <Card
              className="instruction-card text-center p-4 shadow-lg"
              style={{ minHeight: "320px" }}
            >
              <Card.Body>
                <IoMdDownload className="icon-box" />

                <h3 className="mb-3">
                  Download Your Resume
                </h3>

                <p>
                  Generate a polished PDF resume and
                  start applying confidently to jobs
                  that match your skills.
                </p>

                <div className="step-badge">
                  Step 2
                </div>
              </Card.Body>
            </Card>
          </Col>

        </Row>

        <div className="text-center mt-5">
          <Link to="/form" className="start-btn">
            Start Building →
          </Link>
        </div>

      </div>
    </>
  );
}

export default ResumeInstructions;