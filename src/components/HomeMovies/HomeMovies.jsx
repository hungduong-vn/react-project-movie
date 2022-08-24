import React from "react";

export default function HomeMovies() {
  const movieList = [0, 1, 2, 3, 5];
  const renderList = () =>
    movieList.map((ele) => (
      <div className="col-xxl-3 col-lg-4 col-sm-6 col-12" key={ele}>
        <div className="rounded-md shadow-md bg-gray-50 text-gray-800 my-3">
          <img
            src="https://source.unsplash.com/random/300x300/?2"
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">
                Donec lectus leo
              </h2>
              <p className="text-gray-800">
                Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                eget.
              </p>
            </div>
            <button
              type="button"
              className="btn btn-outline-dark w-1/3"
            >
              Book
            </button>
          </div>
        </div>
      </div>
    ));
  return (
    <div className="py-5 container">
      <div className="row">{renderList()}</div>
    </div>
  );
}
