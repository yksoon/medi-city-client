import { useEffect } from "react";
import { useLocation, useParams } from "react-router";

const CertResult = (props) => {
    const params = useParams();
    const cert_idx = params.cert_idx;

    const location = useLocation();
    const queryString = location.search;

    useEffect(() => {
        console.log("111111", cert_idx);
        console.log("22222", queryString);
    }, []);
    return <></>;
};

export default CertResult;
