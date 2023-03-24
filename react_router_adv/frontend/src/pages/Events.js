import React from "react";
import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

const Events = () => {
    const data = useLoaderData();
    const events = data.events;

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
        throw { message: "Could not "}
    } else {
        return response;
    }
};
