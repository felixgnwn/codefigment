import React from "react";
import Topbar from "./Topbar";
import PostList from "./PostList";

function ContentArea() {
  return (
    <div className="w-8/12">
      <Topbar />
      <div className="bg-gray-100 p-8">
        <PostList />
      </div>
    </div>
  );
}

export default ContentArea;
