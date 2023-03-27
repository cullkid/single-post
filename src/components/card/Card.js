import React from "react";
import { Link } from "react-router-dom";
import trem from "../../Image/trem.jpg";
import {
  CardContainer,
  CardWrap,
  CardImg,
  PostTitle,
  PostOwner,
} from "./style";

const Card = ({ post }) => {
  return (
    <Link to="/single-post">
      <CardContainer>
        <CardWrap>
          <CardImg src={trem} alt="avarta" />
          <PostTitle>{post.title}</PostTitle>
          <PostOwner>{post.owner}</PostOwner>
        </CardWrap>
      </CardContainer>
    </Link>
  );
};

export default Card;
