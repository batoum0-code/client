import React from "react";

const Wrapper = ({ children, className }) => {
    return (
        <div
            className={`w-auto max-w-[1280px] px-5 md:px-0 mr-[50px] ml-[50px] ${
                className || ""
            }`}
        >
            {children}
        </div>
    );
};

export default Wrapper;
