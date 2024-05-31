import axios from "axios";
import React, { useState } from "react";
import { url } from "../config";
import { useNavigate } from "react-router-dom";

const AddNotice = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    author: "",
    department: "",
    tags: "",
    file: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      console.log("formdata: ", formData);
      formDataToSend.append("title", formData?.title);
      formDataToSend.append("description", formData?.description);
      formDataToSend.append("date", formData?.date);
      formDataToSend.append("author", formData?.author);
      formDataToSend.append("department", formData?.department);
      formDataToSend.append("tags", formData?.tags);
      formDataToSend.append("file", null);
      console.log("sending 2:", formDataToSend);
      const response = await axios.post(
        `${url}notices/add`,
        formData
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
      );
      alert("Notice added succesfully");
      navigate("/admin/home");
      console.log(response.data, formData);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="addnotice-container">
      <div className="heading-text">
        <h2>Post a Notice</h2>
      </div>
      <form className="addnotice-form" onSubmit={handleSubmit}>
        <label
          style={{
            width: "100%",
          }}
        >
          Title:
          <br />
          <input
            style={{
              width: "100%",
            }}
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          ></input>
        </label>
        <label>
          Description:
          <br />
          <textarea
            rows={4}
            cols={65}
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <div className="rows">
          <label>
            Date:
            <br />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            ></input>
          </label>
          <label>
            Author:
            <br />
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
            ></input>
          </label>
        </div>
        <div className="rows">
          <label>
            Department:
            <br />
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            ></input>
          </label>
          <br />
          <label>
            Tags:
            <br />
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              required
            ></input>
          </label>
        </div>
        <button type="submit">Post Notice</button>
      </form>
    </div>
  );
};

export default AddNotice;
