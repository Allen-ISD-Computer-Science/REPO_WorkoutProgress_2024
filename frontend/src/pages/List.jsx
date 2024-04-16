import React, { useState } from 'react'
import '../styles/List.css';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Nav from '../components/Navbar.jsx';

function List () {

    const [tasks, setTasks] = useState(["Legs", "Shoulders", "Chest", "Arms", "Back"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
	setNewTask(event.target.value);

    }

    function addTask() {

	if(newTask.trim() !== ""){
	setTasks(t => [...t, newTask]);
	    setNewTask("");
	}

    }

    function deleteTask(index) {

	const updatedTasks = tasks.filter((_, i) => i !== index);
	setTasks(updatedTasks);

    }

    function moveTaskUp(index) {
	if(index > 0) {
	    const updatedTasks = [...tasks];
	    [updatedTasks[index], updatedTasks[index - 1]] =
		[updatedTasks[index - 1], updatedTasks[index]];
	    setTasks(updatedTasks);
	}

    }

    function moveTaskDown(index) {
	if(index < tasks.length - 1) {
	const updatedTasks = [...tasks];
	[updatedTasks[index], updatedTasks[index + 1]] =
	    [updatedTasks[index + 1], updatedTasks[index]];
	setTasks(updatedTasks);
    }

    }
    

    return (
	<section>
	    <Nav />
	<div className="list">

	    <h1>Workouts For The Day</h1>

	    <div>
		<input
	    type="text"
	    placeholder="Enter a workout... "
	    value={newTask}
		    onChange={handleInputChange}/>
		<button
	    className="add-button"
		    onClick={addTask}>
		    Add
		    </button>
		</div>

		<ol>
		    {tasks.map((task, index) =>
			<li key={index}>
			    <span className="text">{task}</span>
			    <button
				className="delete-button"
				onClick={() => deleteTask(index)}>
				<FontAwesomeIcon icon={faTrash} />
			    </button>
			    <button
				className="move-button"
				onClick={() => moveTaskUp(index)}>
				<FontAwesomeIcon icon={faArrowUp} />
				</button>
			    <button
				className="move-button"
				onClick={() => moveTaskDown(index)}>
				<FontAwesomeIcon icon={faArrowDown} />
			    </button>
			</li>

		    )}
		</ol>
		
	</div>
	</section>
    );
}
export default List

