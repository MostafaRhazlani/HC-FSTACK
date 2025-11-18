import { type RouteObject } from "react-router-dom";
import { AppLayout } from "../components/layouts/AppLayout";
import { Home } from "../pages/Home";

export const router: RouteObject[] = [
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    }
]