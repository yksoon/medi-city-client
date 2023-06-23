import React, { useState, useRef } from "react";

function NameComponent() {
    return (
        <>
            <div>
                <h5>
                    성명 (국문) <span className="red">*</span>
                </h5>
                <input type="name" className="input w180" placeholder="성" />
                <input type="name" className="input w180" placeholder="이름" />
            </div>
            <div>
                <h5>
                    성명 (영문) <span className="red">*</span>
                </h5>
                <input
                    type="name"
                    className="input w180"
                    placeholder="First name"
                />
                <input
                    type="name"
                    className="input w180"
                    placeholder="Last name"
                />
            </div>
        </>
    );
}

export default NameComponent;
