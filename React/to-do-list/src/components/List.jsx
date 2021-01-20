import React from 'react'
import Item from './Item';

export default function List({todo, updateTask, deleteTask}) {
    return (
        <div>
            {todo.map((task, idx) => <Item task={task} idx={idx} key={idx} updateTask={updateTask} deleteTask={deleteTask}/>)}
        </div>
    )
}
