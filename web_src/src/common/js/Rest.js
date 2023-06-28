import { Instance } from "./Instance";

let res;

const RestServer = (method, url, data) => {
    switch (method) {
        case "get":
            Instance.get(url, data)
                .then(function (response) {
                    // response
                    res = response;

                    return res;
                })
                .catch(function (error) {
                    // 오류발생시 실행
                    console.log(error);
                });
            break;

        case "post":
            Instance.post(url, data)
                .then(function (response) {
                    // response
                    res = response;

                    return res;
                })
                .catch(function (error) {
                    // 오류발생시 실행
                    console.log(error);
                });
            break;

        case "put":
            Instance.put(url, data)
                .then(function (response) {
                    // response
                    res = response;

                    return res;
                })
                .catch(function (error) {
                    // 오류발생시 실행
                    console.log(error);
                });
            break;
        default:
            break;
    }
};

export { RestServer };
