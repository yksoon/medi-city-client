import React, { forwardRef } from "react";

const IdComponent = forwardRef((props, ref) => {

    return (
        <>
            <h5>아이디</h5>
            <div className="flex">
                <div>
                    <input
                        type="email"
                        className="input w600 hold"
                        value="email@email.com"
                        readOnly
                    />
                </div>
            </div>
        </>
    );
});

export default IdComponent;
