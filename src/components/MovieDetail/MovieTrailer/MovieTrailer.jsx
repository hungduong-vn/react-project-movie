import React from "react";
import "./MovieTrailer.scss";
export default function MovieTrailer({ link, setShowState }) {
  const closeTrailer = () => {
    const trailer = document.querySelector(".movieTrailer").style;
    console.log({ trailer });
    trailer.transform = "scale(0.01)";
    setTimeout(() => {
      trailer.display = "none";
      setShowState(false)
    }, 200);
  };
  return (
    <div className="movieTrailer" onClick={closeTrailer}>
      <iframe
        style={{ width: "60vw", height: "40vw" }}
        src={link}
        title="CONAN MOVIE 21 | Bản Tình Ca Màu Đỏ Thẫm - Official Main Trailer 90s [08.09.2017]"
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
