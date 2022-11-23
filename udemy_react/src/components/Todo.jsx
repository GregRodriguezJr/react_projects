import React, { useState } from 'react'
import Backdrop from './Backdrop';
import Modal from './Modal';

function Todo(props) {
    const [ modalIsOpen, setModalIsOpen] = useState(false);

    const deleteHandler = () => {
        setModalIsOpen(true);
    }

  return (
    <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
            <button className="btn" onClick={deleteHandler}>Delete</button>
        </div>
        {/* If modal state is true Modal and Backdrop will show */}
        { modalIsOpen && <Modal/>}
        { modalIsOpen && <Backdrop/>}
    </div>
  )
}

export default Todo 