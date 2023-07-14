import { useState } from "react";
import CommentSys from "./components/CommentSys";
import NavBar from "./components/NavBar";
import ChooseUser from "./components/ChooseUser";

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
