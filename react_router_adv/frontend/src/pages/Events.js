import React from "react";
import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

const Events = () => {
    const events = useLoaderData();

    return (
        <>
            <EventsList events={events} />
        </>
    );
};

export default Events;

export const eventsLoader = async () => {
    const response = await fetch("http://localhost:8080/events");
    if (!response.ok) {
        // handle error
    } else {
        const resData = await response.json();
        return resData.events;
    }
};
