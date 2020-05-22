import React, { useState, useEffect } from 'react';
import axios from "axios";
import {JokeContext} from './context/JokeContext';
import Signup from './Signup';
import Signin from './Sign-In';
import "./App.css";

function App() {

  

	const addUser = user => {

      axios
        .post(`http://localhost:3300/api/auth/register`, user)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log("unable to add user", error);
        });
    }
  
  	const signUser = user => {

      axios
        .post(`http://localhost:3300/api/auth/login`, user)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log("unable to sign in", error);
        });
    }
  
  
   
   
	
	return (
		<div className="App">
			<JokeContext.Provider>
	   
       <Signup addUser={addUser}/>
       <Signin signUser={signUser}/>
	
			</JokeContext.Provider>
		</div>
	);
}

export default App;
