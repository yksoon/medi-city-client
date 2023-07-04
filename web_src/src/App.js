import { Route, Routes } from "react-router";
import { useEffect } from "react";

import { apiPath, routerPath } from "webPath";
import { RestServer } from "common/js/Rest";

import NotFoundPage from "NotFoundPage";
import Main from "components/Main/Main";
import MyPageMain from "components/MyPage/MyPage/MyPageMain";
import SignUpMain from "components/SignUp/SignUpMain";
import SignUpOk from "components/SignUp/SignUpOk";
import TermsMain from "components/TermPrivacy/TermMain";
import PrivacyMain from "components/TermPrivacy/PrivacyMain";
import FindIdMain from "components/FindAccount/FindID/FindIDMain";
import FindPWMain from "components/FindAccount/FindPW/FindPWMain";

function App() {
    useEffect(() => {
        getResultCode();
        getCodes();
        getCountryBank();
        setInterval(getResultCode, 3600000);
        setInterval(getCodes, 3600000);
    }, []);

    // 새로고침 막기 변수
    const preventClose = (e) => {
        e.preventDefault();
        e.returnValue = ""; // chrome에서는 설정이 필요해서 넣은 코드
    };

    // 브라우저에 렌더링 시 한 번만 실행하는 코드
    useEffect(() => {
        (() => {
            window.addEventListener("beforeunload", preventClose);
        })();

        return () => {
            window.removeEventListener("beforeunload", preventClose);
        };
    }, []);

    // result code
    const getResultCode = () => {
        RestServer("get", apiPath.api_result, {})
            .then((response) => {
                console.log("result_code", response);

                localStorage.removeItem("result_code");
                localStorage.setItem(
                    "result_code",
                    JSON.stringify(response.data.result_info)
                );
            })
            .catch((error) => {
                // 오류발생시 실행
                console.log(error);
            });
    };

    // codes
    const getCodes = () => {
        RestServer("post", apiPath.api_codes, {
            code_types: [],
            exclude_code_types: ["COUNTRY_TYPE", "BANK_TYPE"],
        })
            .then((response) => {
                console.log("codes", response);

                localStorage.removeItem("codes");
                localStorage.setItem(
                    "codes",
                    JSON.stringify(response.data.result_info)
                );
            })
            .catch((error) => {
                // 오류발생시 실행
                console.log(error);
            });
    };

    // codes
    const getCountryBank = () => {
        RestServer("post", apiPath.api_codes, {
            code_types: ["COUNTRY_TYPE", "BANK_TYPE"],
            exclude_code_types: [],
        })
            .then((response) => {
                console.log("codesCountryBank", response);

                localStorage.removeItem("codesCountryBank");
                localStorage.setItem(
                    "codesCountryBank",
                    JSON.stringify(response.data.result_info)
                );
            })
            .catch((error) => {
                // 오류발생시 실행
                console.log(error);
            });
    };

    return (
        <>
            <div className="wrap">
                <Routes>
                    {/* /link를 입력하면 LinkPage 오픈 */}
                    <Route path={routerPath.main_url} element={<Main />} />
                    <Route
                        path={routerPath.myPage_url}
                        element={<MyPageMain />}
                    />

                    {/* 회원가임 */}
                    <Route
                        path={routerPath.signup_url}
                        element={<SignUpMain />}
                    />
                    <Route
                        path={routerPath.signup_ok_url}
                        element={<SignUpOk />}
                    />
                    <Route
                        path={routerPath.terms_url}
                        element={<TermsMain />}
                    />
                    <Route
                        path={routerPath.privacy_url}
                        element={<PrivacyMain />}
                    />

                    {/* 아이디 찾기 */}
                    <Route
                        path={routerPath.findId_url}
                        element={<FindIdMain />}
                    />

                    {/* 비번 찾기 */}
                    <Route
                        path={routerPath.findPw_url}
                        element={<FindPWMain />}
                    />

                    {/* /location으로 시작하는 url을 입력하면 LocationPage 오픈 */}
                    {/* <Route path="/location/*" element={<LocationPage />} /> */}
                    {/* 상대경로로도 등록 가능, parameter 추가는 :을 이용 */}
                    {/* /param을 입력하면 ParamPage 오픈 */}
                    {/* /param/{ value }을 입력해도 ParamPage 오픈 */}
                    {/* <Route path="/param" element={<WrapperPage />}>
        <Route path="." element={<ParamPage />} />
        <Route path=":name" element={<ParamPage />} />
      </Route> */}
                    {/* /redirect를 입력하면 RedirectPage 오픈 */}
                    {/* <Route path="/redirect" element={<RedirectPage />} /> */}
                    {/* 정의되지 않은 나머지 모든 url을 입력하면 NotFoundPage 오픈 */}
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
