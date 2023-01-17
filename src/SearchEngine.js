import React from "react";

export default function SearchEngine() {
  return (
    <form className="search-engine row ms-3">
      <input
        type="text"
        placeholder="Enter a city"
        className="form-control w-50 col-auto mx-1 p-2"
      />
      <input
        type="submit"
        value="Search"
        className="btn btn-primary col-auto mx-1 p-2"
      />
      <button className="btn btn-success col-auto mx-1 p-2">Current</button>
    </form>
  );
}
