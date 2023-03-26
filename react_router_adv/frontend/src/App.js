import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import EventsPage, { eventsLoader } from "./pages/Events";
import EventDetailsPage, { deleteEventAction, eventDetailLoader } from "./pages/EventDetails";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import Root from "./pages/Root";
import EventsRoot from "./pages/EventsRoot";
import ErrorPage from "./pages/Error";
import eventAction from "./components/EventForm"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            { path: "", element: <HomePage /> },
            {
                path: "events",
                element: <EventsRoot />,
                children: [
                    {
                        path: "",
                        element: <EventsPage />,
                        loader: eventsLoader,
                    },
                    {
                        path: ":eventId",
                        id: "event-detail",
                        // children sharing loader, component must use useRouteLoaderData with loader ID
                        loader: eventDetailLoader,
                        children: [
                            {
                                path: "",
                                element: <EventDetailsPage />,
                                action: deleteEventAction
                            },
                            { path: "edit", element: <EditEventPage />, action: eventAction },
                        ],
                    },
                    { path: "new", element: <NewEventPage />, action: eventAction },
                ],
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
