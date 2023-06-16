import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div>
        <h1>404 NotFound</h1>
      </div>
      <div>
        <button>
          <Link to="/">메인화면으로</Link>
        </button>
      </div>
    </>
  );
}

export default NotFound;
