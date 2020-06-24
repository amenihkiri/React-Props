import React from 'react'

function card({x}) {
    return ( 
    <div className="list">

{x.map(c=>
<div className={c.class}>

<h2>{c.name}</h2>
            <p>{c.age}</p>
            <p>{c.phone}</p>
</div>)


}










     

</div>
    )
}
export default card


   {/* <div className="cardd">
            <h2>aziz</h2>
            <p>25252525</p>
            <p>adress aziz</p>
        </div>
        <div className="cardd">
        <h2>khaled</h2>
        <p>25252525</p>
        <p>adress aziz</p>
    </div>

    <div className="cardd">
    <h2>bilel</h2>
    <p>25252525</p>
    <p>adress aziz</p>
</div> */}