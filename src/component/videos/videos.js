import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

import "./videos.css";
const Videos = () => {
    return (
      <div id="videos-container">
        <span className="videos-title">Videos <FontAwesomeIcon icon={faVideo}/></span>
      <section id="videos-section">
        <div className="video">
        <iframe className="iframe" width="560" height="315" src="https://www.youtube.com/embed/Nnf6teWNWwU?si=oe_bo7d1ecPG6_mY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <span className="video-text">Who I am</span>
        </div>

        <div className="video">
        <iframe className="iframe" width="560" height="315" src="https://www.youtube.com/embed/vtmYXwO0IuE?si=oNebZgFpwoMQYgRI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <span className="video-text">About my clinic</span>
        </div>

          <div className="video">
          <iframe className="iframe" width="560" height="315" src="https://www.youtube.com/embed/lmzbdIAwBZ0?si=nptPnuaKv-nwmekg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <span className="video-text">Some advices</span>
        </div>
      </section>
      </div>

    );
  };

export default Videos;