import React from "react";
import { Link } from "react-router-dom";

function MyPageMain() {
    return (
        <>
            <></>
            <div>
                <h1>마이페이지</h1>
            </div>
            <div>
                <button>
                    <Link to="/">메인화면으로</Link>
                </button>
            </div>
        </>
    );
}

export default MyPageMain;
