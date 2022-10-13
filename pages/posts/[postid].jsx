import React from "react";
import { getPosts } from "../../utils/getPosts";

export async function getServerSideProps(context) {
  const post = await getPosts(context.params.postId);

  return {
    props: {
      post,
    },
  };
}
 
const PostDetail = ( ) => {
    return (
        <div>
            <h1>Post Details</h1>
            <hr/>

        </div>
    )
}

export default PostDetail;
