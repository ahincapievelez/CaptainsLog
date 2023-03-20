import React from 'react'

function Index(props) {

    return (
        <div>
            <h1>See All The Logs!</h1>
            <ul>
                {props.logs.map((item, index) => 
                    <li key={index}>
                        <a href={`/logs/${item._id}`}><strong>{item.title}</strong></a>
                    </li>
                )}
            </ul>
            <a href="/logs/new">Add Pokemon</a>
        </div>
    )
}

export default Index