import React, {useState} from 'react';

export default function Signup (props) {
    const [newUser, setNewUser] = useState({
        username:"",
        password:"" 

    });
    
  const handleChanges = e => {

    setNewUser({...newUser, 
        [e.target.name]:e.target.value});
  };

  const submitUser = () => {
    
    props.addUser(newUser);
    setNewUser({
        username:"",
        password:"" 

    });
  }



    return (
        <form>
           Username:
         <input
            className="name-input"
            type="text"
            name="username"
            value={newUser.username}
            onChange={handleChanges}
          />
         <p> Password:
            <input
            className="password-input"
            type="password"
            name="password"
            value={newUser.password}
            onChange={handleChanges}
          /> </p>
         <button onClick={submitUser}>
				Sign Up
			</button>
        </form>
      );

} 