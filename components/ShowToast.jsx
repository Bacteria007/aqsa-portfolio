import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const ShowToast = ({ message, type, onClose }) => {
  let toastClass = "bg-green-600"; // default success color
  if (type === "danger") {
    toastClass = "bg-red-600";
  }

  return (
    <div
      className={`fixed bottom-4 right-4 max-w-xs w-full ${toastClass} text-white p-4 rounded-md shadow-lg transition-transform transform ${
        message ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button style={{
          backgroundColor: 'transparent',
        }} className="ml-4 focus:outline-none bg-transparent" onClick={onClose}>
         <AiOutlineClose/>
        </button>
      </div>
    </div>
  );
};

export default ShowToast;
