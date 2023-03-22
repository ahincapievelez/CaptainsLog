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
            <a href="/logs/new">New Log</a>

            <br/><br/><br/>

            <form action="/logs/seed" method="POST">
                <button>SEED</button>
            </form>

            <br/>

            <form action="/logs/clear?_method=DELETE" method="POST">
                <button>CLEAR</button>
            </form>
        </div>
    )
}

export default Index