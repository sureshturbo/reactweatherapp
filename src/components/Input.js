import React from 'react'
import {Input} from '@material-ui/core';
import {Button}from '@material-ui/core';

export const inputer = ({input,setInput,findweather}) => {

     const handleChange=(event)=>{
         setInput(event.target.value)
     };

     const handleClick = (event)=>{
         event.preventDefault();
         findweather();
     }
     
    return (
        <div className="inputBox">
            <div className="inputBox__field">
                <h1>Weather App</h1>
                <p>Created by <a href="https://sureshturbo.github.io/profile/">Sureshrajan</p><br></br>
                <form>
                    <Input placeholder="enter the city name" onChange={handleChange} value={input}></Input>
                    <br></br>
                    <br></br>
                    <Button variant="contained" color="primary" type="submit" onClick={handleClick}>
                        search
                    </Button>
                    </form>
                </div>

            
        </div>
    )
}

export default inputer;
