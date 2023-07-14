import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "./store/commentsSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);
  return <div>App</div>;
};

export default App;
