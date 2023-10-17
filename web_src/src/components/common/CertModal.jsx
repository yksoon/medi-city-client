import { useEffect, useRef } from "react";

const CertModal = (props) => {
    const modData = props.modData;

    // 인증정보
    const form_url = useRef(null);
    const enc_data = useRef(null);
    const integrity_value = useRef(null);
    const m = useRef(null);
    const token_version_id = useRef(null);

    useEffect(() => {
        insertFormData();
    }, []);

    const insertFormData = () => {
        token_version_id.current.value = modData.token_version_id;
        enc_data.current.value = modData.enc_data;
        integrity_value.current.value = modData.integrity_value;
        m.current.value = modData.m;
        // form_url.current.value = modData.form_url;

        let form = document.getElementById("form");

        form.action = modData.form_url;
        form.mothod = "POST";
        form.target = "cert_iframe";

        form.submit();
    };
    return (
        <>
            <iframe
                title="cert"
                id="cert_iframe"
                // src={`${modData.form_url}?token_version_id=${modData.token_version_id}&enc_data=${modData.enc_data}&integrity_value=${modData.integrity_value}&m=${modData.m}`}
                width="100%"
                height="900px"
                // style={{ display: "none" }}
            >
                본인인증 확인중..
            </iframe>
            {console.log(
                `${modData.form_url}?token_version_id=${modData.token_version_id}&enc_data=${modData.enc_data}&integrity_value=${modData.integrity_value}&m=${modData.m}`
            )}
            {/* formData */}
            <form name="form" id="form" ref={form_url} target="cert_iframe">
                <input type="hidden" id="m" name="m" value="" ref={m} />
                <input
                    type="hidden"
                    id="token_version_id"
                    name="token_version_id"
                    value=""
                    ref={token_version_id}
                />
                <input
                    type="hidden"
                    id="enc_data"
                    name="enc_data"
                    ref={enc_data}
                />
                <input
                    type="hidden"
                    id="integrity_value"
                    name="integrity_value"
                    ref={integrity_value}
                />
            </form>
        </>
    );
};

export default CertModal;
