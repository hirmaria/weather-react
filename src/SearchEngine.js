import React from "react";

export default function SearchEngine() {
  return (
    <form className="search-engine row ms-3">
      <input
        type="text"
        placeholder="Enter a city"
        className="form-control w-50 col-auto mx-1 p-2 shadow-sm"
      />
      <input
        type="submit"
        value="Search"
        className="btn btn-primary col-auto mx-1 p-2 shadow-sm"
      />
      <button className="btn btn-success col-auto mx-1 p-2 shadow-sm">
        Current
      </button>
    </form>
  );
}
