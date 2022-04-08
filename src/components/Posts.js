

import React from 'react'

function Posts({posts, loading}) {
if (loading) {
    return <h2>Loading...</h2>;
    }
return (
    <div>
        <ul>
        {posts.map((post) => (
            <li
            key={post.id}
            className='text-gray-700 font-semibold text-xl mb-2 border p-2'
            >
            {post.title}
            </li>
        ))}
        </ul>
    </div>
    );
};

export default Posts;