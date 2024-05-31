import React from "react";
import { useLocation } from "react-router-dom";
import SideBar from "../Components/SideBar";
import TopBar from "../Components/TopBar";

const NoticeDetails = ({ active, setActive }) => {
  const location = useLocation();
  const noticeData = location?.state?.noticeData;
  console.log(noticeData);
  return (
    <div>
      <div className="app-outer-container">
        {/* <SideBar active={active} setActive={setActive} /> */}
        <div className="right-container">
          <div class="user-container">
            <TopBar userData={location?.state?.userData} />
          </div>
          <div className="notice-detail-container">
            <div className="notice-detail-title">{noticeData.title}</div>
            <div className="notice-info">
              <div className="notice-date">
                {noticeData?.date?.substr(0, 10)}
              </div>
              <div className="notice-author">{noticeData.author}</div>
            </div>
            <div className="notice-details">{noticeData.description}</div>

            <div className="notice-tags notice-date">
              Tags: {noticeData.tags}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeDetails;
