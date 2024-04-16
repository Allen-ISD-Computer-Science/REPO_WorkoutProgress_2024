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
import Register from './pages/Register';
import Login from './pages/Login';
import Supplements from './pages/Supplements';

// sub pages
import BeginnerDiets from './pages/diets/Beginner';
import IntermediateDiets from './pages/diets/Intermediate';
import AdvancedDiets from './pages/diets/Advanced';

import BeginnerWorkouts from './pages/workouts/Beginner';
import IntermediateWorkouts from './pages/workouts/Intermediate';
import AdvancedWorkouts from './pages/workouts/Advanced';

import WorkoutList from './pages/List';
import Test from './pages/Test';

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
	path: "/supplements",
	element: <Supplements />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
	path: "/login",
	element: <Login />
    },
    {	path: "/workouts/beginner",
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
    {
	path: "/workouts/intermediate",
	element: <IntermediateWorkouts />
    },
    {
	path: "/list",
	element: <WorkoutList />
    },
    {
	path: "/test",
	element: <Test />
    }
    
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
