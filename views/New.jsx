import React from "react"

function New(props) {

    return (
        <div>
            <h1>New Ship</h1>
            <form action="/logs" method="POST">
                <label htmlFor="tle">Title:</label><br />
                <input type="text" id="tle" name="title" /><br /><br />

                <label htmlFor="ntry">Entry:</label><br />
                <textarea id="ntry" name="entry" rows="4" cols="50"></textarea><br /><br />

                <label htmlFor="shipbrk">Ship is Broken:</label><br />
                <input type="checkbox" id="shipbrk" name="shipIsBroken" /><br /><br />

                <button>Submit</button>
            </form>
        </div>
    )
}

export default New;