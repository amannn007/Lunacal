import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("about");

  const [images, setImages] = useState([]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  return (
    <div className="app-container">
      <div className="tab-box">
        <div className="custom-tabs">
          <div
            className={`custom-tab ${activeTab === "about" ? "active-tab" : ""}`}
            onClick={() => handleTabClick("about")}
          >
            About Me
          </div>
          <div
            className={`custom-tab ${activeTab === "experience" ? "active-tab" : ""}`}
            onClick={() => handleTabClick("experience")}
          >
            Experiences
          </div>
          <div
            className={`custom-tab ${activeTab === "recommend" ? "active-tab" : ""}`}
            onClick={() => handleTabClick("recommend")}
          >
            Recommended
          </div>
        </div>
      </div>

      <div className="content-box">
        {activeTab === "about" && (
          <div className="text-content">
            Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
            I was born and raised in Albany, NY, and have been living in Santa Carla with my wife Tiffany and my 4-year-old twin daughters—Emma and Ella.
          </div>
        )}
        {activeTab === "experience" && <div className="text-content">Experience content goes here.</div>}
        {activeTab === "recommend" && <div className="text-content">Recommended content goes here.</div>}
      </div>

      <div className="gallery-box">
        <div className="gallery-title">Gallery</div>
        <div className="gallery-content">
          <div className="image-gallery-container">
            {images.map((imgSrc, idx) => (
              <img key={idx} src={imgSrc} alt={`Gallery ${idx}`} className="gallery-image" />
            ))}
          </div>
          <div className="add-image-container">
            <label htmlFor="image-upload" className="add-image-button upload-label">
              + Add Image
            </label>
            <input
              id="image-upload"
              type="file"
              multiple
              className="upload-input"
              onChange={handleImageUpload}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
