import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { IoMdArrowBack } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { fetchHistoryApi, deleteHistoryApi } from "../services/allApis";

function History() {
  const [historyData, setHistoryData] = useState([]);
  const [deleteStatus, setDeleteStatus] = useState("");

  useEffect(() => {
    getData();
  }, [deleteStatus]);

  const getData = async () => {
    try {
      const res = await fetchHistoryApi();
      setHistoryData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteData = async (id) => {
    try {
      await deleteHistoryApi(id);
      setDeleteStatus(id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <style>
        {`
        .history-page{
          min-height:100vh;
          background:#020617;
          color:white;
        }

        .history-title{
          color:#60a5fa;
          font-weight:700;
        }

        .back-btn{
          color:white;
          border:1px solid #3b82f6;
          border-radius:10px;
          padding:8px 18px;
          text-decoration:none;
          transition:.3s;
        }

        .back-btn:hover{
          background:#3b82f6;
          color:white;
        }

        .history-card{
          background:#0f172a;
          border:1px solid rgba(255,255,255,0.08);
          border-radius:18px;
          overflow:hidden;
          transition:.3s;
        }

        .history-card:hover{
          transform:translateY(-6px);
          box-shadow:0 10px 30px rgba(59,130,246,.25);
        }

        .history-image{
          width:100%;
          height:320px;
          object-fit:cover;
        }

        .delete-btn{
          background:none;
          border:none;
          color:#ef4444;
          font-size:28px;
          transition:.3s;
        }

        .delete-btn:hover{
          transform:scale(1.15);
        }

        .history-date{
          color:#cbd5e1;
          font-size:14px;
        }

        .empty-history{
          min-height:60vh;
          display:flex;
          justify-content:center;
          align-items:center;
          color:#ef4444;
        }
        `}
      </style>

      <div className="container-fluid history-page p-4">

        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h2 className="history-title">
            Resume Download History
          </h2>

          <Link className="back-btn" to={"/instructions"}>
            <IoMdArrowBack className="me-2" />
            Back
          </Link>
        </div>

        {/* History Cards */}
        {historyData.length > 0 ? (
          <div className="row g-4">
            {historyData.map((item) => (
              <div
                className="col-sm-12 col-md-6 col-lg-4"
                key={item.id}
              >
                <Box className="history-card shadow-lg">

                  <img
                    src={item?.imgUrl}
                    alt="Resume"
                    className="history-image"
                  />

                  <div className="p-3">
                    <div className="d-flex justify-content-between align-items-center">

                      <div>
                        <h6 className="mb-1">
                          Downloaded On
                        </h6>

                        <span className="history-date">
                          {item?.timestamp}
                        </span>
                      </div>

                      <button
                        className="delete-btn"
                        onClick={() => handleDeleteData(item.id)}
                      >
                        <MdDelete />
                      </button>

                    </div>
                  </div>

                </Box>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-history">
            <h2>No Download History Found</h2>
          </div>
        )}
      </div>
    </>
  );
}

export default History;