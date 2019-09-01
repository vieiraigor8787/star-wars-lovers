import React from "react";

const Characters = ({names}) => (
    <div className="">
        {names.map(name => (
            <p>{name.name}</p>
        ))}
    </div>
)

export default Characters