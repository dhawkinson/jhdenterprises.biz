// Blog.js
// *****************************************************************
// ***** client side - src/components/segments/Blog.js  *****
// ***** This is the Blog Segment for the App          *****
// *****************************************************************

// node modules
import React from 'react';

const Blog = () => {
  
  return (
    <a href='http://www.webandappfactory.com'>
      <div
        className='web top-left'
        style={{ cursor: 'pointer' }}
      >
      <h4>Blog</h4>
      <p>We will keep you informed about market trends.</p>
      <p>We will help consider how to act and react to money.</p>
      <p>You might get some new insights into life.</p>
      <p>Maybe we will make you laugh.</p>
      </div>
    </a>
  )
}

export default Blog;