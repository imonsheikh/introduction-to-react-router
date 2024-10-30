import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {

    const {id, title} = post
    const navigate = useNavigate()

    const handleShowDetails = () => {
         navigate(`/post/${id}`)
    }

    return (
        <div style={{
            border: '2px solid yellow',
            padding: '5px',
            borderRadius: '20px'
        }}> 
            <h4>Post of id: {id}</h4>
            <p>Title: {title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Show details</button></Link>
            <button onClick={handleShowDetails}>Real btn</button>
        </div>
    );
};

export default Post;