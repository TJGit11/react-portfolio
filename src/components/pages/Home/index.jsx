import React from "react";
import Aos from "aos";
// import image from "../../../images/profilePic.jpg/";

export default function Home() {
  return (
    <div
      className="flex justify-center min-h-screen bg-secondary"
      // style="background-image: url(/images/stock/photo-1507358522600-9f71e620c44e.jpg);"
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-accent">Hello there</h1>
          <p className="mb-5 text-accent">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Projects</button>
          <button className="btn btn-primary">Resume</button>
        </div>
      </div>
    </div>
  );
}
