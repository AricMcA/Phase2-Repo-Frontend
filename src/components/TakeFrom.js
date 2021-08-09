import React, { useState } from "react";



const TakeForm = ({ addTake }) => {

    const [ take, setTake ] = useState({
        user: '',
        player: '',
        content: ''
    })

    const handleChange = event => {
        setTake({
            ...take,
            [event.target.name]: event.target.value
        })
    }


    const handleSubmit = event => {
        event.preventDefault();
        
        addTake(take);
        setTake({
            user:'',
            player:'',
            content:''
        })
    }

    return (
        <>
        <h3>Create a HotTake</h3>
        <form onSubmit={ handleSubmit }>
            <div>
                <label>User</label>
                <input type="text" name="user" value={ take.user } onChange={ handleChange } />
            </div>
            <div>
                <label>Player</label>
                <input type="text" name="player" value={ take.player } onChange={ handleChange } />
            </div>
            <div>
                <label>Content</label><br/>
                <textarea name="content" value={ take.content } onChange={ handleChange } />
            </div>
            
            <input type="submit" value="Release HotTake" />
        </form>
        </>
    )
}

export default TakeForm