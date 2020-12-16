import React from 'react'
import './Style/TextError.css'

function TextError(props){
    return(
        <div className='error'>
         {props.children}
        </div>
    )
}

export default TextError