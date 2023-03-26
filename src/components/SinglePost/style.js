import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const ContainerWrap = styled.div`
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
`;

export const HeaderParagraph = styled.h1`
  color: black;
  font-weight: 100px;
  text-align: center;
`;

export const FlexContainer = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-gap: 50px;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const FirstFlexContainer = styled.div``;

export const SecondFlexContainer = styled.div`
  flex-grow: 2;
`;

export const ImgContainer = styled.div``;

export const ImgElement = styled.img`
  width: 400px;
  height: 400px;
`;

export const PostContent = styled.p`
  margin-left: 50px;

  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;

export const CommentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;
  justify-content: center;
  color: green;
  margin-left: auto;
  pointer: cursor;
`;

export const CommentsHeader = styled.h3`
  font-size: 12px;
`;
