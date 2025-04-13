import React from "react";
import Form from "./Form";
import Search from "./Search";

const Content = () => {
  return (
    <main>
      <div className="form">
        <Form />
      </div>
      <div className= "search-button">
        <Search />
      </div>
    </main>
  );
};

export default Content;
