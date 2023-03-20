import React from 'react'

function Edit(props) {
    return ( 
        <div>
            <h1>Edit Log</h1>
            <form action={`/logs/${props.log._id}?_method=PUT`} method="POST">
                <label htmlFor="tle">Title:</label><br />
                <input type="text" id="tle" name="title" value={props.log.title}/><br /><br />

                <label htmlFor="ntry">Entry:</label><br />
                <textarea id="ntry" name="entry" rows="4" cols="50" value={props.log.entry}></textarea><br /><br />

                <label htmlFor="shipbrk">Ship is Broken:</label><br />
                <input type="checkbox" id="shipbrk" name="shipIsBroken" defaultChecked={props.log.shipIsBroken}/><br /><br />

                <button>Submit</button>
            </form>
        </div>
    );
}

export default Edit;