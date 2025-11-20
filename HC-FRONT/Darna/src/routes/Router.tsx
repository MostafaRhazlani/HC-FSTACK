import { type RouteObject } from "react-router-dom";
import { AppLayout } from "../components/layouts/AppLayout";
import Home from "../pages/Home";
import ProtectedLayout from "../components/layouts/ProtectedLayout";

export const router: RouteObject[] = [
    {
        element: <ProtectedLayout />,
        children: [
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
    }
]