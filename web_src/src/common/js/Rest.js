import { Instance, Instance_kakao } from "./Instance";

let res;

const RestServer = (method, url, data) => {
    switch (method) {
        case "get":
            return Instance.get(url, data);

        case "post":
            return Instance.post(url, data);

        case "put":
            return Instance.put(url, data);

        case "delete":
            return Instance.delete(url, data);

        case "post_kakao":
            return Instance_kakao.post(url, data);

        default:
            break;
    }

    return res;
};

export { RestServer };
