import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>"Gotta Cath 'Em All"</h1>
            <h2><strong>{props.log.title}</strong></h2>
            <p>{props.log.entry}</p>
            <p>{props.log.shipIsBroken ? 'Ship is broken' : 'Ship is not broken'}</p>
            <p>Created: {props.log.createdAt.toString()}</p>
            <br />
            <a href="/logs">Back</a>
        </div>
    )
}

export default Show