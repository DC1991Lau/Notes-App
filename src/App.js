import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getNotes } from "./actions/notes";
import { getCategories } from "./actions/categories";
import Main from "./components/Main/";
import Sidebar from "./components/Sidebar/";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getNotes());
    dispatch(getCategories());
  }, [dispatch]);

  console.log(state);
  return (
    <div className="container">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
