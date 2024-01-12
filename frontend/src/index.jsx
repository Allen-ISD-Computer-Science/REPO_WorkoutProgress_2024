import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ErrorPage from "./pages/ErrorPage";
import Welcome from './pages/Welcome';
import Workouts from './pages/Workouts';

const router = createBrowserRouter([
    {
	path: "/",
	errorElement: <ErrorPage />,
    },
    {
	path: "/welcome",
	element: <Welcome />,
    },
    {
	path: "/workouts",
	element: <Workouts />
    },
],
{
basename: process.env.PUBLIC_URL ? `${process.env.PUBLIC_URL}/` : "/",
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
	<RouterProvider router={router} />
    </React.StrictMode>
);
