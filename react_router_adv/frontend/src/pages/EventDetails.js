import React from "react";
import { useParams } from "react-router-dom";

const EventDetails = () => {
    const params = useParams();

    return <h1>Event Details {params.eventId} </h1>;
};

export default EventDetails;
