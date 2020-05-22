import React, {useState} from 'react';

export default function Signin (props) {
    const [user, setUser] = useState({
        username:"",
        password:"" 

    });
    
  const handleChanges = e => {

    setUser({...user, 
        [e.target.name]:e.target.value});
  };

  const submitUser = () => {
    
    props.signUser(user);
  }



    return (
        <form>
           Username:
         <input
            className="name-input"
            type="text"
            name="username"
            value={user.username}
            onChange={handleChanges}
          />
         <p> Password:
            <input
            className="password-input"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChanges}
          /> </p>
         <button onClick={submitUser}>
				Sign In
			</button>
        </form>
      );

} 