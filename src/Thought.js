import React,{ useState } from 'react';

const Thought = ({ text, id }) =>{
    const [texts,setText] = useState();
    
    const deleteThought = (id) =>{
        
    }
    return (
        <div id={id}>
            <div>
                <p>{text}</p><button id={id} onClick={() => deleteThought(id)}></button>
            </div>
        </div>
    )
}



export default Thought;