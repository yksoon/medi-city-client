import React, { forwardRef } from "react";

const NameComponent = forwardRef((props, ref) => {
    const { userNameFirstKo, userNameLastKo, userNameFirstEn, userNameLastEn } =
        ref;

    return (
        <>
            <div>
                <h5>
                    성명 (국문) <span className="red">*</span>
                </h5>
                <input
                    type="name"
                    className="input w180"
                    placeholder="성"
                    ref={userNameFirstKo}
                />
                <input
                    type="name"
                    className="input w180"
                    placeholder="이름"
                    ref={userNameLastKo}
                />
            </div>
            <div>
                <h5>
                    성명 (영문) <span className="red">*</span>
                </h5>
                <input
                    type="name"
                    className="input w180"
                    placeholder="First name"
                    ref={userNameFirstEn}
                />
                <input
                    type="name"
                    className="input w180"
                    placeholder="Last name"
                    ref={userNameLastEn}
                />
            </div>
        </>
    );
});

export default NameComponent;
