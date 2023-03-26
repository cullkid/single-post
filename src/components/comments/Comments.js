import { useState, useEffect } from "react";
import CommentForm from "../commentform/CommentForm";
import Comment from "../comment/Comment";
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
} from "../api/Api";
import {
  CommentsContainer,
  CommentWrap,
  CommentsHeader,
  WriteComment,
  ReuseComment,
} from "./style";

const Comments = ({ currentUserId }) => {
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );
  const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  const addComment = (text, parentId) => {
    createCommentApi(text, parentId).then((comment) => {
      setBackendComments([comment, ...backendComments]);
      setActiveComment(null);
    });
    console.log("addComment", text, parentId);
  };

  const updateComment = (text, commentId) => {
    updateCommentApi(text).then(() => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment.id === commentId) {
          return { ...backendComment, body: text };
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  };
  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure you want to remove comment?")) {
      deleteCommentApi().then(() => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        setBackendComments(updatedBackendComments);
      });
    }
  };
  console.log("comments", backendComments);
  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);

  return (
    <CommentsContainer>
      <CommentWrap>
        <CommentsHeader className="comments-title">Comments</CommentsHeader>
      </CommentWrap>

      <div className="comments-container">
        {rootComments.map((rootComment) => (
          <ReuseComment>
            <Comment
              key={rootComment.id}
              comment={rootComment}
              replies={getReplies(rootComment.id)}
              activeComment={activeComment}
              setActiveComment={setActiveComment}
              addComment={addComment}
              deleteComment={deleteComment}
              updateComment={updateComment}
              currentUserId={currentUserId}
            />
          </ReuseComment>
        ))}
      </div>
      <WriteComment>Write comment</WriteComment>
      <CommentForm submitLabel="Write" handleSubmit={addComment} />
    </CommentsContainer>
  );
};

export default Comments;
