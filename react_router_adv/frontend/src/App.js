import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import EventsPage, { eventsLoader } from "./pages/Events";
import EventDetailsPage, { eventDetailLoader } from "./pages/EventDetails";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import Root from "./pages/Root";
import EventsRoot from "./pages/EventsRoot";
import ErrorPage from "./pages/Error";

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
                            },
                            { path: "edit", element: <EditEventPage /> },
                        ],
                    },
                    { path: "new", element: <NewEventPage /> },
                ],
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
