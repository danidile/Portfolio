import React,{ useEffect, useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';
import Thought from './Thought';

const ThoughtsContainer = () => {
    
    let [thoughts , setThoughts] = useState([]);
    
    const addThought = (event) => {
        event.preventDefault();
        if(event.target[0].value !== ""){ /*Controlla che ci sia contenuto nellinput */
           
            let newThought ={
                id: generateId(),
                text: event.target[0].value,
                expiresAt: getNewExpirationTime()
            };
            setThoughts( thoughts => [newThought, ...thoughts]);
            event.target[0].value = "";

        }
    };

    const removeThought = (id) =>{
        const newList = thoughts.filter((t) => t.id !== id);
        setThoughts(newList);
    }

    useEffect(() => {
        
        
    }, [thoughts]);

    return (
            <div className='TodoContainer'>
                <form className='Thought-form' onSubmit={addThought}>
                    <h1>Thought processor</h1>
                    <input className='Thought-input' type="text" id="input-text" placeholder="What's on your mind?"/>
                    <input className='Thought-submit' type="submit" id="submit-button" />
                    {
                thoughts.map( thought => (<p className='thoughtDiv'>{thought.text} <button className='thoughtButton' id={thought.id} onClick={() => removeThought(thought.id)}> X </button></p>))
                }
                </form>
                
            </div>      
    );
}
export default ThoughtsContainer;