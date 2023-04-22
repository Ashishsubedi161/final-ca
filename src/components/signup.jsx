import React, { useState } from 'react';
import './post.css';

const Signup = () => {

  const url = import.meta.env.VITE_BACKEND

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState();
  const [age,setAge] =useState();
  const [quali, setQuali] =useState('')


  const [showPopup, setShowPopup] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  const handleQualiChange = (event) => {
    setQuali(event.target.value);
  };



  const handleSubmit = (event) => {
    event.preventDefault();

    const post = {
      name,
      address,
      phone,
      age,
      qualification:quali,
      email,
      password
    };


    fetch(url +'user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.success){
          alert('SignUp successful:');
          setName('');
          setAddress('');
          setPhone('');
          setAge('');
          setQuali('');
          setEmail('');
          setPassword('');
          setShowPopup(false);
        }
        else{
          alert('Signup Failure')
        }
      
      })
      .catch((error) => {
        console.error('Error SingingUp:', error);
        alert('Signup Failure')
      });
  };

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  return (
    <div>
      <button className ='createPostButton' onClick={handleButtonClick}>Signup</button>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-button" onClick={() => setShowPopup(false)}>&times;</span>
            <form onSubmit={handleSubmit}>
              
              <div className='text'><h2>Signup</h2></div>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  id="email"
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
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div>
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  id="address"
                  
                  onChange={handleAddressChange}
                  placeholder="Enter your Address"
                  required
                />
              </div>
              <div > 
                
                <label htmlFor="phone">Phone:</label>
                <input
                  type="text"
                  id="number"
                  
                  onChange={handlePhoneChange}
                  placeholder="Enter your Phone number"
                  required
                />
              
              </div>
              <div > 
                
                <label htmlFor="age">Age:</label>
                <input
                  type="text"
                  id="age"
                  
                  onChange={handleAgeChange}
                  placeholder="Enter your Age"
                  required
                />
              
              </div>
              <div>
                <label htmlFor="quali">Education:</label>
                <input
                  type="text"
                  id="quali"
                  
                  onChange={handleQualiChange}
                  placeholder="Enter your Qualification"
                  required
                />
              </div>
              <div>
              <button type="submit">Signup</button>
              </div>
             
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
