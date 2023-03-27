import styled from "styled-components";

export const CommentsContainer = styled.div`
  margin-left: 50px;
  margin-top: 50px;

  padding: 25px;

  @media (max-width: 768px) {
    margin-left: 0px;
    margin-top: 50px;
  }
`;

export const CommentWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: green;
  margin-left: auto;
  pointer: cursor;
`;

export const CommentsHeader = styled.h3`
  font-size: 12px;
  background-color: black;
  padding: 5px;
`;

export const WriteComment = styled.h3`
  font-size: 12px;

  padding: 5px;
`;

export const ReuseComment = styled.h3`
  margin-top: 40px;
  margin-buttom: 40px;
`;

export const CommentLenght = styled.span`
  margin-left: 5px;
`;
