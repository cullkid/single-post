import React, { useState } from "react";
import { useEffect } from "react";
import { getPosts as getPostApi } from "../api/Api";
import Card from "../card/Card";
import { PostContainer, PostWrap } from "./style";

const Posts = () => {
  const [allPosts, setAllPosts] = useState([]);

  console.log("posts", allPosts);
  useEffect(() => {
    getPostApi().then((data) => {
      setAllPosts(data);
    });
  }, []);

  return (
    <PostContainer>
      {allPosts.map((post) => (
        <PostWrap>
          <Card key={post.id} post={post} />
        </PostWrap>
      ))}
    </PostContainer>
  );
};

export default Posts;
