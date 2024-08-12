"use client"
import React from "react";

const Delete = ({ item, handleDelete }) => {
  return (
    <button
      onClick={() => {
        handleDelete(item);
      }}
      className="w-full bg-red-400 rounded-xl text-white transition-all duration-300 hover:bg-red-500 text-[14px] p-[5px]"
    >
      Delete
    </button>
  );
};

export default Delete;
