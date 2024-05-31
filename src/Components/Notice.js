import React from "react";
import "../css/notice.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { url } from "../config";

const Notice = ({
  notice,
  title,
  author,
  description,
  date,
  department,
  isAdmin,
  id,
  setRefresh,
  active,
  setActive,
}) => {
  const navigate = useNavigate();
  console.log("title: ", title);
  const handleDelete = async (id) => {
    try {
      const res = await axios
        .delete(`${url}notices/${id}`)
        .then(setRefresh((prev) => !prev));

      console.log(res);
    } catch (error) {
      console.log("error", error);
    }
  };
  //   const day = new Date();
  return (
    <div className="notice-outer-container">
      <div className="notice-author">{notice?.author}</div>
      <div
        className="notice-title"
        onClick={() => {
          navigate("/notice-detail", { state: { noticeData: notice } });
        }}
      >
        {notice?.title}
      </div>
      <div className="notice-date">{notice?.date?.substr(0, 10)}</div>
      <div className="notice-department">{notice?.department}</div>
      {isAdmin && (
        <div>
          <button>Edit</button>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Notice;
