import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import DeleteComments from "../../api/DeleteComments";
import UpdateComment from "../../api/UpdateComment";
import { useParams } from "react-router";
import { useCommentContext } from "../../context/CommentContext";

const Review = ({ showComment }) => {
  const { markCommentPosted } = useCommentContext();
  const { id } = useParams();
  const [editCommentId, setEditCommentId] = useState(null);
  const [editContent, setEditContent] = useState("");
  const [editRating, setEditRating] = useState(0);

  const getInitials = (name) => {
    return name ? name.charAt(0).toUpperCase() : "";
  };

  const handleEdit = (comment) => {
    setEditCommentId(comment._id);
    setEditContent(comment.content);
    setEditRating(comment.rating);
  };

  const handleRatingChange = (newRating) => {
    setEditRating(newRating);
  };

  const handleCancel = async () => {
    setEditCommentId(null);
  }


  const fetchApiUpdate = async () => {
    try {
      const data = {
        rating: editRating,
        content: editContent,
      };
      await UpdateComment(id, editCommentId, data);
      markCommentPosted();
      setEditCommentId(null);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchApiDelete = async (commentId) => {
    try {
      await DeleteComments(id, commentId);
      markCommentPosted();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (commentId) => {
    fetchApiDelete(commentId);
  };

  return (
    <div>
      <hr className="my-3" />
      <div className="underline font-medium text-[30px]">Reviews</div>
      <hr className="my-3" />
      <span className="font-medium">
        {showComment?.length} review{showComment?.length !== 1 ? "s" : ""}
      </span>
      {showComment?.map((comment, index) => (
        <div key={index} className="my-5">
          <div className="p-4 bg-gray-200 rounded-xl">
            <div className="flex items-center w-full">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center">
                <span className="text-white text-xl">
                  {getInitials(comment?.author?.name)}
                </span>
              </div>
              <div className="ml-4 w-full">
                <div className="flex justify-between items-center w-full">
                  <p className="font-medium text-[14px]">
                    {comment?.author?.name}
                  </p>
                  <div className="flex">
                    <FaRegEdit
                      className="mx-3 text-gray-500 cursor-pointer text-[23px]"
                      onClick={() => handleEdit(comment)}
                    />
                    <MdOutlineDeleteForever
                      className="text-gray-500 cursor-pointer text-[25px]"
                      onClick={() => handleDelete(comment._id)}
                    />
                  </div>
                </div>
                <div className="flex mt-1">
                  {Array.from({ length: comment?.rating }, (_, index) => (
                    <FaStar key={index} className="mr-1 text-yellow-500" />
                  ))}
                  {Array.from({ length: 3 - comment?.rating }, (_, index) => (
                    <FaStar key={index} className="mr-1 text-gray-300" />
                  ))}
                </div>
              </div>
            </div>
            {editCommentId === comment._id ? (
              <div>
                <textarea
                  className="w-full p-2 mt-2 border rounded"
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                />
                <div className="flex mt-1">
                  {Array.from({ length: 3 }, (_, index) => (
                    <FaStar
                      key={index}
                      className={`mr-1 cursor-pointer ${
                        editRating > index ? "text-yellow-500" : "text-gray-300"
                      }`}
                      onClick={() => handleRatingChange(index + 1)}
                    />
                  ))}
                </div>
                <button
                  className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
                  onClick={fetchApiUpdate}
                >
                  Save
                </button>
                <button
                  className="mt-2 border-2 border-gray-500 text-gray-500 py-2 px-4 rounded ml-2"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <p className="text-gray-700 mt-2">{comment?.content}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Review;
