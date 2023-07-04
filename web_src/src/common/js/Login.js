import { routerPath } from "webPath";
import { RestServer } from "./Rest";
// import { Instance } from "./Instance";

export default function Login(url, data, handleLoding, resultCode) {
    RestServer("post", url, data)
        .then(function (response) {
            // response
            let user_info;

            let result_code = response.headers.result_code;

            if (result_code === "0000") {
                user_info = response.data.result_info;

                let deleteKey = [
                    "md_licenses_number",
                    "signin_policy",
                    "signin_policy_cd",
                    "user_idx",
                    "user_pwd",
                    "user_role",
                    "user_role_cd",
                    "user_salt",
                ];

                for (let i = 0; i < deleteKey.length; i++) {
                    delete user_info[deleteKey[i]];
                }

                localStorage.removeItem("userInfo");
                localStorage.setItem("userInfo", JSON.stringify(user_info));

                // setIsLoading(false);
                handleLoding(false);

                window.location.replace(routerPath.main_url);
            } else if (result_code === "1003") {
                console.log(response);
                alert("사용자가 없습니다.");

                // setIsLoading(false);
                handleLoding(false);
            }
        })
        .catch(function (error) {
            // 오류발생시 실행
            console.log(error);

            let err = error.response.headers.result_code;
            // console.log(err);

            for (let i = 0; i < resultCode.length; i++) {
                if (resultCode[i].result_code === err) {
                    let msg = resultCode[i].result_message_ko;
                    console.log(msg);
                    alert(msg);
                }
            }

            // setIsLoading(false);
            handleLoding(false);
        });
}
