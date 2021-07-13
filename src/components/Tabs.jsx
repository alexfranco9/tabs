import React, { useState } from "react"

const Tabs = props => {
    const [ arr ] = useState( [ ...props.arr ] )
    const [ display, setDisplay ] = useState( "" )

    return (
        <div>
            <div>
                { arr.map( ( item, i ) => 
                <button className="btn btn-info" onClick={ () => setDisplay( arr[ i ] ) }> Captain America Tab </button> ) }
                
            
            </div>
            <br/>
            <h1 className="h1 display-4"> 
                { display } 
            </h1>
        </div>
    )
}

export default Tabs