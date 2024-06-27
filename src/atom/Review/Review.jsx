import React from "react";
import { FaStar } from "react-icons/fa";

const Review = ({ showComment }) => {
  // Function to get initials from the name
  const getInitials = (name) => {
    return name ? name.charAt(0).toUpperCase() : "";
  };

  return (
    <div>
      <hr className="my-3" />
      <div className="underline font-medium text-[30px]">Reviews</div>
      <hr className="my-3" />
      <span className="font-medium">{showComment?.length} review{showComment?.length !== 1 ? "s" : ""}</span>
      {showComment?.map((comment, index) => (
        <div key={index} className="my-5">
          <div className="p-4 bg-gray-200 rounded-xl">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center">
                <span className="text-white text-xl">{getInitials(comment?.author?.name)}</span>
              </div>
              <div className="ml-4">
                <span className="font-medium text-[14px]">{comment?.author?.name}</span>
                <div className="flex mt-1">
                  {Array.from({ length: comment?.rating }, (_, index) => (
                    <FaStar key={index} className="mr-1 text-yellow-500" />
                  ))}
                  {Array.from({ length: 5 - comment?.rating }, (_, index) => (
                    <FaStar key={index} className="mr-1 text-gray-300" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700 mt-2">{comment?.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Review;
