// src/context/CommentContext.js
import React, { createContext, useState, useContext } from 'react';

const CommentContext = createContext();

export const useCommentContext = () => useContext(CommentContext);

export const CommentProvider = ({ children }) => {
  const [commentPosted, setCommentPosted] = useState(false);

  const markCommentPosted = () => {
    setCommentPosted(true);
  };

  const resetCommentPosted = () => {
    setCommentPosted(false);
  };

  return (
    <CommentContext.Provider value={{ commentPosted, markCommentPosted, resetCommentPosted }}>
      {children}
    </CommentContext.Provider>
  );
};
