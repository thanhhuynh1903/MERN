import React from "react";
import Ratings from "../Ratings/Ratings";
export default function Comment() {
  return (
    <div>
      {" "}
      <div className="w-full px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
          Your comment 
          </h2>
          <Ratings/>
        </div>
        <form className="mb-6">
          <div className="flex justify-center">
          <div className="w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center">
            <span className="text-white text-xl">H</span>
          </div>
          <div className="ml-5 py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 w-full">
            <label for="comment" className="sr-only">
              Your comment
            </label>

            <textarea
              id="comment"
              rows="6"
              className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
              placeholder="Write a comment..."
              required
            ></textarea>
          </div>
          </div>
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
