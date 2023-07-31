import React, { forwardRef } from "react";

const DepartmentComponent = forwardRef((props, ref) => {
    const { organizationNameKo, departmentNameKo, specializedNameKo } = ref;

    return (
        <>
            <div>
                <h5>소속 기관</h5>
                <input
                    type="text"
                    className="input w280"
                    ref={organizationNameKo}
                />
            </div>
            <div>
                <h5>전공과</h5>
                <input
                    type="text"
                    className="input w280"
                    ref={departmentNameKo}
                />
            </div>
            <div>
                <h5>전공분야</h5>
                <input
                    type="text"
                    className="input w280"
                    ref={specializedNameKo}
                />
            </div>
        </>
    );
});

export default DepartmentComponent;
