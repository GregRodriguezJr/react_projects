import React from "react";
import { NavLink } from "react-router-dom";

const Events = () => {
    return (
        <>
            <ul>
                <li>
                    <NavLink to="/events/1">Event 1</NavLink>
                </li>
                <li>
                    <NavLink to="/events/2">Event 2</NavLink>
                </li>
                <li>
                    <NavLink to="/events/3">Event 3</NavLink>
                </li>
            </ul>
        </>
    );
};

export default Events;
