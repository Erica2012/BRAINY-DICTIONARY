import axios from 'axios';
import React from 'react';
import { getPosts } from '../../utils/getPosts';

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
}

const Posts = ({ posts }) => {
  return (
    <>
      <div className="flex bg-yellow-400">
        <div>
          {posts.map((post) => (
            <p key={post}>{post.title}</p>
          ))}
        </div>

        <div>
          {posts.map((post) => (
            <p key={post}>{post.body}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Posts;
