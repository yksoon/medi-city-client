import {useRecoilValue, useSetRecoilState} from "recoil";
import {isSpinnerAtom, userInfoAtom} from "recoils/atoms";
import {useEffect, useRef} from "react";
import {Link} from "react-router-dom";
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import {CommonErrModule, CommonNotify, CommonRest} from "common/js/Common";
import {apiPath, routerPath} from "webPath";
import {successCode} from "common/js/resultCode";
import useAlert from "hook/useAlert";
import useConfirm from "hook/useConfirm";


const ModMyPageMain = () => {
    const { alert } = useAlert();
    const { confirm } = useConfirm();
    const err = CommonErrModule();
    const setIsSpinner = useSetRecoilState(isSpinnerAtom);

    const userInfo = useRecoilValue(userInfoAtom);

    const inputPw = useRef(null);

    useEffect(() => {

    }, [])

    const signIn = () => {
        if (!inputPw.current.value) {
            CommonNotify({
                type: "alert",
                hook: alert,
                message: "비밀번호를 입력해주세요",
            });

            inputPw.current.focus();
            return false;
        }

        doSignin();
    };

    const doSignin = () => {
        setIsSpinner(true);

        const url = apiPath.api_login;

        const data = {
            signup_type: "000",
            user_id: userInfo.user_id,
            user_pwd: inputPw.current.value,
        };

        // 파라미터
        const restParams = {
            method: "post",
            url: url,
            data: data,
            err: err,
            callback: (res) => responseLogic(res),
        };

        CommonRest(restParams);

        const responseLogic = (res) => {
            let result_code = res.headers.result_code;

            if (result_code === successCode.success) {

                setIsSpinner(false);

                // navigate(routerPath.main_url);
            } else {
                setIsSpinner(false);

                CommonNotify({
                    type: "alert",
                    hook: alert,
                    message: res.headers.result_message_ko,
                });
            }
        };
    };

    const handleOnKeyPress = (e) => {
        if (e.key === "Enter") {
            signIn(); // Enter 입력이 되면 클릭 이벤트 실행
        }
    };

    return (
        <>
            <Header />

            <div id="con_area">
                <div className="form modify" id="sign_form">
                    <h3 className="title">회원정보 수정</h3>
                    <div className="modify_form">
                        <h5>비밀번호를 입력해주세요</h5>
                        <input type="password" className="input w370" onKeyDown={handleOnKeyPress} ref={inputPw} />
                    </div>
                </div>
                <div className="btn_box">
                    <Link onClick={signIn} className="mainbtn btn01">다음</Link>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default ModMyPageMain;