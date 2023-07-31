import { routerPath } from "webPath";
import { RestServer } from "./Rest";
import { set_user_info, set_user_token } from "redux/actions/userInfoAction";
import { CommonConsole, CommonErrorCatch, CommonNotify } from "./Common";
import { set_spinner } from "redux/actions/commonAction";

export default function Login(url, data, resultCode, dispatch, alert) {
    RestServer("post", url, data)
        .then(function (response) {
            // response
            let userInfo;

            let resultCode = response.headers.resultCode;

            if (resultCode === "0000") {
                userInfo = response.data.resultInfo;

                let deleteKey = [
                    "mdLicensesNumber",
                    "signinPolicy",
                    "signinPolicyCd",
                    "userIdx",
                    "userPwd",
                    "userRole",
                    "userRoleCd",
                    "userSalt",
                ];

                for (let i = 0; i < deleteKey.length; i++) {
                    delete userInfo[deleteKey[i]];
                }

                dispatch(set_user_info(JSON.stringify(userInfo)));
                dispatch(set_user_token(JSON.stringify(userInfo)));

                dispatch(
                    set_spinner({
                        isLoading: false,
                    })
                );

                window.location.replace(routerPath.main_url);
            } else if (resultCode === "1003") {
                CommonConsole("log", response);

                CommonConsole("decLog", response);
                // CommonConsole("alertMsg", response);

                CommonNotify({
                    type: "alert",
                    hook: alert,
                    message: response.headers.resultMessageKo,
                });

                dispatch(
                    set_spinner({
                        isLoading: false,
                    })
                );
            }
        })
        .catch(function (error) {
            // 오류발생시 실행
            CommonErrorCatch(error, dispatch, alert);
        });
}
