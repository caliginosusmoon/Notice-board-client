import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import axios from "axios";
import "../css/Homepage.css";
import home from "../assets/icons/home.png";
import AllNotices from "../Components/AllNotices";
// import ImpNotices from "../Components/ImpNotices";
import Department from "../Components/Department";
import AddNotice from "../Components/AddNotice";
import searchIcon from "../assets/icons/ic_baseline-search.svg";
import { url } from "../config";
import TopBar from "../Components/TopBar";
import SideBar from "../Components/SideBar";

const Homepage = () => {
  const [active, setActive] = useState("all");
  const [notices, setNotices] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchedForm, setSearchedForm] = useState([]);
  const [searchTyoe, setSearchType] = useState("title");

  const handleSearch = (searchQuery) => {
    // e.preventDefault();
    setIsSearching(true);
    let result;
    if (searchTyoe === "title") {
      result = notices.filter((notice) =>
        notice?.title?.toLowerCase().includes(searchQuery?.toLowerCase())
      );
    } else {
      result = notices.filter(
        (notice) => notice?.date?.toString().substr(0, 10) === searchQuery
      );
      console.log("date is", notices[0].date, searchQuery);
    }
    setSearchedForm(result);
    console.log("search result", result);
  };

  const handleDropdown = (e) => {
    e.preventDefault();
    setSearchType(e.target.value);
    console.log("selected", e.target.value, searchTyoe);
    setSearchQuery("");
  };

  const location = useLocation();
  const userData = location?.state?.userData;
  console.log(userData);
  console.log("locationData", location);
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get(`${url}notices/all`);
        setNotices(() => response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchNotices();
    if (searchQuery.length === 0) {
      setIsSearching(false);
    }
    // console.log(notices)
  }, [searchQuery]);
  return (
    <div className="app-outer-container">
      <div>
        <SideBar active={active} setActive={setActive} />
      </div>

      <div className="right-container">
        <div class="user-container">
          <TopBar userData={location?.state?.userData} />

          {/* <AllNotices/> */}

          <div className="notice-box">
            <div className="date-search-filter">
              <div className="date-filter">
                {" "}
                <select onChange={handleDropdown}>
                  <option value="title">Title</option>
                  <option value="date">Date</option>
                </select>
              </div>
              <div className="search-filter">
                <form
                  className="search-filter"
                  //  onSubmit={(e) => handleSearch(searchQuery, e)} if want search on press enter
                >
                  {/* <button className="search-button" type="submit"> */}
                  <img
                    src={searchIcon}
                    height={"20px"}
                    alt="search"
                    onClick={() => handleSearch()}
                  />
                  {/* </button> */}
                  <input
                    type={searchTyoe === "title" ? "text" : "date"}
                    placeholder="Search by Title"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      handleSearch(e.target.value); //comment if search on enter is implemented
                    }}
                  />
                </form>
              </div>
            </div>
            {active === "all" && (
              <AllNotices
                notices={isSearching ? searchedForm : notices}
                active={active}
                setActive={setActive}
              />
            )}{" "}
          </div>
          {/* {active === "imp" && <ImpNotices />} */}
          {active === "dept" && <Department notices={notices} />}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
