import React from "react";
import "./MovieTrailer.scss";
export default function MovieTrailer({ link, setShowState, title }) {
  const closeTrailer = () => {
    const trailer = document.querySelector(".movieTrailer").style;
    // console.log({ trailer });
    trailer.transform = "scale(0.01)";
    setTimeout(() => {
      trailer.display = "none";
      setShowState(false);
    }, 200);
  };
  const transformLink = (link) => {
    if (link.includes("youtu.be")) {
      link = link.replace("youtu.be", "youtube.com");
    }
    const subLink = link.slice(0, link.lastIndexOf("/"));
    return link.includes("watch?v=")
      ? link.replace("watch?v=", "embed/")
      : link.replace(subLink, subLink + "/embed");
  };
  return (
    <div className="movieTrailer" onClick={closeTrailer}>
      <iframe
        style={{ width: "60vw", height: "40vw" }}
        src={transformLink(link)}
        title={title}
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <button onClick={closeTrailer} className="closeTrailerBtn">
        X
      </button>
    </div>
  );
}
