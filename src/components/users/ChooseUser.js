import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chooseUser } from "../../store/userSlice";

const ChooseUser = ({ setIsOpen }) => {
  const { users, currentUser } = useSelector((s) => s.user);
  const [selected, setSelected] = useState(currentUser.id || "");
  const dispatch = useDispatch();

  const handleChangeUser = () => {
    dispatch(chooseUser(selected));
    setIsOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-slate-800/90 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-4 bg-white w-4/5 h-2/6 p-8 rounded-lg shadow md:w-2/5">
        <label htmlFor="users" className="text-slate-900">
          Choose prefered user:
        </label>
        <select
          name="users"
          id="users"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4 "
        >
          <option value="">Choose User</option>
          {users.map((el) => (
            <option value={el.id} key={el.id}>
              {el.name}
            </option>
          ))}
        </select>
        <div className="flex justify-center gap-2">
          <button
            onClick={() => setIsOpen(false)}
            className="border focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 border-red-500 text-red-500 hover:text-white hover:bg-red-600 focus:ring-red-900"
          >
            Cancel
          </button>
          <button
            onClick={handleChangeUser}
            className="border focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 focus:ring-blue-800"
            disabled={!selected}
          >
            Let's Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseUser;
