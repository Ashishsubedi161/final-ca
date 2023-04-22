import React, { useState } from 'react';
import './post.css';

import Cookies from 'js-cookie';

const Login = () => {

  const url = import.meta.env.VITE_BACKEND

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('')


  const [showPopup, setShowPopup] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };



  const handleSubmit = (event) => {
    event.preventDefault();

    const post = {
      email,
      password
    };


    fetch(url+'user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.success){

          setEmail('');
          setPassword('');
          setShowPopup(false);
          alert('Logged In');
          Cookies.set('token', data.token, {expires: 60, path: '/'});

          window.location.reload()

        } else {
          setError(data.message)
        }
      })
      .catch((error) => {
        console.error('Error LoginUp:', error);
      });
  };

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  return (
    <div>
      <button className ='createPostButton' onClick={handleButtonClick}>Login</button>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-button" onClick={() => setShowPopup(false)}>&times;</span>
            <form onSubmit={handleSubmit}>
              
              <div className='text'><h2>Login</h2></div>
              
                {error ? <div class="f-error">{error}</div> : ""}

              <div>
                <label htmlFor="Email">Email:</label>
                <input
                  type="email"
                  id="Email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter your Password"
                  required
                />
              </div>
              <div>
              <button type="submit">Login</button>
              </div>
             
             
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
