import React from "react";

export default function Book (props) {
    return (
        <div>
            <h3 onClick={props.action}> Project Name:{props.project}</h3>
            <p> Project Year:{props.year}</p>

        </div>
    )
}