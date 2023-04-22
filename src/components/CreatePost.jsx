import React, { useState } from 'react';
import './post.css';


const CreatePost = () => {
  const url = import.meta.env.VITE_BACKEND
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [price,setPrice] = useState('')
  const [showPopup, setShowPopup] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handlePriceChange = (event) => {
    
    setPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const post = {
      title,
      content,
      price
    };


    fetch(url+'job/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Post created successfully:', data);
        setTitle('');
        setContent('');
        setPrice();
        setShowPopup(false);
        window.location.reload()
      })
      .catch((error) => {
        console.error('Error creating post:', error);
      });
  };

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  return (
    <div>
      <button className ='createPostButton' onClick={handleButtonClick}>Create a Post</button>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-button" onClick={() => setShowPopup(false)}>&times;</span>
            <form onSubmit={handleSubmit}>
              
              <div className='text'><h2>Create A Job Post</h2></div>
              <div>
                <label htmlFor="post-title">Title:</label>
                <input
                  type="text"
                  id="post-title"
                  value={title}
                  onChange={handleTitleChange}
                  placeholder="Enter the title of your post"
                  required
                />
              </div>
              <div>
                <label htmlFor="post-content">Content:</label>
                <textarea
                  id="post-content"
                  value={content}
                  onChange={handleContentChange}
                  placeholder="Enter the content of your post"
                  required
                />
              </div>
              <div > 
                
                <label htmlFor="post-price">price:</label>
                <input
                  type="text"
                  id="post-price"
                  onChange={handlePriceChange}
                />
              
              </div>
              <div>
              <button type="submit">Upload Post</button>
              </div>
             
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatePost;
