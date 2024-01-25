import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ErrorPage from './pages/ErrorPage';
import Welcome from './pages/Welcome';
import Workouts from './pages/Workouts';
import Diets from './pages/Diets';
import About from './pages/AboutUs';

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
    {
	path: "/diets",
	element: <Diets />
    },
    {
	path: "/about_us",
	element: <About />
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
