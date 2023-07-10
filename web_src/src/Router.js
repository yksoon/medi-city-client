import * as React from "react";
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect,
    Routes,
} from "react-router-dom";

import { apiPath, routerPath } from "webPath";

import NotFoundPage from "NotFoundPage";
import Main from "components/Main/Main";
import MyPageMain from "components/MyPage/MyPage/MyPageMain";
import SignUpMain from "components/SignUp/SignUpMain";
import SignUpOk from "components/SignUp/SignUpOk";
import TermsMain from "components/TermPrivacy/TermMain";
import PrivacyMain from "components/TermPrivacy/PrivacyMain";
import FindIdMain from "components/FindAccount/FindID/FindIDMain";
import FindPWMain from "components/FindAccount/FindPW/FindPWMain";
import MobileTest from "components/MobileTest";
import MobileTestSuccess from "components/MobileTestSuccess";

const Router = () => {
    return (
        <Routes>
            {/* /link를 입력하면 LinkPage 오픈 */}
            <Route path={routerPath.main_url} element={<Main />} />
            <Route path={routerPath.myPage_url} element={<MyPageMain />} />

            {/* 회원가임 */}
            <Route path={routerPath.signup_url} element={<SignUpMain />} />
            <Route path={routerPath.signup_ok_url} element={<SignUpOk />} />
            <Route path={routerPath.terms_url} element={<TermsMain />} />
            <Route path={routerPath.privacy_url} element={<PrivacyMain />} />

            {/* 아이디 찾기 */}
            <Route path={routerPath.findId_url} element={<FindIdMain />} />

            {/* 비번 찾기 */}
            <Route path={routerPath.findPw_url} element={<FindPWMain />} />

            {/* 휴대폰인증 테스트 */}
            <Route path={"/mobile_test"} element={<MobileTest />} />

            {/* 휴대폰인증 테스트 */}
            <Route path={"/cert/result"} element={<MobileTestSuccess />} />

            <Route path="*" element={NotFoundPage} />
        </Routes>
    );
};

export default Router;
