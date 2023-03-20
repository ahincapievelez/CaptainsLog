import React from 'react'

function Show(props) {
    return (
        <div>
            <h2><strong>{props.log.title}</strong></h2>
            <p><strong>Entry: </strong>{props.log.entry}</p>
            <p>{props.log.shipIsBroken ? 'Ship is broken' : 'Ship is not broken'}</p>
            <p><strong>Created: </strong>{props.log.createdAt.toString()}</p>
            <a href={`/logs/${props.log._id}/edit`}>Edit</a>

            <br /><br />
            <form action={`/logs/${props.log._id}?_method=DELETE`} method="POST">
                <button>Delete</button>
            </form>

            <br />
            <a href="/logs">Back</a>
        </div>
    )
}

export default Show