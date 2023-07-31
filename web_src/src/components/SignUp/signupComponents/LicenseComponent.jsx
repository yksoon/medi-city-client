import React, { forwardRef } from "react";

const LicenseComponent = forwardRef((props, ref) => {
    const { mdLicensesNumber } = ref;
    return (
        <>
            <h5>면허번호</h5>
            <input type="text" className="input w370" ref={mdLicensesNumber} />
        </>
    );
});

export default LicenseComponent;
