import React, { Fragment, useState } from "react";

const BulkTodo2 = () => {

    const [override, setOverride] = useState();
    const [beginID, setBeginID] = useState();
    const [endID, setEndID] = useState();

    const updateBulk2 = async() => {

        try {
                const body = {override, beginID, endID}
                const response = await fetch("http://localhost:5000/todos/", {
                    method: "PUT",
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
            <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#myModal">
                Bulk-Edit Implimentation 2
            </button>
            </div>

            <div class="modal" id="myModal">
            <div class="modal-dialog">
                <div class="modal-content">

                <div class="modal-header">
                    <h4 class="modal-title">Bulk Edit Override (No Looping) </h4>
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
                            onChange = {e => setBeginID(e.target.value)}
                        />
                        </div>
                        <div class="col">
                        <input 
                            type="text" 
                            placeholder="Ending ID"
                            className="form-control" 
                            value={endID}
                            onChange = {e => setEndID(e.target.value)}
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
                    onClick={e => updateBulk2(e)}>
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

export default BulkTodo2;