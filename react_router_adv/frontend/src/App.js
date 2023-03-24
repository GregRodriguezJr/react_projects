import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import EventsPage, { eventsLoader } from "./pages/Events";
import EventDetailsPage from "./pages/EventDetails";
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
                    { path: ":eventId", element: <EventDetailsPage /> },
                    { path: "new", element: <NewEventPage /> },
                    { path: ":eventId/edit", element: <EditEventPage /> },
                ],
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
