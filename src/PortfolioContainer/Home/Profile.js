import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="profile-container">
      <p style={{ fontSize: "20px" }}> PROFILE</p>
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="https://www.facebook.com/" className="btn btn-primary">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com/" className="btn btn-primary">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/" className="btn btn-primary">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
