import React, { Fragment, useState } from "react";

const EditTodo = ({todo}) => {
    
    const [description, setDescription] = useState(todo.description);
    const [override, setOverride] = useState(todo.override);
    const option = 0;

    //edit desc
    const updateDescription = async() => {
        try {
            const body = { description, override, option };
            const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location = "/";
        }catch(err) {
            console.error(err.message);
        }
    }
    
    return (
        <Fragment>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#id${todo.todo_id}`}>
          Edit
        </button>
        
        <div class="modal" id={`id${todo.todo_id}`} onClick={() => setDescription(todo.description)}>
          <div class="modal-dialog">
            <div class="modal-content">
        
              <div class="modal-header">
                <h4 class="modal-title">Edit Todo</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal" onClick={() => setDescription(todo.description)}></button>
              </div>
        
              <div class="modal-body">
                <input 
                    type="text" 
                    placeholder="Description"
                    className="form-control" 
                    value={description} 
                    onChange = {e => setDescription(e.target.value)}/> 
                  <input 
                    type="text" 
                    placeholder="Override"
                    className="form-control" 
                    value={override} 
                    onChange = {e => setOverride(e.target.value)}/> 
              </div>
        
              <div class="modal-footer">
              <button 
                type="button" 
                class="btn btn-primary" 
                data-bs-dismiss="modal"
                onClick = {e => updateDescription(e)}>Edit
              </button>
                <button 
                    type="button" 
                    class="btn btn-danger" 
                    data-bs-dismiss="modal"
                    onClick={() => setDescription(todo.description)}>
                    Close</button>
              </div>
        
            </div>
          </div>
        </div>
    </Fragment>
    )
};

export default EditTodo;