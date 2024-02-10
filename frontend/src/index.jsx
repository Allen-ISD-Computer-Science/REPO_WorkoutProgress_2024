import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// main pages
import ErrorPage from './pages/ErrorPage';
import Welcome from './pages/Welcome';
import Workouts from './pages/Workouts';
import Diets from './pages/Diets';
import About from './pages/AboutUs';
import Equipment from './pages/Equipment';
import Supplements from './pages/Supplements';

// sub pages
import BeginnerWorkouts from './pages/workouts/Beginner';
import AdvancedWorkouts from './pages/workouts/Advanced';

import BeginnerDiets from './pages/diets/Beginner';
import IntermediateDiets from './pages/diets/Intermediate';
import AdvancedDiets from './pages/diets/Advanced';

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
    {
	path: "/equipment",
	element: <Equipment />
    },
    {
	path: "/supplements",
	element: <Supplements />
    },
    
    {
	path: "/workouts/beginner",
	element: <BeginnerWorkouts />
    },
    {
	path: "/workouts/advanced",
	element: <AdvancedWorkouts />
    },
    {
	path: "/diets/beginner",
	element: <BeginnerDiets />
    },
    {
	path: "/diets/intermediate",
	element: <IntermediateDiets />
    },
    {
	path: "/diets/Advanced",
	element: <AdvancedDiets />
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
