import React, { useEffect, useRef, useState } from "react";
import { FaEdit } from "react-icons/fa";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import { getResumeApi, editResumeApi } from "../services/allApis";
import Swal from "sweetalert2";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "900px",
  maxHeight: "90vh",
  overflowY: "auto",
  bgcolor: "#0f172a",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "20px",
  boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
  p: 4,
  color: "white",
};

const inputStyle = {
  width: "100%",
  mb: 2,
  "& .MuiInputLabel-root": {
    color: "#94a3b8",
  },
  "& .MuiInputBase-input": {
    color: "#ffffff",
  },
  "& .MuiInput-underline:before": {
    borderBottom: "1px solid #334155",
  },
  "& .MuiInput-underline:hover:before": {
    borderBottom: "1px solid #3b82f6",
  },
  "& .MuiInput-underline:after": {
    borderBottom: "2px solid #3b82f6",
  },
};

function Edit({ resumeId, setEditData }) {
  const [open, setOpen] = useState(false);

  const [userInputs, setUserInputs] = useState({
    personaldata: {
      fullname: "",
      jobtitle: "",
      location: "",
    },
    contactdata: {
      email: "",
      phone: "",
      github: "",
      linkedin: "",
      portfolio: "",
    },
    educationaldetails: {
      coursename: "",
      collegename: "",
      university: "",
      passoutyear: "",
    },
    professionaldata: {
      jobtype: "",
      companyname: "",
      companylocation: "",
      duration: "",
    },
    skills: [],
    summary: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const skillInput = useRef();

  useEffect(() => {
    handleEdit();
  }, []);

  const handleEdit = async () => {
    try {
      const res = await getResumeApi(resumeId);

      if (res.status === 200) {
        setUserInputs({ ...res.data });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const addSkills = (inputVal) => {
    if (inputVal) {
      if (userInputs.skills.includes(inputVal)) {
        Swal.fire({
          title: "Warning",
          text: "Skill already added",
          icon: "warning",
        });
      } else {
        setUserInputs({
          ...userInputs,
          skills: [...userInputs.skills, inputVal],
        });

        skillInput.current.value = "";
      }
    }
  };

  const removeSkill = (skill) => {
    setUserInputs({
      ...userInputs,
      skills: userInputs.skills.filter((item) => item !== skill),
    });
  };

  const handleUpdate = async () => {
    try {
      const res = await editResumeApi(resumeId, userInputs);

      if (res.status === 200) {
        handleClose();
        setEditData(res.data);

        Swal.fire({
          title: "Success",
          text: "Resume Updated Successfully",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          title: "Warning",
          text: "Resume Updation Failed",
          icon: "warning",
          confirmButtonText: "OK",
        });
      }
    } catch (err) {
      console.log(err);

      Swal.fire({
        title: "Error",
        text: "Something went wrong",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const suggestedskills = [
    "React.js",
    "Angular",
    "Mongo DB",
    "Node.js",
    "Express.js",
    "JavaScript",
    "Python",
    "Django",
    "HTML",
    "CSS",
    "Bootstrap",
    "Github",
  ];

  const sectionTitle = {
    color: "#3b82f6",
    marginTop: "30px",
    marginBottom: "20px",
    fontWeight: "600",
    borderBottom: "1px solid #1e293b",
    paddingBottom: "10px",
  };

  return (
    <>
      <button
        className="btn"
        onClick={handleOpen}
        style={{
          background: "#0f172a",
          borderRadius: "12px",
          padding: "10px",
        }}
      >
        <FaEdit
          style={{
            fontSize: "22px",
            color: "#3b82f6",
          }}
        />
      </button>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="text-center mb-4">
            <h2
              style={{
                color: "#3b82f6",
                fontWeight: "700",
              }}
            >
              Edit Resume
            </h2>

            <p
              style={{
                color: "#94a3b8",
              }}
            >
              Update your professional information
            </p>
          </div>

          <h3 style={sectionTitle}>Personal Details</h3>

          <TextField
            label="Full Name"
            variant="standard"
            sx={inputStyle}
            value={userInputs?.personaldata?.fullname}
            onChange={(e) =>
              setUserInputs({
                ...userInputs,
                personaldata: {
                  ...userInputs.personaldata,
                  fullname: e.target.value,
                },
              })
            }
          />

          <TextField
            label="Job Title"
            variant="standard"
            sx={inputStyle}
            value={userInputs?.personaldata?.jobtitle}
            onChange={(e) =>
              setUserInputs({
                ...userInputs,
                personaldata: {
                  ...userInputs.personaldata,
                  jobtitle: e.target.value,
                },
              })
            }
          />

          <TextField
            label="Location"
            variant="standard"
            sx={inputStyle}
            value={userInputs?.personaldata?.location}
            onChange={(e) =>
              setUserInputs({
                ...userInputs,
                personaldata: {
                  ...userInputs.personaldata,
                  location: e.target.value,
                },
              })
            }
          />

          <h3 style={sectionTitle}>Contact Details</h3>

          <TextField
            label="Email"
            variant="standard"
            sx={inputStyle}
            value={userInputs?.contactdata?.email}
            onChange={(e) =>
              setUserInputs({
                ...userInputs,
                contactdata: {
                  ...userInputs.contactdata,
                  email: e.target.value,
                },
              })
            }
          />

          <TextField
            label="Phone Number"
            variant="standard"
            sx={inputStyle}
            value={userInputs?.contactdata?.phone}
            onChange={(e) =>
              setUserInputs({
                ...userInputs,
                contactdata: {
                  ...userInputs.contactdata,
                  phone: e.target.value,
                },
              })
            }
          />

          <TextField
            label="GitHub Profile Link"
            variant="standard"
            sx={inputStyle}
            value={userInputs?.contactdata?.github}
            onChange={(e) =>
              setUserInputs({
                ...userInputs,
                contactdata: {
                  ...userInputs.contactdata,
                  github: e.target.value,
                },
              })
            }
          />

          <TextField
            label="LinkedIn Profile Link"
            variant="standard"
            sx={inputStyle}
            value={userInputs?.contactdata?.linkedin}
            onChange={(e) =>
              setUserInputs({
                ...userInputs,
                contactdata: {
                  ...userInputs.contactdata,
                  linkedin: e.target.value,
                },
              })
            }
          />

          <TextField
            label="Portfolio Link"
            variant="standard"
            sx={inputStyle}
            value={userInputs?.contactdata?.portfolio}
            onChange={(e) =>
              setUserInputs({
                ...userInputs,
                contactdata: {
                  ...userInputs.contactdata,
                  portfolio: e.target.value,
                },
              })
            }
          />

          <h3 style={sectionTitle}>Educational Details</h3>

          <TextField
            label="Course Name"
            variant="standard"
            sx={inputStyle}
            value={userInputs?.educationaldetails?.coursename}
            onChange={(e) =>
              setUserInputs({
                ...userInputs,
                educationaldetails: {
                  ...userInputs.educationaldetails,
                  coursename: e.target.value,
                },
              })
            }
          />

          <TextField
            label="College Name"
            variant="standard"
            sx={inputStyle}
            value={userInputs?.educationaldetails?.collegename}
            onChange={(e) =>
              setUserInputs({
                ...userInputs,
                educationaldetails: {
                  ...userInputs.educationaldetails,
                  collegename: e.target.value,
                },
              })
            }
          />

          <TextField
            label="University"
            variant="standard"
            sx={inputStyle}
            value={userInputs?.educationaldetails?.university}
            onChange={(e) =>
              setUserInputs({
                ...userInputs,
                educationaldetails: {
                  ...userInputs.educationaldetails,
                  university: e.target.value,
                },
              })
            }
          />

          <TextField
            label="Passout Year"
            variant="standard"
            sx={inputStyle}
            value={userInputs?.educationaldetails?.passoutyear}
            onChange={(e) =>
              setUserInputs({
                ...userInputs,
                educationaldetails: {
                  ...userInputs.educationaldetails,
                  passoutyear: e.target.value,
                },
              })
            }
          />

          <h3 style={sectionTitle}>Professional Details</h3>

          <TextField
            label="Job / Internship"
            variant="standard"
            sx={inputStyle}
            value={userInputs?.professionaldata?.jobtype}
            onChange={(e) =>
              setUserInputs({
                ...userInputs,
                professionaldata: {
                  ...userInputs.professionaldata,
                  jobtype: e.target.value,
                },
              })
            }
          />

          <TextField
            label="Company Name"
            variant="standard"
            sx={inputStyle}
            value={userInputs?.professionaldata?.companyname}
            onChange={(e) =>
              setUserInputs({
                ...userInputs,
                professionaldata: {
                  ...userInputs.professionaldata,
                  companyname: e.target.value,
                },
              })
            }
          />

          <TextField
            label="Company Location"
            variant="standard"
            sx={inputStyle}
            value={userInputs?.professionaldata?.companylocation}
            onChange={(e) =>
              setUserInputs({
                ...userInputs,
                professionaldata: {
                  ...userInputs.professionaldata,
                  companylocation: e.target.value,
                },
              })
            }
          />

          <TextField
            label="Duration"
            variant="standard"
            sx={inputStyle}
            value={userInputs?.professionaldata?.duration}
            onChange={(e) =>
              setUserInputs({
                ...userInputs,
                professionaldata: {
                  ...userInputs.professionaldata,
                  duration: e.target.value,
                },
              })
            }
          />

          <h3 style={sectionTitle}>Skills</h3>

          <div className="d-flex flex-wrap gap-2 align-items-center">
            <input
              type="text"
              ref={skillInput}
              placeholder="Add a skill"
              className="form-control"
              style={{
                maxWidth: "400px",
                background: "#1e293b",
                border: "1px solid #334155",
                color: "white",
              }}
            />

            <Button
              variant="contained"
              onClick={() => addSkills(skillInput.current.value)}
            >
              Add Skill
            </Button>
          </div>

          <div className="d-flex flex-wrap gap-2 mt-3">
            {suggestedskills.map((skill) => (
              <button
                key={skill}
                className="btn btn-sm"
                onClick={() => addSkills(skill)}
                style={{
                  background: "#1e293b",
                  color: "#cbd5e1",
                  border: "1px solid #334155",
                }}
              >
                {skill}
              </button>
            ))}
          </div>

          <div className="d-flex flex-wrap gap-2 mt-4">
            {userInputs?.skills?.map((item) => (
              <span
                key={item}
                style={{
                  background: "#2563eb",
                  color: "white",
                  padding: "8px 14px",
                  borderRadius: "30px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                {item}

                <button
                  onClick={() => removeSkill(item)}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "white",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  ✕
                </button>
              </span>
            ))}
          </div>

          <h3 style={sectionTitle}>Professional Summary</h3>

          <TextField
            sx={inputStyle}
            label="Write a brief summary of yourself"
            multiline
            rows={5}
            variant="standard"
            value={userInputs?.summary}
            onChange={(e) =>
              setUserInputs({
                ...userInputs,
                summary: e.target.value,
              })
            }
          />

          <div className="text-center mt-4">
            <button
              onClick={handleUpdate}
              style={{
                background: "#3b82f6",
                color: "white",
                border: "none",
                padding: "12px 40px",
                borderRadius: "12px",
                fontWeight: "600",
                fontSize: "16px",
              }}
            >
              Update Resume
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default Edit;

