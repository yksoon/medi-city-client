import { Route, Routes } from "react-router";

import { path } from "routerPath";

import NotFoundPage from "NotFoundPage";
import Main from "components/Main/Main";
import MyPageMain from "components/MyPage/MyPage/MyPageMain";
import SignUpMain from "components/SignUp/SignUpMain";

function App() {
  return (
    <>
      <Routes>
        {/* /link를 입력하면 LinkPage 오픈 */}
        <Route path={path.main_url} element={<Main />} />
        <Route path={path.myPage_url} element={<MyPageMain />} />
        <Route path={path.signup_url} element={<SignUpMain />} />

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
    </>
  );
}

export default App;
