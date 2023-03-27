import CommentForm from "../commentform/CommentForm";
import {
  CommentContainer,
  EditButton,
  DeleteButton,
  ReplyButton,
  ReplyContainer,
  ParentContainer,
  AutorContainer,
  CommentDate,
  CommentUsername,
  FlexChild,
  CommentBody,
  ParentButton,
} from "./style";
import { BsPersonCircle } from "react-icons/bs";

const Comment = ({
  comment,
  replies,
  setActiveComment,
  activeComment,
  updateComment,
  deleteComment,
  addComment,
  parentId = null,
  currentUserId,
}) => {
  const isEditing =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "editing";
  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "replying";
  //   const fiveMinutes = 300000;
  //   const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
  //   const canDelete =
  //     currentUserId === comment.userId && replies.length === 0 && !timePassed;
  //   const canReply = Boolean(currentUserId);
  //   const canEdit = currentUserId === comment.userId && !timePassed;
  const replyId = parentId ? parentId : comment.id;
  const createdAt = new Date(comment.createdAt).toLocaleDateString();

  return (
    <ParentContainer key={comment.id}>
      <CommentContainer>
        <AutorContainer>
          <BsPersonCircle size={20} />
          <CommentUsername>{comment.username}</CommentUsername>
        </AutorContainer>{" "}
        {!isEditing && <CommentBody CommentBody>{comment.body}</CommentBody>}
        <FlexChild>
          {/* <CommentFlex></CommentFlex> */}
          <CommentDate>{createdAt}</CommentDate>
        </FlexChild>
        {isEditing && (
          <CommentForm
            submitLabel="Update"
            hasCancelButton
            initialText={comment.body}
            handleSubmit={(text) => updateComment(text, comment.id)}
            handleCancel={() => {
              setActiveComment(null);
            }}
          />
        )}
        <ParentButton>
          <ReplyButton
            className="comment-action"
            onClick={() =>
              setActiveComment({ id: comment.id, type: "replying" })
            }
          >
            Reply
          </ReplyButton>

          <EditButton
            className="comment-action"
            onClick={() =>
              setActiveComment({ id: comment.id, type: "editing" })
            }
          >
            Edit
          </EditButton>

          <DeleteButton
            className="comment-action"
            onClick={() => deleteComment(comment.id)}
          >
            Delete
          </DeleteButton>
        </ParentButton>
        {isReplying && (
          <CommentForm
            submitLabel="Reply"
            handleSubmit={(text) => addComment(text, replyId)}
          />
        )}
      </CommentContainer>
      {replies.length > 0 && (
        <ReplyContainer>
          {replies.map((reply) => (
            <Comment
              comment={reply}
              key={reply.id}
              setActiveComment={setActiveComment}
              activeComment={activeComment}
              updateComment={updateComment}
              deleteComment={deleteComment}
              addComment={addComment}
              parentId={comment.id}
              replies={[]}
              currentUserId={currentUserId}
            />
          ))}
        </ReplyContainer>
      )}
    </ParentContainer>
  );
};

export default Comment;
