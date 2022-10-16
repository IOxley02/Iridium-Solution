import React, {Fragment, useState} from "react";

const InputTodo = () => {

    const [description, setDescription] = useState("");
    const [override, setOverride] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { description, override };
            const response = await fetch("http://localhost:5000/todos",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location = "/";
        }catch(err) {
            console.error(err.message);
        }
    }

    return(
        <Fragment>
            <h1 className = "text-center md-5">Pern Todo List</h1>
            <form className = "d-flex mt-5" onSubmit = {onSubmitForm}>
                <input 
                    type="text" 
                    placeholder="Description"
                    className = "form-control" 
                    value={description}
                    onChange = {e => setDescription(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Override"
                    className = "form-control" 
                    value={override}
                    onChange = {e => setOverride(e.target.value)}
                />
                <button className = "btn btn-success">Add</button>
            </form>
            
        </Fragment>
    )
}

export default InputTodo;