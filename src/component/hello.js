import React from 'react'


export default function hello(props) {
    return (
        <>
        <div>
          {props.students.map(el=>
            <h2>hello {el.name}</h2>

            )}  
        </div>
        <ul>
            {props.y.map(el=>
                <li>{el.desc}</li>)}
        </ul>
        </>
    )
}
