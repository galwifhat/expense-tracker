import React from "react";
import Form from "./Form";
import Search from "./Search";
import Table from "./Table";

const Content = () => {
  return (
    <main>
      <div className="form">
        <Form />
      </div>
      <div className="search-button">
        <Search />
        <Table />
      </div>
    </main>
  );
};

export default Content;
