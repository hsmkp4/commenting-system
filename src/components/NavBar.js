import React from "react";
import { useSelector } from "react-redux";
import { RxAvatar } from "react-icons/rx";

const NavBar = ({ isOpen, setIsOpen }) => {
  const { users, currentUser } = useSelector((s) => s.user);

  return (
    <div className="h-20 bg-slate-800 flex justify-between text-white px-8 items-center mb-8">
      <h3 className="text-xl font-thin sm:text-2xl">Commenting System</h3>
      <div className="flex items-center">
        <div className="flex flex-col justify-center items-center">
          <p className="text-xl">{currentUser.name}</p>
          <button
            onClick={() => setIsOpen(true)}
            className="text-xs bg-slate-200 text-black px-2 py-1 rounded-md"
          >
            Change User
          </button>
        </div>
        {currentUser ? (
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="w-20"
          />
        ) : (
          <RxAvatar size={50} color="white" />
        )}
      </div>
    </div>
  );
};

export default NavBar;
