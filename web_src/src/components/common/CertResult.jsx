import { CommonErrModule, CommonRest, CommonSpinner2 } from "common/js/Common";
import useAlert from "hook/useAlert";
import useConfirm from "hook/useConfirm";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { certInfoAtom, isSpinnerAtom } from "recoils/atoms";
import { apiPath } from "webPath";

const CertResult = (props) => {
    const { alert } = useAlert();
    const { confirm } = useConfirm();
    const err = CommonErrModule();
    const [isSpinner, setIsSpinner] = useRecoilState(isSpinnerAtom);

    const certInfo = useRecoilValue(certInfoAtom);

    const params = useParams();
    const cert_idx = params.cert_idx;

    const location = useLocation();
    const queryString = location.search;

    useEffect(() => {
        sendResult();
    }, []);

    useEffect(() => {
        Object.keys(certInfo).length !== 0 && window.close();
    }, [certInfo]);

    const sendResult = () => {
        setIsSpinner(true);

        const url = `${apiPath.api_auth_cert_recieve_result}${cert_idx}${queryString}`;

        // 파라미터
        const restParams = {
            method: "get",
            url: url,
            data: {},
            err: err,
            callback: (res) => responsLogic(res),
        };

        CommonRest(restParams);

        const responsLogic = (res) => {
            return;
        };
    };

    return <>{isSpinner && <CommonSpinner2 />}</>;
};

export default CertResult;
