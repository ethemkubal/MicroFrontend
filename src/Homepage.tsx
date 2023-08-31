import { Route, Routes } from "react-router-dom";

function Homepage() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <div></div>
          </div>
        }
        index
      />
    </Routes>
  );
}

export default Homepage;
