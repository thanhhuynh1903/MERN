import React, { useState, useEffect } from "react";
import Ratings from "../Ratings/Ratings";
import AddComment from "../../api/AddComment"; // Assuming AddComment handles API interaction
import { useParams } from "react-router";
import { jwtDecode } from "jwt-decode"; // Assuming this is for decoding JWT tokens
import { useCommentContext } from '../../context/CommentContext'

export default function Comment() {
  const { id } = useParams(); // Assuming you're using id from URL params
  const { markCommentPosted } = useCommentContext();
  const token = localStorage.getItem("accessToken") || "";
  const [content, setContent] = useState({
    rating: 0, // Initialize rating state
    content: "",
    authorId: "",
  });
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      setName(decoded?.name);
      setContent((prevContent) => ({
        ...prevContent,
        authorId: decoded?.userId,
      }));
    }
  }, [token]);

  const handleRatingChange = (ratingValue) => {
    setContent((prevContent) => ({
      ...prevContent,
      rating: ratingValue,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate input fields
    if (!content.content.trim()) {
      setErrorMessage("Please enter your comment");
      return;
    }
    if (content.rating === 0) {
      setErrorMessage("Please select a rating");
      return;
    }

    try {
      // Call your API function to add comment
      const response = await AddComment(id, content); // Assuming AddComment takes id and content

      // Handle success scenario (e.g., show a success message, clear form, etc.)
      console.log("Comment added successfully:", response);

      // Clear the form after successful submission (optional)
      setContent({
        rating: 0, // Reset rating to initial state
        content: "",
        authorId: content.authorId, // Preserve authorId for next comment
      });
      markCommentPosted(); // Mark comment as posted successfully

      setErrorMessage(""); // Clear error message after successful submission
    } catch (error) {
      // Handle error scenario (e.g., show an error message)
      console.error("Error adding comment:", error);
      setErrorMessage("Failed to post your comment. Please try again."); // Display error message on failure
    }
  };

  return (
    <div>
      <div className="w-full px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            Your comment
          </h2>
          <Ratings onRatingChange={handleRatingChange} />
        </div>
        <form className="mb-6" onSubmit={handleSubmit}>
          <div className="flex justify-center">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center">
              <span className="text-white text-xl">
                {name ? name.charAt(0).toUpperCase() : "A"}
              </span>
            </div>
            <div className="ml-5 py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 w-full">
              <label htmlFor="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                rows="6"
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..."
                value={content.content}
                onChange={(e) =>
                  setContent((prevContent) => ({
                    ...prevContent,
                    content: e.target.value,
                  }))
                }
                required
              ></textarea>
            </div>
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}
          <div className="float-end">
            <button
              type="submit"
              className="inline-flex justify-end items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Post comment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
