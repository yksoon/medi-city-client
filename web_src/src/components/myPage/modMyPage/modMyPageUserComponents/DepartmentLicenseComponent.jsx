import React, { forwardRef } from "react";

const DepartmentLicenseComponent = forwardRef((props, ref) => {
    return (
        <>
            <div>
                <h5>면허번호</h5>
                <input
                    type="text"
                    className="input w370 hold"
                    value="0000000"
                    readOnly
                />
            </div>
            <div className="flex">
                <div>
                    <h5>소속 기관</h5>
                    <input type="text" className="input w280" />
                </div>
                <div>
                    <h5>전공과</h5>
                    <input type="text" className="input w280" />
                </div>
                <div>
                    <h5>전공분야</h5>
                    <input type="text" className="input w280" />
                </div>
            </div>
        </>
    );
});

export default DepartmentLicenseComponent;
