import React from 'react'

export default function Item({task, idx, updateTask, deleteTask}) {

    const checked = {
        'text-decoration': 'line-through',
    };

    const unchecked = {};

    return (
        <>
            <p style={task.completed ? checked : unchecked}>
                {task.body} <input 
                type="checkbox" 
                checked={task.completed} 
                onClick={(e) => {updateTask(idx)}}
                />
                <button onClick={(e) => {deleteTask(idx)}}>Delete</button>
            </p>
        </>
    )
}
