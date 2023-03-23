import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import EventDetailsPage from "./pages/EventDetails";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import Root from "./pages/Root";
import EventsRoot from "./pages/EventsRoot";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { path: "", element: <HomePage /> },
            {
                path: "events",
                element: <EventsRoot />,
                children: [
                    {
                        path: "",
                        element: <EventsPage />,
                        loader: async () => {
                            const response = await fetch(
                                "http://localhost:8080/events"
                            );
                            if (!response.ok) {
                                // handle error
                            } else {
                                const resData = await response.json();
                                return resData.events;
                            }
                        },
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
