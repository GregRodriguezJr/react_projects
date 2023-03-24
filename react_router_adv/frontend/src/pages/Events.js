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
        throw new Response(
            JSON.stringify({ message: "Could not fetch events" }),
            { status: 500 }
        );
    } else {
        return response;
    }
};
