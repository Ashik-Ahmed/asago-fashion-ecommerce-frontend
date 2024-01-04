import React from "react";

const Heading = ({
    heading,
    className,
}) => {
    return (
        <p className={`text-3xl font-semibold pb-6 ${className}`}>{heading}</p>
    );
};

export default Heading;
