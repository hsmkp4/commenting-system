import { useState } from "react";
import NavBar from "./components/NavBar";
import ChooseUser from "./components/users/ChooseUser";
import CommentSys from "./components/comments/CommentSys";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="relative">
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <ChooseUser setIsOpen={setIsOpen} />}
      <CommentSys />
    </div>
  );
};

export default App;
