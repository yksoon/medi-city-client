import { Route, Routes } from "react-router-dom";

import { routerPath } from "webPath";

import NotFoundPage from "NotFoundPage";
import { Suspense, lazy } from "react";
import { Backdrop, CircularProgress } from "@mui/material";

const Router = () => {
    // 레이지 로딩 추가
    const Main = lazy(() => import("components/main/Main"));
    const MyPageMain = lazy(() =>
        import("components/myPage/myPage/MyPageMain")
    );
    const SignUpMain = lazy(() => import("components/signUp/SignUpMain"));
    const SignUpOk = lazy(() => import("components/signUp/SignUpOk"));
    const TermsMain = lazy(() => import("components/termPrivacy/TermMain"));
    const PrivacyMain = lazy(() =>
        import("components/termPrivacy/PrivacyMain")
    );
    const FindIdMain = lazy(() =>
        import("components/findAccount/findID/FindIDMain")
    );
    const FindPWMain = lazy(() =>
        import("components/findAccount/findPW/FindPWMain")
    );

    return (
        <Suspense
            fallback={
                <Backdrop
                    sx={{
                        color: "#fff",
                        zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                    open={true}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            }
        >
            <Routes>
                {/* /link를 입력하면 LinkPage 오픈 */}

                {/* 메인 */}
                <Route path={routerPath.main_url} element={<Main />} />

                {/* 회원가임 */}
                <Route path={routerPath.signup_url} element={<SignUpMain />} />
                <Route path={routerPath.signup_ok_url} element={<SignUpOk />} />
                <Route path={routerPath.terms_url} element={<TermsMain />} />
                <Route
                    path={routerPath.privacy_url}
                    element={<PrivacyMain />}
                />

                {/* 아이디 찾기 */}
                <Route path={routerPath.findId_url} element={<FindIdMain />} />

                {/* 비번 찾기 */}
                <Route path={routerPath.findPw_url} element={<FindPWMain />} />

                {/* 마이페이지 */}
                <Route path={routerPath.myPage_url} element={<MyPageMain />} />

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    );
};

export default Router;
