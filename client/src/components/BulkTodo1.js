import React, { Fragment, useState } from "react";

const BulkTodo1 = () => {

    const [override, setOverride] = useState();
    const [beginID, setBeginID] = useState();
    const [endID, setEndID] = useState();
    
    const description = "";
    const option = 1

    const updateBulk = async() => {

        try {
            console.log(beginID);
            console.log(endID);
            for (let i = beginID; i <= endID ; i++) {
                try {
                    const body = {description, override, option}
                    const response = await fetch(`http://localhost:5000/todos/${i}`, {
                        method: "PUT",
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify(body)
                    });
                } catch(err) {
                    console.error(err.message);
                }
            }
            window.location = "/";
        }catch(err) {
            console.error(err.message);
        }

    }

    return(
        <Fragment>
            <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#myModal1">
                Bulk-Edit Implimentation 1
            </button>
            </div>

            <div class="modal" id="myModal1">
            <div class="modal-dialog">
                <div class="modal-content">

                <div class="modal-header">
                    <h4 class="modal-title">Bulk Edit Override (Using a for loop)</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body">
                    <div class="container">
                    <input 
                        type="text" 
                        placeholder="Change it to"
                        className="form-control" 
                        value={override}
                        onChange = {e => setOverride(e.target.value)}
                    />
                    <div class="row">
                        <div class="col">
                        <input 
                            type="text" 
                            placeholder="Beginning ID"
                            className="form-control" 
                            value={beginID}
                            onChange = {e => parseInt(setBeginID(e.target.value))}
                        />
                        </div>
                        <div class="col">
                        <input 
                            type="text" 
                            placeholder="Ending ID"
                            className="form-control" 
                            value={endID}
                            onChange = {e => parseInt(setEndID(e.target.value))}
                        />
                    </div>
                    </div>
                </div>
            </div>

            <div class="modal-footer">
                <button 
                    type="button" 
                    class="btn btn-primary" 
                    data-bs-dismiss="modal"
                    onClick={e => updateBulk(e)}>
                    Edit All
                    </button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>

                </div>
                </div>
            </div>
        </Fragment>
    )
};

export default BulkTodo1;